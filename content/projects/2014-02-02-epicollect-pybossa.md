---
date: 2013-04-09
title: EpiCollect + PYBOSSA
tags: epicollect, volunteer thinking, crowdcrafting, biology, PYBOSSA, air quality, science
type: volunter sensing, crowdsourcing
github: https://github.com/PYBOSSA/app-epicollect
home: http://crowdcrafting.org/app/airquality/
state: production
slug: epicollectpybossa
meta_description: Analyzing Air Quality with Biomarkers
partners: <a href="http://citizencyberscience.net"><span itemprop="creator">Citizen Cyberscience Centre</span></a>, <a href="http://www.imperial.ac.uk/"><span itemprop="creator">Imperial College London</span></a>
icon: airquality
iconauthor: <a href="http://www.flickr.com/photos/benetd/134314157/">benet2006</a>
lang: en
role: core developer
layout: project
---

This [application](http://crowdcrafting.org/app/airquality/) is a template that shows how an application can involve **volunteer sensing** and **volunteer thinking** in the [Crowdcrafting.org](http://crowdcrafting.org) platform.

The application uses the **volunteer sensing** platform [EpiCollect](http://plus.epicollect.net) developed by [Imperial College London](http://www.imperial.ac.uk/) that provides a web application for the generation of forms and freely hosted project websites (using Google's AppEngine) for many kinds of mobile data collection projects. 

In order to make easier the use of the data obtained with EpiCollect, I added a [PYBOSSA](http://dev.pybossa.com) task importer that allows you to import the obtained data directly to your PYBOSSA application.

As a result of this integration, we have created a PYBOSSA application that allows you to "estimate the quality of the air" using lichens as biomarkers. The estimation involves the data acquisition and also the measurement of the area covered by the lichen. The data acquisition is carried out with the EpiCollect framework while the data analysis is done in the PYBOSSA application where the user will categorize the type of lichen and measure the size covered by it.

<p>Lichens are composite organisms consisting of a fungus (the mycobiont) and a photosynthetic partner (the photobiont or phycobiont) growing together in a symbiotic relationship. The photobiont is usually either a green alga (commonly Trebouxia) or cyanobacterium (commonly Nostoc). The morphology, physiology and biochemistry of lichens are very different from those of the isolated fungus and alga in culture. Lichens occur in some of the most extreme environments on Earth—arctic tundra, hot deserts, rocky coasts, and toxic slag heaps. However, they are also abundant as epiphytes on leaves and branches in rain forests and temperate woodland, on bare rock, including walls and gravestones, and on exposed soil surfaces (e.g., Collema) in otherwise mesic habitats. The roofs of many buildings have lichens growing on them. Lichens are widespread and may be long-lived; however, many are also vulnerable to environmental disturbance, and may be useful to scientists in assessing the effects of <a href="http://www.nature.com/nature/journal/v289/n5795/abs/289289a0.html">air pollution</a>, ozone depletion, and metal contamination.</p>

<p>Lichens are informally classified by growth form into:</p>
<div class="row">
<div class="col-md-12">
    <div class="col-md-4">
        <div class="thumbnail">
            <img src="http://farm1.staticflickr.com/47/134314157_b17f465dfc.jpg">
        <h3>Crusty</h3>
        <p><a href="http://www.flickr.com/photos/benetd/134314157/"><i class="fa fa-picture-o"></i> by benet2006</a></p>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail">
            <img src="http://farm3.staticflickr.com/2607/3986134065_faebf320c6.jpg">
            <h3>Leaflike</h3>
            <p><a href="http://www.flickr.com/photos/zquirell/3986134065/"><i class="fa fa-picture-o"></i> by Boriss Lariushin</a></p>
        </div>
    </div>
    <div class="col-md-4">
        <div class="thumbnail">
            <img src="http://farm4.staticflickr.com/3294/2451758194_ea0bbfdcc9.jpg">
            <h3>Shrubby</h3>
            <p><a href="http://www.flickr.com/photos/7147684@N03/2451758194/"><i class="fa fa-picture-o"></i> by Jason Hollinger</a></p>
        </div>
    </div>
</div>
</div>

<h2>Lichens as pollution indicators</h2>
<p>Lichens are sensitive to air pollution, specially the air's acidity. Therefore, the presence or absence can be used to see how clean the air is. Shrubby and leafy lichens only survive in clean air, and when an area is really polluted you will not find anyone.</p>

<p>The goal of this application is to help to analyze, classify and measure the size of the lichens in order to study the quality of air in different areas of the cities.</p>

<p>Look for lichens on walls, stones and trees take pictures with your phone and submit the data using this <a href="http://plus.epicollet.net/lichens">EpiCollect Plus Lichens project</a>. Then, you can help in measuring the size of the lichen in this web application!</p>
<p>Based on the size of the lichen we will estimate the pollution according to this table (extracted from an <a href="http://www.epa.gov/airnow/workshop_teachers/dont_take_a_lichen_for_pollution.pdf">article</a> published by the <a href="http://www.epa.gov/">United States Enviromental Protection Agency</a>):</p>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Size (Square Milimeters)</th>
            <th>Air Quality</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>100 - 120</td>
            <td>Excellent</td>
        </tr>
        <tr>
            <td>70 - 90</td>
            <td>Good</td>
        </tr>
        <tr>
            <td>40 - 60</td>
            <td>Fair</td>
        </tr>
        <tr>
            <td>0 - 30</td>
            <td>Poor</td>
        </tr>
    </tbody>
</table>
