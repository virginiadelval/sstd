//options recomendada para disminuir el codido//
var options = {format: 'image/png',
              uppercase: true,
              transparent: true,
              version: '1.3.0',
              continuousWorld : true,
              tiled: true,
              info_format: 'text/html',
			 info_format_pop:'application/json:type/geoJson',
			  opacity: 1,
			  attribution: '<a href="https://geocatalogos.conae.gov.ar/geonetwork/srv/spa/catalog.search#/search" target="_blank">CONAE - Gerencia de Observación de la Tierra.</a>', 
			};
		
		//llamo una vez al servidor//
		var source = L.WMS.source("https://geoservicios2.conae.gov.ar/geoserver/EstatusHidrico/wms?", options);
		// llama cada capa del servidor//
		var APIDiario = source.getLayer('EstatusHidrico:MHS_GPMIMERG_APIDIARIO_1');
        // llama cada capa del servidor//
		var APIPercentil = source.getLayer('EstatusHidrico:MHS_GPMIMERG_PCNTLAPI_1');