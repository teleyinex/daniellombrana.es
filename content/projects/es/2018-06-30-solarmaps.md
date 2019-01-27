---
layout: project
title: "Solarmaps para Greenpeace España"
date: 2018-06-01
tags: vuejs, nuxtjs, frontend, backend, pybossa
type: frontend, backend, analista de datos
home: https://solarmaps.greenpeace.es/
state: producción
permalink: /projects/solarmaps
featured: yes
meta_description: "Analizando el potencial solar de España"
partners: [Greenpeace España, Factoría Cultural Madrid]
icon: sky
iconauthor: 
lang: es
role: "CTO, desarrollador frontend , desarrollador backend, analista de datos"
---

Greenpeace España nos contrató a través de mi compañía Scifabric para
desarrollar una plataforma sobre la energía solar. En concreto querían pedir al
gobierno Español que promueva y utilice energías renovables.

Para alcanzar este objetivo, diseñe un proyecto de crowdsourcing. Los
voluntarios tenían que medir el área del tejado de los edificios públicos. Para
conseguirlo, mapeamos todos los edificios del gobierno de España (a través del portal de
datos abierto), y preguntamos a voluntarios de todo el mundo que confirmasen la
localización de los edificios. Luego, tan solo tenían que dibujar un polígono
encima del tejado del edificio en cuestión.

Para construir la plataforma utilizamos PYBOSSA y NuxtJS. Construí una Progressive Web
Application que puede utilizarse en móviles, tabletas y ordenadores de
escritorio.

El proyecto utiliza además el análisis en tiempo real de PYBOSSA. La siguiente
parte explica la metodología que utilicé para el cliente.

## Capturando datos: Los edificios públicos de la administración Española

Para crear este proyecto necesitábamos la base de datos de todos los edificios
públicos pertenencientes a la administración central.

