---
layout: blog
title: "Una API para la calidad del aire de Madrid con menos de 50 líneas de
código"
date:  2019-01-18 
quote: Lorem ipsum dolor sit amet, consectetur adipisicing elit
icon: pollution
icon_author: Thomas Millot
icon_url: "https://unsplash.com/photos/q5jKHtV4hWc"
description: "Usando funciones lambda para crear APIs"
author: teleyinex
---

# Funciones Lambda

Las funciones [lambda](https://en.wikipedia.org/wiki/AWS_Lambda) llevan con nosotros desde 2014, más o menos. El caso es que
aunque entendía cómo funcionaban no les veía un uso práctico. Hasta este fin de
semana :stuck_out_tongue_winking_eye:.

Por si es la primera vez que oyes este término, una función lambda es un
servicio web, puede ser Amazon, Zeit o Netlify, que te permiten ejecutar una
función (en tu lenguaje de programación favorito) cuando accedes a una URL
específica.

Las ventajas sobre el papel es que no hay un servidor funcionando todo el rato,
por lo que te cobran solo por cada una de las llamadas a dicha URL y por lo
tanto "debería ser más barato".

Claro, al ser serverless, pues eso, no tienes acceso a bases de datos, y por lo
tanto no "puedes hacer muchas cosas". De ahí que no le viese la utilidad
directamente. Hasta que se me encendió la bombilla.

## Creando APIs con funciones Lambda

Por mi trabajo, curro mucho con datos. Generalmente trabajo con datos abiertos,
es decir, que están disponibles públicamente, pero generalmente estos datos no
tienen una API asociada.

Normalmente en estos casos lo que hacen es darte un fichero XML, CSV o similar
que tienes que descargar todos los días o cada equis horas para poder trabajar
con ellos. Vamos, un lío.

El caso es que vale, eso funciona, pero no es lo mejor. Sobretodo si quieres
hacer búsquedas, porque en ese caso tendrás que hacerte tú la búsqueda o
almacenar todos los datos en tu base de datos favorita.

Todo esto claro depende de cómo quieres que sea tu proyecto. Si lo único que
quieres es mostrar datos antiguos, o agregados, el CSV o XML es perfecto, pero
si lo que quieres es hacer algo más dinámico, pues ya tienes que andar enredando
un poco con el código :smile:

De esta necesidad salió mi respuesta a las funciones lambda: ¿y si pudiésemos
usar una función para hacer scrapping de una web con datos abiertos y devolver todo en formato JSON
bonico? Pues efectivamente se puede y funciona a las mil maravillas.

## Una API para la calidad del Aire de Madrid

Todo esto se me ocurrió porque hace un tiempo estuve intentando ver cómo se
publicaban los datos de la calidad del aire en Madrid. El resultado es un poco
triste, puesto que tienes los CSV y XML que he dicho y una predicción por horas
o un boletín en formato PDF. Vamos, un lío si quieres hacer algo chulo, como por
ejemplo una Progressive Web Application.

![pantallazo de la web del Ayuntamiento](/assets/img/blog/aire1.png)

La web del Ayuntamiento te muestra los datos. Pero claro, no es responsive,
tiene 5 tablas (una dentro de otra) para hacer el layout... :scream: (alguien
debería hablarles de HTML5, flexbox y grid).

Así que me puse manos a la obra. Tras cacharrear un rato con la web del
Ayuntamiento, descubrí que en la predicción por horas, puedes
seleccionar una estación, así como una fecha y/o contaminante. Tras abrir las dev tools de
Chrome, vi que era un formulario y que enviaba algo tal que así:

![pantallazo del formulario](/assets/img/blog/form.png)

Por lo que lo tenía hecho. Tan solo tenía que hacer la misma petición pasándole
esos datos en el formulario. La página me devolvería un HTML con el que podría
trabajar. Y esto está chupado si usas algo como NuxtJS + Axios + Vuetify y creas
una PWA en unos minutos :smile_cat:


### Funciones lambda en Zeit

Casi siempre trabajo con Python y con JS por lo que Zeit era una buena opción
para probar lo que quería hacer. Zeit te permite crear funciones lambda para
ambos lenguajes de programación así que perfecto.

En mi caso, escogí Python y BeautifulSoup4 para hacer el parseo del HTML que me
devuelve la página web del Ayuntamiento de Madrid.

La página web con el resultado tiene muchas tablas (ningún div, madre del amor
hermoso), así que busqué la que me interesaba. Con la tabla identificado,
buscaba los contaminantes (puesto que cada estación tiene los suyos) y genero un
JSON así de bonito:

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

Listo para ser consumido por cualquier librería de JS que pinte unos gráficos
bonitos. La API me permite por lo tanto pedir los datos de contaminación para
cualquiera de las estaciones de Madrid en cualquier fecha.

Con esto listo, tan solo tenía que adaptar mi script a la función lambda de
Zeit.

Zeit tiene una documentación un [pelín escasa](https://zeit.co/examples/python) con respecto a esto, pero haciendo
un poco de Google sacas todo lo que necesitas. Con tan solo 47 líneas de código
tengo una función lambda que parsea la calidad del aire en Madrid en tiempo
real :sunglasses::

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

Fácil sencillo y muy limpio. Lo mejor de todo es que puedes poner la cabecera
que quieras, por lo que puedes (y debes) habilitar CORS para que tu servidor
frontend pueda usarlo.

Una vez hecho, tan solo hay que desplegarlo con el comando: now y ¡listo!

## Progressive Web Application

Aquí ahora ya sólo quedaba montar el servidor front. Así que cogí: NuxtJS y creé
una página web estática que desplegaría también en Zeit. Es una SPA con PWA
activado para que vaya rápido como el rayo. 

Para la parte gráfica tiramos de Vuetify y sus Sparklines que nos permiten hacer
animaciones super chulas como esta:

<video width="400" controls>
  <source src="/vid/aire.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

Si quieres probar la web, aquí tienes el enlace
[https://aire.daniellombrana.es](https://aire.daniellombrana.es)

## Conclusiones

Estoy muy sorprendido por lo bien que ha ido todo, teniendo en cuenta que he
desarrollado esto en unas 4 horas (no había probado antes las funciones lambda).

Me quedo con la idea de que para hacer prototipados rápidos es la caña y puedes
hacer cosas muy chulas que de otra forma no sería posible.

¿Qué os ha parecido a vosotros? Preguntadme o responderme por Twitter.
