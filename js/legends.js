// Función para generar la leyenda
function createLegend(layerName) {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];

        // Definir los estilos y etiquetas correspondientes para cada capa
        var styles = [];
        if (layerName === 'Geologia') {
            styles = [
                // Definir estilos para la capa de Geología
                { label: 'Agua - Cuerpo de agua', color: '#6ccbcb' },
            { label: 'Cgm - Depósitos glacimarinos', color: '#afafaf' },
            { label: 'KE - Sedimentitas marinas y continentales con intercalaciones volcánicas alcalinas', color: '#d1ff0f' },
            { label: 'N2c - Sedimentitas continentales', color: '#ffdd99' },
            { label: 'N2f - Depósitos de arenas fluviales', color: '#ffeacc' },
            { label: 'Nc - Sedimentitas continentales con intercalaciones volcaniclásticas', color: '#ffff14' },
            { label: 'Qa - Depósitos pedemontanos, gravas y arenas', color: '#fff7e5' },
            { label: 'Qfl - Depósitos de limos y arenas fluviales', color: '#b3fdb8' },
            { label: 'Ql - Depósitos lacustres', color: '#efefef' },
            { label: 'Qlp-b - Depósitos de abanico del río Bermejo ', color: '#fff7e5' },
            { label: 'Qlp-I - Depósitos de abanico del río Itiyuro ', color: '#fff7e5' },
            { label: 'Qlp-p - Depósitos de abanico del río Pilcomayo ', color: '#fff7e5' },
            { label: 'Qlp-s -Depósitos de abanico del río Salado ', color: '#fff7e5' },
            { label: 'SDs - Sedimentitas marinas y continentales', color: '#e8b789' },
            ];
        } else if (layerName === 'SubCuencas') {
            styles = [
                // Definir estilos para la capa de Subcuencas
                { label: 'Bermejito - Saladillo - Dorado - Del Valle', color: '#f8d81e' },
                { label: 'Bermejo', color: '#73f0f6' },
                { label: 'De Las Chuñas', color: '#f96f41' },
                { label: 'Del Río Muerto', color: '#3daff6' },
                { label: 'Itiyuro - Caraparí', color: '#f3a02c' },
                { label: 'Lajitas Sur', color: '#00addc' },
                { label: 'Quebrada Colorada - Agua Linda', color: '#84ca8b' },
                { label: 'Pilcomayo', color: '#c5c86d' },
                { label: 'Río Seco', color: '#7a76f8' },
                { label: 'Sin aporte significativo', color: '#f8b1ff' },
            ];
        } else if (layerName === 'Puestos') {
            styles = [
                // Definir estilos para la capa de Puestos
                { label: 'Agua de Red', color: '#8dd3c7' },
                { label: 'Pozo de agua', color: '#276e9e' },
                { label: 'Camion cisterna', color: '#8e43bf' },
                { label: 'Cisterna y tanque', color: '#ffffb3' },
                { label: 'Techo cisterna', color: '#608a17' },
                { label: 'Techo cisterna y Pozo de agua', color: '#fccde5' },
                { label: 'Represa', color: '#fb8072' },
                { label: 'Escuela', color: '#998ef0' },
                { label: 'Mangueras', color: '#bebada' },
                { label: 'Sin agua', color: '#fdb462' },
                { label: 'Puesto vacios', color: '#80b1d3' },
                { label: 'Sin dato', color: '#000' },
            ];
        }

      // Generar contenido HTML de la leyenda
      labels.forEach(function (label) {
        div.innerHTML += '<i style="background:' + label.color + '"></i> ' + label.name + '<br>';
    });

    return div;
};

return legend;
}
// Función para mostrar/ocultar la leyenda según la capa activa
function toggleLegend(layerName, layer) {
    if (map.hasLayer(layer)) {
        // Si la capa está activa, crear y agregar la leyenda correspondiente
        var legend = createLegend(layerName);
        legend.addTo(map);
    } else {
        // Si la capa está desactivada, eliminar la leyenda correspondiente
        map.eachControl(function (control) {
            if (control.getContainer() && control.getContainer().className === 'info legend') {
                control.remove();
            }
        });
    }
}

// Escuchar el cambio de estado de las capas y actualizar la visibilidad de las leyendas
map.on('overlayadd', function (eventLayer) {
    toggleLegend(eventLayer.name, eventLayer.layer);
});

map.on('overlayremove', function (eventLayer) {
    toggleLegend(eventLayer.name, eventLayer.layer);
});

