// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var google = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	opacity: 1.0,
	attribution: '&copy;<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google</a>',
	maxZoom: 18
});
var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	opacity: 1.0,
	attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
	maxZoom: 18,
});


// Crear una capa GeoJSON y añadir al mapa
var Prov = L.geoJSON(provincia, {
	style: function (feature) {
		return {
			fillColor: 'whait',
			weight: 3,
			opacity: 0.5,
			color: 'black',
			dashArray: '3',
			fillOpacity: 0.0
		}
	}
});
var Rutas = L.geoJSON(rutas, {
	style: styleRuta

});
var Localidad = L.geoJSON(locCabecera, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocCab);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocCab(feature);
		layer.bindPopup(content);
	}
});
var Parajes = L.geoJSON(locSec, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, IconLocSec);
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentLocSec(feature);
		layer.bindPopup(content);
	}
});


var catastrosL = L.geoJSON(catastros, {
	style: styleCatastro,
	onEachFeature: function (feature, layer) {
		var content = popupContent(feature);
		layer.bindPopup(content);
	}
});

var RBN = L.geoJSON(rbn, {
	style: styleDpto,
	onEachFeature: function (feature, layer) {
		var content = popupContentData(feature);
		layer.bindPopup(content);
	},

});
var RBS = L.geoJSON(rbs, {
	style: styleDpto,
	onEachFeature: function (feature, layer) {
		var content = popupContentData(feature);
		layer.bindPopup(content);
	}
});
var StaVictoria = L.geoJSON(svo, {
	style: styleDpto,
	onEachFeature: function (feature, layer) {
		var content = popupContentData(feature);
		layer.bindPopup(content);
	}
});
var DEPTO = L.geoJSON(depto, {
	style: styleDpto,
	onEachFeature: function (feature, layer) {
		var content = popupContentData(feature);
		layer.bindPopup(content);
	}
});

var MESAS = L.geoJSON(mesa, {

	onEachFeature: function (feature, layer) {
		var content = popupContentMesa(feature);
		layer.bindPopup(content);
	}
});

var ESC = L.geoJSON(escuelas, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, { icon: escIcon });
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentEsc(feature);
		layer.bindPopup(content);
	}
});

var PUESTOS = L.geoJSON(puestos, {
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, MarkerOptions);
		
	},
	style: stylePuestos,
	onEachFeature: function (feature, layer) {
		var content = popupContentPuestos(feature);
		layer.bindPopup(content);
	}
});



var RELVSOLIDARIDAD = L.geoJSON(InfoSolidaridad, {
	pointToLayer: function (feature, latlng) {
		return L.marker(latlng, { icon: redIcon })
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentInfoSolidaridad(feature);
		layer.bindPopup(content)
	}
});