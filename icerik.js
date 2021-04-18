var map = L.map('map').setView([41.01224, 28.976018], 10);

var googleBasemap=L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: 'Proje&HilalELtuğral',
    maxZoom:20,
    subdomains:['mt0','mt1','mt2','mt3']
})

googleBasemap.addTo(map);

var nokta1=L.marker([40.8639527795119,29.126048710835217]).addTo(map)
.bindPopup('ADALAR.<br> ÖĞRENCİ SAYISI: 26')
.openPopup();

var nokta2=L.marker([41.20044,28.735415]).addTo(map)
.bindPopup('ARNAVUTKÖY<br> ÖĞRENCİ SAYISI: 1687')
.openPopup();

var nokta3=L.marker([40.9842785,29.1422419]).addTo(map)
.bindPopup('ATAŞEHİR<br> ÖĞRENCİ SAYISI: 1281')
.openPopup();

var nokta4=L.marker([41.0376065,28.7193355]).addTo(map)
.bindPopup('AVCILAR<br> ÖĞRENCİ SAYISI: 1721')
.openPopup();

var nokta5=L.marker([41.009755,28.8453246]).addTo(map)
.bindPopup('BAHÇELİEVLER<br> ÖĞRENCİ SAYISI: 3024')
.openPopup();

var nokta6=L.marker([40.980825,28.8350469]).addTo(map)
.bindPopup('BAKIRKÖY<br> ÖĞRENCİ SAYISI: 309')
.openPopup();

var nokta7=L.marker([41.0448895,28.8403287]).addTo(map)
.bindPopup('BAĞCILAR<br> ÖĞRENCİ SAYISI: 4055')
.openPopup();

var nokta8=L.marker([41.103645,28.901214]).addTo(map)
.bindPopup('BAŞAKŞEHİR<br> ÖĞRENCİ SAYISI: 1710')
.openPopup();


var nokta9=L.marker([41.0514765,28.901214]).addTo(map)
.bindPopup('BAYRAMPAŞA<br> ÖĞRENCİ SAYISI: 1041')
.openPopup();

var nokta10=L.marker([41.0448895,28.8403287]).addTo(map)
.bindPopup('BAĞCILAR<br> ÖĞRENCİ SAYISI: 4055')
.openPopup();

var nokta11=L.marker([41.1383315,29.2145816]).addTo(map)
.bindPopup('BEYKOZ<br> ÖĞRENCİ SAYISI: 725')
.openPopup();

var nokta12=L.marker([40.987968,28.6469719]).addTo(map)
.bindPopup('BEYLİKDÜZÜ<br> ÖĞRENCİ SAYISI: 1212')
.openPopup();

var nokta13=L.marker([41.043048,28.9673795]).addTo(map)
.bindPopup('BEYOĞLU<br> ÖĞRENCİ SAYISI: 790')
.openPopup();

var nokta14=L.marker([41.071607,29.0234621]).addTo(map)
.bindPopup('BEŞİKTAŞ<br> ÖĞRENCİ SAYISI: 217')
.openPopup();

var nokta15=L.marker([41.057115,28.512902]).addTo(map)
.bindPopup('BÜYÜKÇEKMECE<br> ÖĞRENCİ SAYISI: 888')
.openPopup();

var nokta16=L.marker([41.076536,28.8570526]).addTo(map)
.bindPopup('ESENLER<br> ÖĞRENCİ SAYISI: 2663')
.openPopup();

var nokta17=L.marker([41.048805,28.6612125]).addTo(map)
.bindPopup('ESENYURT<br> ÖĞRENCİ SAYISI: 3678')
.openPopup();

var nokta18=L.marker([41.0458875,28.9368461]).addTo(map)
.bindPopup('EYÜP<br> ÖĞRENCİ SAYISI: 4')
.openPopup();

var nokta19=L.marker([41.0458,28.9367]).addTo(map)
.bindPopup('EYÜPSULTAN<br> ÖĞRENCİ SAYISI: 1320')
.openPopup();

