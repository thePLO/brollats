/*
tipus
	0- Ferrada
	1- Barranc

nivell
	0- Iniciacio
	1- Facil
	2- Mig
	3- Avançat
	4- Dificil
	5- Molt dificil
	6- Molt dificil+

nivellClassificacio
	0- Iniciacio
	1- Mig
	2- Avançat
*/
let activitatsData = [
	{
		"tipus": 0,
		"nom": "CALA DEL MOLÍ",
		"lloc": "SANT FELIU DE GUÍXOLS, BAIX EMPORDÀ",
		"destacada": true,
		"nivell": 1,
		"nivellClassificacio":0,
		"preu": "30€",
		"foto":"../media/img/activitats/calamoli.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vine a gaudir d'una experiència única  a la Costa Brava. Passarem pels penya-segats de Sant Feliu de Guíxols amb el mar sota els vostres peus, una aventura inoblidable.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "ROCA DE LA CREU",
		"lloc": "RIBES DE FRESER, EL RIPOLLÈS, GIRONA",
		"destacada": true,
		"nivell": 1,
		"nivellClassificacio":0,
		"preu": "35€",
		"foto":"../media/img/activitats/rocadelacreu.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Als peu de del Pirineu trobem aquesta ferrada, ideal per a iniciar-se amb els amics i la família i amb vistes espectaculars del poble i del Taga.",
				"es": "",
				"en": ""
			},
			{
				"ca": "Us animeu?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "ROCA NARIEDA",
		"lloc": "FÍGOLS I ALINYÀ, ALT URGELL, LLEIDA",
		"destacada": false,
		"nivell": 1,
		"nivellClassificacio":0,
		"preu": "40€",
		"foto":"../media/img/activitats/rocanarieda_1.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "<strong>TRAM FAMILIAR</strong>",
				"es": "",
				"en": ""
			},
			{
				"ca": "Primer tram de la via ferrada ideal per iniciar-se i venir amb els mes petits de la casa. Una horeta de recorregut equipat i un camí que ens tornarà al punt d'inici.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "TELETUBBIES",
		"lloc": "CORÇA, LA NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 1,
		"nivellClassificacio":0,
		"preu": "45€",
		"foto":"../media/img/activitats/teletubbies.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Magnífic recorregut per iniciar-se, equipat amb gran varietat d’elements ens enfilarem per una cresta on gaudirem d’unes magnífiques vistes del pantà de Canelles. Molt recomanada per a famílies i petits!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "OLMO - SOLER",
		"lloc": "CORÇA, LA NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 1,
		"nivellClassificacio":0,
		"preu": "45€",
		"foto":"../media/img/activitats/olmosoler.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vols visitar l’ermita de la Mare de Déu de la Pertusa? Doncs ja no tens excusa! Una via senzilla i entretinguda que transcorre per curts ressalts molt ben equipats amb el pantà de Canelles als nostres peus!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "PATACONS",
		"lloc": "MUSARA, BAIX CAMP, TARRAGONA",
		"destacada": false,
		"nivell": 2,
		"nivellClassificacio":1,
		"preu": "45€",
		"foto":"../media/img/activitats/patacons.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Gairebé 500 metres de longitud, una passarel·la de fusta i 4 ponts nepalís és el recorregut d'aquesta via. Si no et fan por les alçades i vols gaudir d’una de les grans ferrades catalanes, no dubtis a venir.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "BAUMES CORCADES",
		"lloc": "CENTELLES, OSONA, BARCELONA",
		"destacada": true,
		"nivell": 2,
		"nivellClassificacio":1,
		"preu": "35€",
		"foto":"../media/img/activitats/baumescorcades.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Coneguda i famosa pel seu impressionant pont nepalí de 68 metres. També trobarem trams verticals, desplomats atlètics i una escala penjant!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "ROCA NARIEDA",
		"lloc": "FÍGOLS I ALINYÀ, ALT URGELL, LLEIDA",
		"destacada": false,
		"nivell": 2,
		"nivellClassificacio":1,
		"preu": "55€",
		"foto":"../media/img/activitats/rocanarieda_2.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "La via ferrada més llarga de la península, amb una escala en forma d’espiral i una passarel·la exposada de 38 metres! No tens ganes de descobrir aquesta via? Ho té tot: és llarga, exigent i amb passos originals.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "SERRA DE LES CANALS",
		"lloc": "OLIANA, ALT URGELL, LLEIDA",
		"destacada": false,
		"nivell": 2,
		"nivellClassificacio":1,
		"preu": "Consultar",
		"foto":"../media/img/activitats/serradelescanals.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Disposa d'un primer tram més familiar i d'un segon mes vertical i atlètic per si ens quedem amb ganes. Un retorn equipat per la cresta que ens farà acabar de gaudir la jornada.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "VENES DE ROJALONS",
		"lloc": "ROJALONS, CONCA DE BARBERÀ, TARRAGONA",
		"destacada": false,
		"nivell": 2,
		"nivellClassificacio":1,
		"preu": "Consultar",
		"foto":"../media/img/activitats/venesrojalons.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Has fet alguna ferrada a les fosques? Aquí trobarem una mica de tot! Recorregut molt original, amb algun tram on necessitarem portar frontal, ja que va per dins d'unes esquerdes! T’hi animes?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "CANAL DE LES DAMES",
		"lloc": "COLLBATÓ, BAIX LLOBREGAT, BARCELONA",
		"destacada": false,
		"nivell": 4,
		"nivellClassificacio":1,
		"preu": "45€",
		"foto":"../media/img/activitats/damas.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Bones vistes i seguretat són dos al·licients que ofereix la via ferrada Canal de les Dames, una via divertida que compleix les expectatives de qualsevol. Vine a gaudir del conglomerat de Montserrat amb nosaltres!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "CANAL DEL MEJILLÓN",
		"lloc": "MONTSERRAT, BAGES, BARCELONA",
		"destacada": false,
		"nivell": 4,
		"nivellClassificacio":2,
		"preu": "Consultar",
		"foto":"",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Equipada amb cadenes i un parell de desploms, aquesta canal equipada farà tirar de força de braços i posar a prova els més valents.",
				"es": ""
			},
			{
				"ca": "Vols saber perquè té aquest nom?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "CAST - URQUIZA - OLMO",
		"lloc": "CORÇA, NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 4,
		"nivellClassificacio":2,
		"preu": "Consultar",
		"foto":"",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Esportiva, aèria i vertical, caracteritzada com una de les vies més difícils del país, equipada d’una manera molt particular que la fa encara més complicada.",
				"es": "",
				"en": ""
			},
			{
				"ca": "T’hi atreveixes?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "CAGATE LORITO",
		"lloc": "ST LLORENÇ DE MONTGAI, NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 5,
		"nivellClassificacio":2,
		"preu": "90€",
		"foto":"../media/img/activitats/cagatelorito.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Si tens experiència i vols portar el teu cos al límit, aquesta és una bona opció. Com un parc d’aventura a la paret, amb desploms, pèndols i una tirolina! Si t’emociona llegir-ho, imagina’t viure-ho acompanyat!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "FELIZ NAVIDAD",
		"lloc": "CORÇA, NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 5,
		"nivellClassificacio":2,
		"preu": "Consultar",
		"foto":"",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "110 metres de longitud, llargs desploms i considerada la més complicada de les ferrades esportives instal·lades a Catalunya. Si el teu objectiu és portar el teu cos al límit, aquí estem nosaltres per acompanyar-te.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 0,
		"nom": "EL CÍCLOPE",
		"lloc": "CORÇA, NOGUERA, LLEIDA",
		"destacada": false,
		"nivell": 6,
		"nivellClassificacio":2,
		"preu": "Consultar",
		"foto":"",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "A diferència d'una ferrada, aquí la línia de vida serà la nostra corda, 100 metres de recorregut que exigeix gran esforç tant tècnic, com físic, com mental. Últim regal que ens deixen els nostres amics del JOM.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "ESTRETS DE CASTELLAR",
		"lloc": "CASTELLAR DEL VALLÈS, VALLÈS OCCIDENTAL",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "40€",
		"foto":"../media/img/activitats/estretscastellar.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vols trencar amb la rutina i escapar-te al plegar de la feina? La proximitat a la ciutat de Barcelona i la seva baixa dificultat convida a la majoria a triar aquest barranc per a iniciar-se al barranquisme.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "GLORIETA",
		"lloc": "MONT-RAL, BAIX CAMP, TARRAGONA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/glorieta.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vine a gaudir de les aigües cristal·lines de Tarragona, un barranc ideal per iniciar-se o per venir en família, on el seu punt final són les Fonts del Glorieta, un gorg espectacular.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "TORRENT DE LA CORBA",
		"lloc": "BRUGUERA, EL RIPOLLÈS, GIRONA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/torrentcobra.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Aquí gaudiràs de l’aigua freda baixant pel Torrent Roig, on veurem la seva pedra calcària i una estupenda formació en forma d’arc.",
				"es": "",
				"en": ""
			},
			{
				"ca": "Vols veure-ho? Millor si ho vius!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "NÚRIA INFERIOR",
		"lloc": "QUERALBS, EL RIPOLLÈS, GIRONA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/nuriainferior.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "La joia del Pirineu català, on l'aigua fresca, els tobogans, salts i ràpels seran els protagonistes d'un dia espectacular.",
				"es": "",
				"en": ""
			},
			{
				"ca": "T'hi atreveixes?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "SALT DEL GRILL",
		"lloc": "QUERALBS, EL RIPOLLÈS, GIRONA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/saltgrill.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Per a tots els públics, a prop de Barcelona i amb un ràpel final de 40 metres. Què mes es pot demanar? Vine a gaudir de l'aigua fresqueta del Ripollès.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "BÓIXOLS",
		"lloc": "BÓIXOLS, ALT URGELL, LLEIDA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/boixols.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Salts, tobogans i ràpels et portaran per les aigües més cristal·lines de la zona. Un barranc per gaudir en família o amistats. Vine i deixa't sorprendre pel seu encant!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "VIU DE LLEVATA",
		"lloc": "VIU DE LLEVATA, ALTA RIBAGORÇA, LLEIDA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "Consultar",
		"foto":"../media/img/activitats/viullevata.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vols fer el conegut “Salt del Tarzán”? Doncs estàs en el barranc adequat! Un barranc molt divertit on podràs gaudir de la natura i del Pirineu lleidetà sense sortir de l’aigua.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "TORRENT DEL GRAVET",
		"lloc": "RUPIT, OSONA, BARCELONA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "45€",
		"foto":"../media/img/activitats/torrentgravet.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vine a gaudir dels racons d'aquesta comarca, amb un ràpel de 20 metres passant per dins d'un gran roc que li donen una bellesa extraordinària. Durant l'aproximació i retorn gaudirem de les vistes del Salt de Sallent.",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "FONT BORDONERA",
		"lloc": "ORGANYÀ, ALT URGELL, LLEIDA",
		"destacada": false,
		"nivell": 0,
		"nivellClassificacio":0,
		"preu": "50€",
		"foto":"../media/img/activitats/fontbordonera.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Formacions rocoses espectaculars, ràpels senzills i un tobogan de 7 metres que segur que no et deixa indiferent. Vine a caminar per les aigües d'Organyà!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "NÚRIA INTEGRAL",
		"lloc": "QUERALBS, EL RIPOLLÈS, GIRONA",
		"destacada": false,
		"nivell": 3,
		"nivellClassificacio":2,
		"preu": "60€",
		"foto":"../media/img/activitats/nuriaintegral.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "La joia del Pirineu català, on l'aigua fresca, els tobogans, salts i ràpels seran els protagonistes d'un dia espectacular.",
				"es": "",
				"en": ""
			},
			{
				"ca": "T'hi atreveixes?",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "PAS DE L'ESCALELL",
		"lloc": "CASTELL DE L'ARENY, BERGUEDÀ, BARCELONA",
		"destacada": false,
		"nivell": 3,
		"nivellClassificacio":2,
		"preu": "60€",
		"foto":"../media/img/activitats/escalell.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Si vols millorar la tècnica de ràpel o endinsar-te en el món del barranquisme, aquest és el teu barranc. Compta amb 18 ràpels que superen grans cascades i tobogans arribant, fins i tot, als 25 metres!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "INFERN",
		"lloc": "LA POBLA DE SEGUR, PALLARS JUSSÀ, LLEIDA",
		"destacada": false,
		"nivell": 3,
		"nivellClassificacio":2,
		"preu": "60€",
		"foto":"../media/img/activitats/infern.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "Vols baixar a l’infern o saber per què té aquest nom? Amb aquest barranc sentiràs com si hi estiguessis! Un dels més espectaculars del Pirineu de Lleida. Vine i endinsa-t'hi amb nosaltres!",
				"es": "",
				"en": ""
			}
		]
	},
	{
		"tipus": 1,
		"nom": "SALT DE SALLENT",
		"lloc": "RUPIT I PUIT, OSONA, BARCELONA",
		"destacada": false,
		"nivell": 3,
		"nivellClassificacio":2,
		"preu": "60€",
		"foto":"../media/img/activitats/saltsallent.webp",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "El salt d'aigua més alt de Catalunya amb una caiguda de 120 m ens permetrà fer un parell de ràpels per arribar als seus peus.",
				"es": "",
				"en": ""
			},
			{
				"ca": "Cal experiència prèvia.",
				"es": "",
				"en": ""
			}
		]
	},
	/*{
		"tipus": 0,
		"nom": "ss",
		"lloc": "ss",
		"destacada": false,
		"nivell": 0,
		"nivellClassi":0,
		"preu": "Consultar",
		"foto":"",
		"video":"",
		"link":"",
		"descripcio": [
			{
				"ca": "asdf",
				"es": "fdsa"
			}
		]
	},*/

];