El ministerio de Política territorial y Función pública tiene un [portal web](http://transparencia.gob.es/servicios-buscador/buscar.htm?categoria=bienesinmuebles_ind&categoriasPadre=conconvsub&ente=I00000179,EA0008567,E04585801,E00003901,E00003301,E04921301,E04990101,E00003801,E00003601,E04921401,E04921501,E04921601,E04990201,E04921701,E04990301,E00004101,E04990401,E04921801,E04990501,E04921901&lang=es&tipocibi=edificio)
en el que se puede obtener un listado de todos esos edificios.

Los datos que proporciona dicha web son los siguientes:

* Tipo
* Lugar: su dirección postal
* Uso: a qué ministerio pertenece dicho edificio
* Superficie: los metros cuadrados de la superficie

Para nosotros, los datos relevantes era el lugar o dirección, dado que lo que
queremos medir es el área del tejado.

### Mapeando los edificios

Con la dirección postal de los edificios, nos fuimos a Google Maps y buscamos
sus coordinadas (latitud y longitud) para geolocalizarlos en un mapa.

De los 9959 edificios que se muestran en el portal de transparencia, Google solo
devolvió resultados para 5253. Esto se debe en parte a que los edificios no
encontrados tienen la dirección mal escrita, con caracteres que no existen, etc.
Por este motivo, tan solo pudimos trabajar con 5253 edificios.

### Midiendo el área del tejado en metros cuadrados

Con los edificios ya geolocalizados, nos pusimos manos a la obra con el
frontend. Para este proyecto utilizamos [PYBOSSA](https://scifabric.com/howitworks/), una tecnología
que nos permite que cada edificio se compruebe por varias personas a la vez, para
posteriormente analizar estadísticamente cada una de las contribuciones de los
participantes. De esta forma podremos generar resultados válidos para el
cliente.

El frontend por lo tanto se compone de los siguientes pasos:

* Se solicita a un voluntario que encuentre un edificio, dada su dirección
  postal.
* Una vez confirmada su posición, se le solicita que dibuje el área del tejado.
* Finalmente, se le pregunta si ve paneles solares y en caso afirmativo se
  solicita que los dibuje todos (queremos saber cuantos metros cuadrados hay de
  paneles solares). Si no hay paneles solares, el análisis está completo.

Por defecto cada edificio es analizado por 3 personas diferentes. Un mismo
usuario no puede participar dos o más veces en un edificio que ya ha analizado.
Así evitamos problemas con los datos. Cuando un edificio ha sido analizado por 3
personas, PYBOSSA analiza las contribuciones y proporciona un resultado.


# Análisis estadístico

In order to avoid participants who wish to send wrongful data, the system
validates the data as follows:

* For each polygon -rooftop or solar panel area, it calculates the geometric
  center (centroid).
* With all centroids, it searches those groups that are within a circle in which
  the distance -or maximum error, is 20 meters.
* If the participants have correctly drawn the roof and/or solar panels, their
  centroids will be very close together and they will meet the previous step.
* Those that are within the cluster, will move on to the next phase: polygon
  area calculation, with those that are not inside being eliminated.
* For the area the standard deviation is calculated: the different quartiles
  (25%, 50%, 75% and 100%) as well as the maximum and minimum value sent by the
  participants.
* If the users answered that there are solar panels, then steps 1 to 5
  -described here, are to be repeated for each solar panel.

This way we can eliminate those contributions that are not good  allowing us to
focus on the data that we need

## Power, investment, CO2, etc. calculation

Once that the extension for each of the Central Government´s rooftops has been
measured, the potential of photovoltaic electricity that could be generated in
each one of those rooftops is calculated, as well as the CO2 emissions that
could be avoided alongside with the financial savings that would mean for the
Central Government and, therefore, for the citizens.

### Photovoltaic potential

* The roof extension is multiplied by 0.5 to take into account possible shadows
  and/or other elements that would avoid the installation of solar energy.
* It is considered that the other rooftop half is covered with photovoltaic
  panels and each square meter with 167 watts of power. The power that could be
  installed on the roof is multiplied by the average real annual photovoltaic
  production of the province in which the building is located according to the
  data provided by [Red Eléctrica de
  España](https://www.esios.ree.is/is/maps-of-interest/map-of-production-annual-media-photovoltaic).
  With this, we obtain the annual electricity production that could be generated
  if half of the measured roof was covered with solar panels.

### Public Coffers savings

We believe that the electricity that could be produced in the measured roof
could be instantly used up in the same building and therefore saving money
generated by the installation, which would be the difference between the
electricity that the Central Government no longer has to buy to the electric
company (€ 0.139 + VAT 21% and 5.11269% electricity tax) and the investment
required to carry out the photovoltaic installation (€ 1.45 / W) - a lifetime of
25 years is considered per installation.

If the available roof area surface is less than 60m2 (<10kW) we consider that,
what is known in Spain as, the Sun Tax (for a 3.0 A connection point) is not
applicable as well as are the cases of the Canary Islands, Melilla, Ceuta,
Ibiza, and Formentera.

In the other cases, the Sun Tax that should be paid for by the Administration on
self-consumed electricity is instantly introduced (transitory charge for
self-consumed energy for a 3.0 A connection point as established by the
[Government](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2016-12464)


### Greenhouse Gas Emissions savings

To calculate the amount of greenhouse gas emissions that each installation would
avoid from occurring, the production of renewable electricity is multiplied by
the emission factor of the electrical system of the Spanish region in which the
building is located according to the data provided by Red Eléctrica Española for
the year
[2017](http://www.ree.es/es/estadisticas-del-sistema-electrico-espanol/series-estadisticas/series-estadisticas-nacionales)

Mainland Spain: 0.269 kg CO2 / kWh Balearic Islands: 0,714 kg CO2 / kWh Ceuta
and Melilla: 0,745 kg CO2 / kWh Canary Islands: 0,775 kg CO2/kWh


### Equivalences

To calculate the necessary equivalences to make the data provided more
understandable, the following information has been considered:

* Annual electricity consumption of an average Spanish household: 3,500 kWh /
  year
* Emissions of an average gasoline car from the current vehicle fleet 160 gCO2 /
  km
* Lawn surface of the Santiago Bernabéu football field: 105m * 68m

## Software used For the analysis, the statistical package
[Pandas](https://pandas.pydata.org/) is used, as well as the algorithm
[DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) to generate the clusters.

The rest is [PYBOSSA](https://scifabric.com) and [NuxtJS](https://nuxtjs.org/).

