---
layout: blog
title: "Visualizing The Air Quality With Lambda Functions"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: pollution
icon_author: Thomas Millot
icon_url: "https://unsplash.com/photos/q5jKHtV4hWc"
description: "How to transform open data into APIs using lambda functions"
author: teleyinex
---

# Lambda functions

[Lambda](https://en.wikipedia.org/wiki/AWS_Lambda) functions have been with us since 2014.
However, while I understand how they work, I didn't find a way to use them in a real case. Until this weekend :stuck_out_tongue_winking_eye:.

If this is the first time that you hear this term, a lambda function is a web
service, it could be Amazon, Zeit or Netlify, that will allow you to run a
function (in your preferred programming language) when you access a given URL.

In theory, the advantages are that you don't have a real server running all the
time, and that they will only charge for each call to that URL, so it should be
"cheaper."

But, as it is serverless, you don't have access to a DB, and therefore you
cannot do "too many things." That's why I didn't see its use cases. Until I
figured out.

## Building APIs using lambda functions

Due to my job, I work a lot with data. Broadly speaking, I usually work with
open data, so, the data is publicly available, but generally, there's not an API
for them.

In those cases, they usually offer you a CSV, XML or similar file, that you will
have to download every single day (or every hour) to work with it. In other
words, a bit messy.

But, OK, yes, it works. But it's not the best. Especially if you want to make
queries, because in those cases you will have to build your own search
functionality or store all the data in your preferred DB.

Obviously, all the previous comments depend on what you want to do with your
project. If you only want to show old data (or aggregated one), the CSV or XML
is perfect. But if you're going to do something more dynamic, then, you have a
problem, and you will  have to hack a bit :smile:

From this requirement, I found the answer to my question: what if we could use
lambda functions to do scrapping of open data and return everything in JSON?
The answer: yes you can, and it works like a charm.

## An API for Madrid's air quality portal

I discovered this idea because some time ago, I was trying to see how the air
quality data of Madrid, Spain was published. The result was a bit sad, as you
can have access to the CSV and XML that I mentioned before, an hour prediction
per station, and a PDF. In other words, nothing really "useful" if you want to
build something cool with your #jamstack. Something like a Progressive Web
Application.

![pantallazo de la web del Ayuntamiento](/assets/img/blog/aire1.png)

The council's web page shows you the data, but obviously it's not responsive, it
has five tables (one within the other) to create the layout... :scream:
(somebody should talk to them about HTML5, flexbox, and grid).

So, I started to work on it. After checking the web, I found that in their forecast per hours, you can select a station and a date (or pollutant) to get the data in
a nice table. After opening the dev tools from Chrome, I found that this form
sends the following information:

![pantallazo del formulario](/assets/img/blog/form.png)

Easy peasy. I only needed to make the same request, passing the station ID and a
given date. The web page will return me an HTML that I could parse. 

### Lambda functions in Zeit

My toolchain always involves Python and Js, so Zeit was a perfect option for
me. Zeit allows you to create lambda functions for both languages, so it is
perfect.

In my case, I chose Python and BeautifulSoup4 for doing the parsing.

The web page with the result has 5 tables (not a single div, OMG). I found the one that has the real data, and with that info I return this beautiful JSON:

```
{
"Dióxido de Azufre[µg/m³]": [], // 24 items
"Dióxido de Nitrógeno[µg/m³]": [], // 24 items
"Ozono[µg/m³]": [
22,
32,
36,
41,
52,
50,
46,
46,
44,
-1,
51,
54,
55,
57,
59,
60,
55,
52,
47,
40,
41,
43,
39,
39
],
"Hora": [], // 24 items
"estacion": "Estación de Villaverde",
"fecha": "10/02/2019"
}
```

Ready to be consumed by any JS library that can paint any beautiful chart. The API allows me to use any station from Madrid an any given date.

With this ready, all I had to do was to adapt my script to become a lambda
function.

The documentation about how to do it in Zeit is a bit [scarce](https://zeit.co/examples/python). However, doing a bit of googling you will get what you need.
With only 47 lines of code, I have a lambda function that parses the air quality
of Madrid in real time :sunglasses::

```
from http.server import BaseHTTPRequestHandler
import requests
import json
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        estacion = parse_qs(urlparse(self.path).query).get('estacion')[0]
        date = parse_qs(urlparse(self.path).query).get('date')[0]
        data = {'menu':  'consulta', 'smenu': 'reports', 'link': 'data',
                'view': 'data', 'magnitud': '', 'estacion': int(estacion),
                'date': date}
        url = 'http://www.mambiente.munimadrid.es/sica/scripts/index.php?lang=es'
        r = requests.post(url, data=data)
        soup = BeautifulSoup(r.content, 'html.parser')
        tables = soup.find_all('table')
        table = tables[4]
        meta = table.find_all(class_='hs')
        headers = table.find_all(class_='hd')
        tmp = dict()
        data = table.find_all(class_='datos')
        val = []
        for i in range(len(headers)):
            val.append(list())
        for idx, d in enumerate(data):
            k = idx % len(headers)
            v = d.get_text()
            if ((':' not in v) and ('-' not in v)):
                v = float(v)
            else:
                if ('-' in v):
                    v = -1.0
            val[k].append(v)
        for idx, h in enumerate(headers):
            k = idx % len(headers)
            v = h.get_text()
            tmp[v] = val[k]
        tmp['estacion'] = meta[0].get_text()
        tmp['fecha'] = meta[1].get_text()
        self.wfile.write(str(json.dumps(tmp)).encode())
```

Easy, simple and very clean. The best of all is that you can set any headers
that you want, so you can (you should actually) enable CORS so your frontend
server can use it.

Once you have done it, all you have to do is deploy it with one command: now.

## Progressive Web Application

At this point, the only remaining part was the frontend server. Thus, I use:
NuxtJS and created a SPA that will be deployed as well in Zeit. The SPA is a
PWA so you can install it on your phone.

For the UI toolkit, I'm using Vuetify and its Sparklines components. They are
super cool, and you can create these amazing animations:

<video width="400" controls>
  <source src="/vid/aire.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

If you want to try the SPA go here: 
[https://aire.daniellombrana.es](https://aire.daniellombrana.es)

## Final thoughts

I'm really surprised about how well everything works. Especially, knowing that I
built everything in 4 hours (I didn't try before lambda functions).

I love the idea that I can use this for doing really quick prototypes, that will
save me time and effort in setting up a server with its DB.

What do you think? Did you like it? Let me know on Twitter!
