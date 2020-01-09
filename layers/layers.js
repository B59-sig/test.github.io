var wms_layers = [];

var format_EPCI_NPDC_0 = new ol.format.GeoJSON();
var features_EPCI_NPDC_0 = format_EPCI_NPDC_0.readFeatures(json_EPCI_NPDC_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_NPDC_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_NPDC_0.addFeatures(features_EPCI_NPDC_0);
var lyr_EPCI_NPDC_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCI_NPDC_0, 
                style: style_EPCI_NPDC_0,
                interactive: true,
                title: '<img src="styles/legend/EPCI_NPDC_0.png" /> EPCI_NPDC'
            });

lyr_EPCI_NPDC_0.setVisible(true);
var layersList = [lyr_EPCI_NPDC_0];
lyr_EPCI_NPDC_0.set('fieldAliases', {'NOM_COMM': 'NOM_COMM', 'INSEE_COMM': 'INSEE_COMM', 'EPCI': 'EPCI', 'num': 'num', 'DUT': 'DUT', 'VILLE': 'VILLE', 'CODPOS': 'CODPOS', 'code_DT': 'code_DT', 'code_UT': 'code_UT', 'code_DUT': 'code_DUT', 'DT': 'DT', 'UT': 'UT', 'Foyer': 'Foyer', 'Field11': 'Field11', 'Field12': 'Field12', 'Field13': 'Field13', });
lyr_EPCI_NPDC_0.set('fieldImages', {'NOM_COMM': 'TextEdit', 'INSEE_COMM': 'TextEdit', 'EPCI': 'TextEdit', 'num': 'Range', 'DUT': 'TextEdit', 'VILLE': 'TextEdit', 'CODPOS': 'Range', 'code_DT': 'Range', 'code_UT': 'Range', 'code_DUT': 'Range', 'DT': 'TextEdit', 'UT': 'TextEdit', 'Foyer': 'TextEdit', 'Field11': 'TextEdit', 'Field12': 'TextEdit', 'Field13': 'TextEdit', });
lyr_EPCI_NPDC_0.set('fieldLabels', {'NOM_COMM': 'no label', 'INSEE_COMM': 'no label', 'EPCI': 'no label', 'num': 'no label', 'DUT': 'no label', 'VILLE': 'no label', 'CODPOS': 'no label', 'code_DT': 'no label', 'code_UT': 'no label', 'code_DUT': 'no label', 'DT': 'no label', 'UT': 'no label', 'Foyer': 'no label', 'Field11': 'no label', 'Field12': 'no label', 'Field13': 'no label', });
lyr_EPCI_NPDC_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});