var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Kel_Kolaka_1 = new ol.format.GeoJSON();
var features_Kel_Kolaka_1 = format_Kel_Kolaka_1.readFeatures(json_Kel_Kolaka_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kel_Kolaka_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kel_Kolaka_1.addFeatures(features_Kel_Kolaka_1);
var lyr_Kel_Kolaka_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kel_Kolaka_1, 
                style: style_Kel_Kolaka_1,
                popuplayertitle: 'Kel_Kolaka',
                interactive: true,
    title: 'Kel_Kolaka<br />\
    <img src="styles/legend/Kel_Kolaka_1_0.png" /> <br />\
    <img src="styles/legend/Kel_Kolaka_1_1.png" /> Balandete<br />\
    <img src="styles/legend/Kel_Kolaka_1_2.png" /> Laloeha<br />\
    <img src="styles/legend/Kel_Kolaka_1_3.png" /> Lalombaa<br />\
    <img src="styles/legend/Kel_Kolaka_1_4.png" /> Lamokato<br />\
    <img src="styles/legend/Kel_Kolaka_1_5.png" /> Sabilambo<br />\
    <img src="styles/legend/Kel_Kolaka_1_6.png" /> Tahoa<br />\
    <img src="styles/legend/Kel_Kolaka_1_7.png" /> Watuliandu<br />'
        });
var format_JaringanJalanKecKolaka_2 = new ol.format.GeoJSON();
var features_JaringanJalanKecKolaka_2 = format_JaringanJalanKecKolaka_2.readFeatures(json_JaringanJalanKecKolaka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKecKolaka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKecKolaka_2.addFeatures(features_JaringanJalanKecKolaka_2);
var lyr_JaringanJalanKecKolaka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKecKolaka_2, 
                style: style_JaringanJalanKecKolaka_2,
                popuplayertitle: 'Jaringan Jalan Kec Kolaka',
                interactive: true,
    title: 'Jaringan Jalan Kec Kolaka<br />\
    <img src="styles/legend/JaringanJalanKecKolaka_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalanKecKolaka_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalanKecKolaka_2_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalanKecKolaka_2_3.png" /> <br />'
        });

lyr_GoogleSatelit_0.setVisible(true);lyr_Kel_Kolaka_1.setVisible(true);lyr_JaringanJalanKecKolaka_2.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_Kel_Kolaka_1,lyr_JaringanJalanKecKolaka_2];
lyr_Kel_Kolaka_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_JaringanJalanKecKolaka_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Material': 'Material', 'Kondisi': 'Kondisi', 'Foto': 'Foto', 'Fungsi': 'Fungsi', });
lyr_Kel_Kolaka_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_JaringanJalanKecKolaka_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Material': 'TextEdit', 'Kondisi': 'TextEdit', 'Foto': 'ExternalResource', 'Fungsi': 'TextEdit', });
lyr_Kel_Kolaka_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'no label', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', });
lyr_JaringanJalanKecKolaka_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Jenis': 'no label', 'Material': 'inline label - always visible', 'Kondisi': 'inline label - always visible', 'Foto': 'no label', 'Fungsi': 'inline label - always visible', });
lyr_JaringanJalanKecKolaka_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});