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

Dado que puede participar cualquier persona en el proyecto, el sistema valida
las contribuciones de la siguiente forma:

* Para cada polígono, ya sea tejado o paneles solares, se calcula el centro geométrico (centroide).
* Agrupamos los centroides que estén en un radio de menos de 2 metros.
* Si los participantes han dibujado correctamente el tejado y/o los paneles
  solares, los centroides estarán muy juntos.
* Calculamos el área de aquellos polígonos cuyos centroides estén juntos. El
  resto los eliminamos.
* Para cada área se caclula tanto la desviación típica, así como los diferentes cuartiles (25%,
  50%, 75% y 100%), el máximo y el mínimo valor enviado por los participantes.
* Si los usuarios respondieron que hay paneles solares, se repiten los pasos
  anteriores, pero solo para los paneles solares.

De esta manera solo consideramos aquellos polígonos que realmente sean los
correctos.

## Cálculo de energía, inversión, CO2, etc.

Con los datos del área de los tejados, podemos medir el potencial fotovoltáico
que podrían tener los edificios analizados. También, gracias a este cálculo
podemos saber cuanto CO2 se podría evitar, así como cuanto dinero se podría
ahorrar el estado Español al auto-producir su propia energía.

### Potencial fotovoltáico

* El área del tejado se divide a la mitad, siempre, para tener en cuenta
  sombras, u otros elemenos que pudieran afectar a la instalación de los paneles
  (patios interiores).
* Se considera que la otra mitad del tejado se cubra con paneles fotovoltaicos y que 
  cada metro cuadrado de 167 watios de potencia. Se multiplica la potencia que se podría 
  instalar en el tejado por la producción anual media real fotovoltaica de la provincia 
  en la que está ubicado el edificio según los datos que proporciona [Red Eléctrica de
  España](https://www.esios.ree.is/is/maps-of-interest/map-of-production-annual-media-photovoltaic). 
  Con esto obtenemos la producción anual de electricidad que se podría generar si se cubriera 
  de paneles solares la mitad del tejado medido.

### Ahorro para las arcas públicas

Consideramos que la electricidad que podría producirse en el tejado medido sea consumida de forma instantanea en el mismo edificio y que por lo tanto el ahorro de dinero que genere la instalación será la diferencia entre la electricidad que la Administración central ya no tiene que comprar a las eléctricas (0,139€ + IVA 21% e impuesto sobre la electricidad 5,11269%) y la inversión necesaria para realizar la instalación fotovoltaica (1,45€/W). Se considera una vida útil de la instalación de 25 años.

Si la superficie disponible en el tejado es inferior a 60m2 (< 10kW) consideramos que no se aplica el Impuesto al Sol (para un punto de conexión 3.0 A) así como en el caso del archipiélago Canario, Melilla, Ceuta, Ibiza y Formentera.

En los demás casos sí se introduce el Impuesto al Sol que debería pagar la Administración sobre la electricidad autoconsumida de forma instantánea (cargo transitorio por energía autoconsumida para un punto de conexión 3.0 A según lo establecido por el [Gobierno](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2016-12464))

### Ahorro de emisiones de gases de efecto invernadero

Para calcular cuántas emisiones de gases de efecto invernaderos evitaría cada instalación se multiplica la producción de electricidad renovable por el factor de emisión del sistema eléctrico del estado español en el que esté ubicado el edificio según los datos aportados por Red Eléctrica Española para el año [2017](http://www.ree.es/es/estadisticas-del-sistema-electrico-espanol/series-estadisticas/series-estadisticas-nacionales)

Sistema peninsular: 0,269 kg CO2/kWh  
Sistema balear: 0,714 kg CO2/kWh  
Ceuta y Melilla: 0,745 kg CO2/kWh  
Sistema canario: 0,775 kg CO2/kWh

### Equivalencias

Para calcular las equivalencias necesarias a hacer más entendibles los datos aportados se ha considerado los siguientes datos:

1.  Consumo de electricidad anual de un hogar medio español: 3.500 kWh/año
2.  Emisiones de un coche medio de gasolina del parque actual de vehículos 160 gCO2/km
3.  Superficie del césped del campo de fútbol Santiago Bernabéu: 105m * 68m

## Software utilizado

Para el análisis se está utilizando el paquete estadístico [Pandas](https://pandas.pydata.org/) y el algoritmo [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN) para generar los clusters.  
El resto es [PYBOSSA](https://scifabric.com).
