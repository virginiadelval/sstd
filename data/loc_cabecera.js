var IconLocCab = {
    radius: 4,
    fillColor: "#000",
    color: "#fff",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 0.8
};

// Contenido del popup para cada feature
function popupContentLocCab(feature) {
    return (
        
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.NOMLOC_01 + "<br>" +
        "<b> Habitantes (Censo 2010): </b>" + feature.properties.POBLAC + "<br>" +
        
        "<br>" +
        "<b><i> Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        "<b> Fecha de actualización:  </b> - </i>  "  +
        "</div>"
    )
};

var locCabecera = 
{
    "type": "FeatureCollection",
    "name": "localidades_censales",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "030", "NOMLOC_01": "CORONEL JUAN SOLA", "AGLO_01": "0", "NOMAGLO_01": "CORONEL JUAN SOLA", "NOMMUNI_01": "RIVADAVIA BANDA NORTE", "CODLOC": "66133030", "POBLAC": 3678, "COD_AGLO": "0691", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.890289743529159, -23.475350540547701 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "070", "NOMLOC_01": "RIVADAVIA", "AGLO_01": "0", "NOMAGLO_01": "RIVADAVIA", "NOMMUNI_01": "RIVADAVIA BANDA SUR", "CODLOC": "66133070", "POBLAC": 1608, "COD_AGLO": "1171", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.885583524741236, -24.185155202444992 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "050", "NOMLOC_01": "LOS BLANCOS", "AGLO_01": "0", "NOMAGLO_01": "LOS BLANCOS", "NOMMUNI_01": "RIVADAVIA BANDA NORTE", "CODLOC": "66133050", "POBLAC": 1025, "COD_AGLO": "1211", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.596766983810177, -23.610958368913305 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "100", "NOMLOC_01": "SANTA VICTORIA ESTE", "AGLO_01": "0", "NOMAGLO_01": "SANTA VICTORIA ESTE", "NOMMUNI_01": "SANTA VICTORIA ESTE", "CODLOC": "66133100", "POBLAC": 1283, "COD_AGLO": "1237", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.713127643198341, -22.275486606081873 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "040", "NOMLOC_01": "LA UNION", "AGLO_01": "0", "NOMAGLO_01": "LA UNION", "NOMMUNI_01": "RIVADAVIA BANDA SUR", "CODLOC": "66133040", "POBLAC": 1283, "COD_AGLO": "1352", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -63.194895087009108, -23.897733739866148 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "020", "NOMLOC_01": "CAPITAN JUAN PAGE", "AGLO_01": "0", "NOMAGLO_01": "CAPITAN JUAN PAGE", "NOMMUNI_01": "RIVADAVIA BANDA NORTE", "CODLOC": "66133020", "POBLAC": 227, "COD_AGLO": "3720", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.377652542753069, -23.687253866935151 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "060", "NOMLOC_01": "PLUMA DE PATO", "AGLO_01": "0", "NOMAGLO_01": "PLUMA DE PATO", "NOMMUNI_01": "RIVADAVIA BANDA NORTE", "CODLOC": "66133060", "POBLAC": 220, "COD_AGLO": "3708", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -63.097030175322658, -23.372552130267604 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "090", "NOMLOC_01": "SANTA ROSA", "AGLO_01": "0", "NOMAGLO_01": "SANTA ROSA", "NOMMUNI_01": "RIVADAVIA BANDA SUR", "CODLOC": "66133090", "POBLAC": 386, "COD_AGLO": "3717", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -63.082743610267435, -24.026481997070025 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "010", "NOMLOC_01": "ALTO DE LA SIERRA", "AGLO_01": "0", "NOMAGLO_01": "ALTO DE LA SIERRA", "NOMMUNI_01": "SANTA VICTORIA ESTE", "CODLOC": "66133010", "POBLAC": 781, "COD_AGLO": "6428", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.498302162868761, -22.735770332368293 ] } },
    { "type": "Feature", "properties": { "CODPCIA": "66", "CODDEP_01": "133", "CODLOC_01": "080", "NOMLOC_01": "SANTA MARIA", "AGLO_01": "0", "NOMAGLO_01": "SANTA MARIA", "NOMMUNI_01": "SANTA VICTORIA ESTE", "CODLOC": "66133080", "POBLAC": 994, "COD_AGLO": "6429", "CAPITAL": null }, "geometry": { "type": "Point", "coordinates": [ -62.808728499378951, -22.153628359392581 ] } }
    ]
    };
    