var nokta20=L.marker([41.0142595,28.9535544]).addTo(map)
.bindPopup('FATİH<br> ÖĞRENCİ SAYISI: 1876')
.openPopup();

var nokta21=L.marker([41.0741665,28.906792]).addTo(map)
.bindPopup('GAZİOSMANPAŞA<br> ÖĞRENCİ SAYISI: 2111')
.openPopup();

var nokta22=L.marker([41.0199295,28.8796991]).addTo(map)
.bindPopup('GÜNGÖREN <br> ÖĞRENCİ SAYISI: 1538')
.openPopup();

var nokta23=L.marker([40.981133,29.0630531]).addTo(map)
.bindPopup('KADIKÖY<br> ÖĞRENCİ SAYISI: 737')
.openPopup();

var nokta24=L.marker([40.921527,29.1967441]).addTo(map)
.bindPopup('KARTAL.<br> ÖĞRENCİ SAYISI: 2110')
.openPopup();

var nokta25=L.marker([41.0829335,28.9787839]).addTo(map)
.bindPopup('KAĞITHANE<br> ÖĞRENCİ SAYISI: 1916')
.openPopup();

var nokta26=L.marker([41.0206895,28.7803615]).addTo(map)
.bindPopup('KÜÇÜKÇEKMECE<br> ÖĞRENCİ SAYISI: 3009')
.openPopup();

var nokta27=L.marker([40.943936,29.1555435]).addTo(map)
.bindPopup('MALTEPE<br> ÖĞRENCİ SAYISI: 1941')
.openPopup();

var nokta28=L.marker([40.944932,29.36099]).addTo(map)
.bindPopup('PENDİK<br> ÖĞRENCİ SAYISI: 3395')
.openPopup();

var nokta29=L.marker([40.999384,29.2724761]).addTo(map)
.bindPopup('SANCAKTEPE<br> ÖĞRENCİ SAYISI: 2393')
.openPopup();

var nokta30=L.marker([41.17208,29.0242975]).addTo(map)
.bindPopup('SARIYER<br> ÖĞRENCİ SAYISI: 813')
.openPopup();

var nokta31=L.marker([40.96833,29.2783144]).addTo(map)
.bindPopup('SULTANBEYLİ.<br> ÖĞRENCİ SAYISI: 2420')
.openPopup();

var nokta32=L.marker([41.1074015,28.8599951]).addTo(map)
.bindPopup('SULTANGAZİ<br> ÖĞRENCİ SAYISI: 2975')
.openPopup();

var nokta33=L.marker([41.071946,28.200803]).addTo(map)
.bindPopup('SİLİVRİ<br> ÖĞRENCİ SAYISI: 536')
.openPopup();

var nokta34=L.marker([40.89166685,29.3552035]).addTo(map)
.bindPopup('TUZLA<br> ÖĞRENCİ SAYISI: 1086')
.openPopup();

var nokta35=L.marker([41.00516,28.9092201]).addTo(map)
.bindPopup('ZEYTİNBURNU<br> ÖĞRENCİ SAYISI: 1501')
.openPopup();

var nokta36=L.marker([41.145772,28.461587]).addTo(map)
.bindPopup('ÇATALCA<br> ÖĞRENCİ SAYISI: 247')
.openPopup();

var nokta37=L.marker([41.0728245,29.2697521]).addTo(map)
.bindPopup('ÇEKMEKÖY<br> ÖĞRENCİ SAYISI: 938')
.openPopup();

var nokta38=L.marker([41.027255,29.1387516]).addTo(map)
.bindPopup('ÜMRANİYE<br> ÖĞRENCİ SAYISI: 2529')
.openPopup();

var nokta39=L.marker([41.0352485,29.0476941]).addTo(map)
.bindPopup('ÜSKÜDAR<br> ÖĞRENCİ SAYISI: 1910')
.openPopup();

var nokta40=L.marker([41.1664895,29.5977184]).addTo(map)
.bindPopup('ŞİLE<br> ÖĞRENCİ SAYISI: 90')
.openPopup();
