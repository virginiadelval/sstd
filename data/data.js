// Definición del GeoJSON
var barrio = {
    "type": "FeatureCollection",
    "name": "barrio3",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "ID": 1.0, "BARRIO": "Soberania Nacional", "BARRIO_CL": "Barrio", "NOM_LARGO": "Barrio Soberania Nacional", "TIPO": "FORMAL", "AÑO": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -65.437215808967338, -24.771274651784147 ], [ -65.437062436626348, -24.76926152063783 ], [ -65.436338332315785, -24.769297946431994 ], [ -65.436493637112278, -24.771325770104863 ], [ -65.437215808967338, -24.771274651784147 ] ] ] ] } },
        { "type": "Feature", "properties": { "ID": 2.0, "BARRIO": "Inversiones Terranova", "BARRIO_CL": "Barrio", "NOM_LARGO": "Barrio Inversiones Terranova", "TIPO": "FORMAL", "AÑO": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -65.415895615715101, -24.813261479891128 ], [ -65.412318331727832, -24.815077018969475 ], [ -65.413462254132767, -24.81667702894492 ], [ -65.413978050440718, -24.816067594752379 ], [ -65.415542392180242, -24.815080099466222 ], [ -65.416077538795676, -24.814805122233768 ], [ -65.416749072408379, -24.814463797027532 ], [ -65.415895615715101, -24.813261479891128 ] ] ] ] } },
        { "type": "Feature", "properties": { "ID": 3.0, "BARRIO": "Santa Clara de Asis", "BARRIO_CL": "Barrio", "NOM_LARGO": "Barrio Santa Clara de Asis", "TIPO": "FORMAL", "AÑO": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -65.40068504784459, -24.824475660796605 ], [ -65.400318269237701, -24.824564855174604 ], [ -65.399966316376762, -24.824635812669808 ], [ -65.398714137072773, -24.824583178300966 ], [ -65.396779650591441, -24.824350967399909 ], [ -65.395949511671958, -24.825699914617207 ], [ -65.396000728650492, -24.826016801586036 ], [ -65.395844530124222, -24.826236960199374 ], [ -65.396576243146313, -24.826657594729834 ], [ -65.396446515584969, -24.826866601376388 ], [ -65.398361575856327, -24.827202554950826 ], [ -65.399676089444213, -24.826484294989189 ], [ -65.399684779416617, -24.82617099197585 ], [ -65.399813721242438, -24.826024782381605 ], [ -65.400429323156587, -24.826077384823545 ], [ -65.40068504784459, -24.824475660796605 ] ] ] ] } },
        { "type": "Feature", "properties": { "ID": 4.0, "BARRIO": "Hernando de Lerma", "BARRIO_CL": "Barrio", "NOM_LARGO": "Barrio Hernando de Lerma", "TIPO": "FORMAL", "AÑO": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -65.40912676613965, -24.800205165929192 ], [ -65.402188003871757, -24.800814498573164 ], [ -65.402837428473248, -24.808135893085307 ], [ -65.404158574505573, -24.808139877062558 ], [ -65.40976041873617, -24.80816499250712 ], [ -65.40912676613965, -24.800205165929192 ] ] ] ] } },
        
        // ... (otros features)
    ]
};

// Función para asignar colores según el valor de ID
function getColor(ID) {
    return ID > 350 ? '#800026' :
        ID > 100 ? '#6a51a3' :
        ID > 75 ? '#807dba' :
        ID > 10 ? '#9e9ac8' :
        '#d9f0a3';
}

// Estilo para cada feature del GeoJSON
function style(feature) {
    return {
        fillColor: getColor(feature.properties.ID),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '0',
        fillOpacity: 0.9
    };
}

// Contenido del popup para cada feature
function popupContent(feature) {
    return (
        "<div id='Estilo1'><h3><i>Descripción</i></h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Nombre:  </b>" + feature.properties.NOM_LARGO + "<br>" +
        "<b> Tipo: </b>" + feature.properties.TIPO + "<br>" +
        "</div>"
    );
}


