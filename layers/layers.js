var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_point_city_srr_1 = new ol.format.GeoJSON();
var features_point_city_srr_1 = format_point_city_srr_1.readFeatures(json_point_city_srr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_city_srr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_city_srr_1.addFeatures(features_point_city_srr_1);
var lyr_point_city_srr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_city_srr_1, 
                style: style_point_city_srr_1,
                popuplayertitle: 'point_city_srr',
                interactive: true,
    title: 'point_city_srr<br />\
    <img src="styles/legend/point_city_srr_1_0.png" /> 28,9 - 37,4<br />\
    <img src="styles/legend/point_city_srr_1_1.png" /> 37,4 - 136,4<br />\
    <img src="styles/legend/point_city_srr_1_2.png" /> 136,4 - 253,5<br />\
    <img src="styles/legend/point_city_srr_1_3.png" /> 253,5 - 492<br />' });
var format_point_city_popul_2 = new ol.format.GeoJSON();
var features_point_city_popul_2 = format_point_city_popul_2.readFeatures(json_point_city_popul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_city_popul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_city_popul_2.addFeatures(features_point_city_popul_2);
var lyr_point_city_popul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_city_popul_2, 
                style: style_point_city_popul_2,
                popuplayertitle: 'point_city_popul',
                interactive: true,
    title: 'point_city_popul<br />\
    <img src="styles/legend/point_city_popul_2_0.png" /> 70588 - 100952<br />\
    <img src="styles/legend/point_city_popul_2_1.png" /> 100952 - 210646<br />\
    <img src="styles/legend/point_city_popul_2_2.png" /> 210646 - 347823<br />\
    <img src="styles/legend/point_city_popul_2_3.png" /> 347823 - 1667314<br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_point_city_srr_1.setVisible(true);lyr_point_city_popul_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_point_city_srr_1,lyr_point_city_popul_2];
lyr_point_city_srr_1.set('fieldAliases', {'id': 'id', 'Name': 'Город', 'X': 'X', 'Y': 'Y', 'Population': 'Численность населения', 'Year found': 'Год основания', 'Sqr': 'Площадь, км^2', });
lyr_point_city_popul_2.set('fieldAliases', {'id': 'id', 'Name': 'Город', 'X': 'X', 'Y': 'Y', 'Population': 'Численность населения', 'Year found': 'Год основания', 'Sqr': 'Sqr', });
lyr_point_city_srr_1.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Population': 'Hidden', 'Year found': 'TextEdit', 'Sqr': 'TextEdit', });
lyr_point_city_popul_2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Population': 'TextEdit', 'Year found': 'TextEdit', 'Sqr': 'Hidden', });
lyr_point_city_srr_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Year found': 'header label - always visible', 'Sqr': 'inline label - visible with data', });
lyr_point_city_popul_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Population': 'inline label - visible with data', 'Year found': 'header label - visible with data', });
lyr_point_city_popul_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});