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
		tipus: 0,
		nom: "CALA DEL MOLÍ",
		lloc: "SANT FELIU DE GUÍXOLS, BAIX EMPORDÀ",
		destacada: true,
		nivell: 1,
		nivellClassificacio:0,
		preu: "30€",
		foto:"../media/img/activitats/calamoli.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vine a gaudir d'una experiència única  a la Costa Brava. Passarem pels penya-segats de Sant Feliu de Guíxols amb el mar sota els vostres peus, una aventura inoblidable.",
				es: "Ven a disfrutar de una experiencia única en la Costa Brava. Pasaremos por los acantilados de Sant Feliu de Guíxols con el mar bajo sus pies, una aventura inolvidable.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "ROCA DE LA CREU",
		lloc: "RIBES DE FRESER, EL RIPOLLÈS, GIRONA",
		destacada: true,
		nivell: 1,
		nivellClassificacio:0,
		preu: "35€",
		foto:"../media/img/activitats/rocadelacreu.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Als peu de del Pirineu trobem aquesta ferrada, ideal per a iniciar-se amb els amics i la família, amb unes vistes espectaculars del poble i del Taga.",
				es: "Al pie del Pirineo encontramos esta ferrata, ideal para iniciarse con los amigos y la familia, con unas vistas espectaculares del pueblo y del Taga",
				en: ""
			},
			{
				ca: "Us animeu?",
				es: "¿Os animais?",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "ROCA NARIEDA",
		lloc: "FÍGOLS I ALINYÀ, ALT URGELL, LLEIDA",
		destacada: false,
		nivell: 1,
		nivellClassificacio:0,
		preu: "40€",
		foto:"../media/img/activitats/rocanarieda_1.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "<strong>TRAM FAMILIAR</strong>",
				es: "<strong>TRAMO FAMILIAR</strong>",
				en: ""
			},
			{
				ca: "Primer tram de la via ferrada ideal per iniciar-se i venir amb els mes petits de la casa. Una horeta de recorregut equipat i un camí que ens tornarà al punt d'inici.",
				es: "Primer tramo de la vía ferrata ideal para iniciarse y venir con los más pequeños de la casa. Una horita de recorrido equipado y un camino que nos devolverá al punto de inicio.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "TELETUBBIES",
		lloc: "CORÇA, LA NOGUERA, LLEIDA",
		destacada: false,
		nivell: 1,
		nivellClassificacio:0,
		preu: "45€",
		foto:"../media/img/activitats/teletubbies.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Magnífic recorregut per iniciar-se, equipat amb gran varietat d’elements ens enfilarem per una cresta on gaudirem d’unes magnífiques vistes del pantà de Canelles. Molt recomanada per a famílies i petits!",
				es: "Magnífico recorrido para iniciarse, equipado con gran variedad de elementos subiremos por una cresta donde disfrutaremos de unas magníficas vistas del pantano de Canelles. ¡Muy recomendada para familias y pequeños!",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "OLMO - SOLER",
		lloc: "CORÇA, LA NOGUERA, LLEIDA",
		destacada: false,
		nivell: 1,
		nivellClassificacio:0,
		preu: "45€",
		foto:"../media/img/activitats/olmosoler.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vols visitar l’ermita de la Mare de Déu de la Pertusa? Doncs ja no tens excusa! Una via senzilla i entretinguda que transcorre per curts ressalts molt ben equipats amb el pantà de Canelles als nostres peus!",
				es: "¿Quieres visitar la ermita de la Virgen de la Pertusa? ¡Pues ya no tienes excusa! ¡Una vía sencilla y entretenida que transcurre por cortos resaltes muy bien equipados con el pantano de Canelles a nuestros pies!",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "PATACONS",
		lloc: "MUSARA, BAIX CAMP, TARRAGONA",
		destacada: false,
		nivell: 2,
		nivellClassificacio:1,
		preu: "45€",
		foto:"../media/img/activitats/patacons.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Gairebé 500 metres de longitud, una passarel·la de fusta i 4 ponts nepalís és el recorregut d'aquesta via. Si no et fan por les alçades i vols gaudir d’una de les grans ferrades catalanes, no dubtis a venir.",
				es: "Casi 500 metros de longitud, una pasarela de madera y 4 puentes nepalíes es el recorrido de esta vía. Si no te dan las alturas y quieres disfrutar de una de las grandes ferratas catalanas, no dudes en venir.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "BAUMES CORCADES",
		lloc: "CENTELLES, OSONA, BARCELONA",
		destacada: true,
		nivell: 2,
		nivellClassificacio:1,
		preu: "35€",
		foto:"../media/img/activitats/baumescorcades.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Coneguda i famosa pel seu impressionant pont nepalí de 68 metres. També trobarem trams verticals, desplomats atlètics i una escala penjant!",
				es: "Conocida y famosa por su impresionante puente nepalí de 68 metros. También encontraremos tramos verticales, desplomados atléticos y una escalera colgante!",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "ROCA NARIEDA",
		lloc: "FÍGOLS I ALINYÀ, ALT URGELL, LLEIDA",
		destacada: false,
		nivell: 2,
		nivellClassificacio:1,
		preu: "55€",
		foto:"../media/img/activitats/rocanarieda_2.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "La via ferrada més llarga de la península, amb una escala en forma d’espiral i una passarel·la exposada de 38 metres! No tens ganes de descobrir aquesta via? Ho té tot: és llarga, exigent i amb passos originals.",
				es: "¡La vía ferrata más larga de la península, con una escalera en forma de espiral y una pasarela expuesta de 38 metros! ¿No tienes ganas de descubrir esta vía? Lo tiene todo: es larga, exigente y con pasos originales.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "SERRA DE LES CANALS",
		lloc: "OLIANA, ALT URGELL, LLEIDA",
		destacada: false,
		nivell: 2,
		nivellClassificacio:1,
		preu: "Consultar",
		foto:"../media/img/activitats/serradelescanals.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Disposa d'un primer tram més familiar i d'un segon mes vertical i atlètic per si ens quedem amb ganes. Un retorn equipat per la cresta que ens farà acabar de gaudir la jornada.",
				es: "Dispone de un primer tramo más familiar y un segundo mes vertical y atlético por si nos quedamos con ganas. Un regreso equipado por la cresta que nos hará terminar de disfrutar la jornada.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "VENES DE ROJALONS",
		lloc: "ROJALONS, CONCA DE BARBERÀ, TARRAGONA",
		destacada: false,
		nivell: 2,
		nivellClassificacio:1,
		preu: "Consultar",
		foto:"../media/img/activitats/venesrojalons.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Has fet alguna ferrada a les fosques? Aquí trobarem una mica de tot! Recorregut molt original, amb algun tram on necessitarem portar frontal, ja que va per dins d'unes esquerdes! T’hi animes?",
				es: "¿Has hecho alguna ferrata a oscuras? ¡Aquí encontraremos un poco de todo! Recorrido muy original, con algún tramo donde necesitaremos llevar frontal, ¡ya que va por dentro de unas grietas! ¿Te animas?",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "CANAL DE LES DAMES",
		lloc: "COLLBATÓ, BAIX LLOBREGAT, BARCELONA",
		destacada: false,
		nivell: 4,
		nivellClassificacio:1,
		preu: "45€",
		foto:"../media/img/activitats/damas.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Bones vistes i seguretat són dos al·licients que ofereix la via ferrada Canal de les Dames, una via divertida que compleix les expectatives de qualsevol. Vine a gaudir del conglomerat de Montserrat amb nosaltres!",
				es: "Buenas vistas y seguridad son dos alicientes que ofrece la vía ferrata Canal de las Damas, una vía divertida que cumple las expectativas de cualquiera. ¡Ven a disfrutar del conglomerado de Montserrat con nosotros!",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "CANAL DEL MEJILLÓN",
		lloc: "MONTSERRAT, BAGES, BARCELONA",
		destacada: false,
		nivell: 4,
		nivellClassificacio:2,
		preu: "Consultar",
		foto:"",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Equipada amb cadenes i un parell de desploms, aquesta canal equipada farà tirar de força de braços i posar a prova els més valents.",
				es: "Equipada con cadenas y un par de desplomes, esta canal equipada hará tirar de fuerza de brazos y poner a prueba a los más valientes.",
				en: ""
			},
			{
				ca: "Vols saber perquè té aquest nom?",
				es: "¿Quieres saber por qué tiene ese nombre?",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "CAST - URQUIZA - OLMO",
		lloc: "CORÇA, NOGUERA, LLEIDA",
		destacada: false,
		nivell: 4,
		nivellClassificacio:2,
		preu: "Consultar",
		foto:"",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Esportiva, aèria i vertical, caracteritzada com una de les vies més difícils del país, equipada d’una manera molt particular que la fa encara més complicada.",
				es: "Deportiva, aérea y vertical, caracterizada como una de las vías más difíciles del país, equipada de una forma muy particular que la hace aún más complicada.¿Te atreves?",
				en: ""
			},
			{
				ca: "T’hi atreveixes?",
				es: "¿Te atreves?",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "CAGATE LORITO",
		lloc: "ST LLORENÇ DE MONTGAI, NOGUERA, LLEIDA",
		destacada: false,
		nivell: 5,
		nivellClassificacio:2,
		preu: "90€",
		foto:"../media/img/activitats/cagatelorito.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Si tens experiència i vols portar el teu cos al límit, aquesta és una bona opció. Com un parc d’aventura a la paret, amb desploms, pèndols i una tirolina! Si t’emociona llegir-ho, imagina’t viure-ho acompanyat!",
				es: "Si tienes experiencia y quieres llevar tu cuerpo al límite, ésta es una buena opción. ¡Como un parque de aventura en la pared, con desplomes, péndulos y una tirolina! Si te emociona leerlo, ¡imagínate vivirlo acompañado!",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "FELIZ NAVIDAD",
		lloc: "CORÇA, NOGUERA, LLEIDA",
		destacada: false,
		nivell: 5,
		nivellClassificacio:2,
		preu: "Consultar",
		foto:"",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "110 metres de longitud, llargs desploms i considerada la més complicada de les ferrades esportives instal·lades a Catalunya. Si el teu objectiu és portar el teu cos al límit, aquí estem nosaltres per acompanyar-te.",
				es: "110 metros de longitud, largos desplomes y considerada la más complicada de las ferratas deportivas instaladas en Cataluña. Si tu objetivo es llevar tu cuerpo al límite, aquí estamos nosotros para acompañarte.",
				en: ""
			}
		]
	},
	{
		tipus: 0,
		nom: "EL CÍCLOPE",
		lloc: "CORÇA, NOGUERA, LLEIDA",
		destacada: false,
		nivell: 6,
		nivellClassificacio:2,
		preu: "Consultar",
		foto:"",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "A diferència d'una ferrada, aquí la línia de vida serà la nostra corda, 100 metres de recorregut que exigeix gran esforç tant tècnic, com físic, com mental. Últim regal que ens deixen els nostres amics del JOM.",
				es: "A diferencia de una ferrata, aquí la línea de vida será nuestra cuerda, 100 metros de recorrido que exige gran esfuerzo tanto técnico, como físico, como mental. Último regalo que nos dejan nuestros amigos del JOM.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "ESTRETS DE CASTELLAR",
		lloc: "CASTELLAR DEL VALLÈS, VALLÈS OCCIDENTAL",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "40€",
		foto:"../media/img/activitats/estretscastellar.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vols trencar amb la rutina i escapar-te al plegar de la feina? La proximitat a la ciutat de Barcelona i la seva baixa dificultat convida a la majoria a triar aquest barranc per a iniciar-se al barranquisme.",
				es: "¿Quieres romper con la rutina y escapar al salir del trabajo? La proximidad a la ciudad de Barcelona y su baja dificultad invita a la mayoría a elegir este barranco para iniciarse en el barranquismo.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "GLORIETA",
		lloc: "MONT-RAL, BAIX CAMP, TARRAGONA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/glorieta.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vine a gaudir de les aigües cristal·lines de Tarragona, un barranc ideal per iniciar-se o per venir en família, on el seu punt final són les Fonts del Glorieta, un gorg espectacular.",
				es: "Ven a disfrutar de las aguas cristalinas de Tarragona, un barranco ideal para iniciarse o para venir en familia, donde su punto final son las Fonts del Glorieta, una poza espectacular.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "TORRENT DE LA CORBA",
		lloc: "BRUGUERA, EL RIPOLLÈS, GIRONA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/torrentcobra.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Aquí gaudiràs de l’aigua freda baixant pel Torrent Roig, on veurem la seva pedra calcària i una estupenda formació en forma d’arc.",
				es: "Aquí disfrutarás del agua fría bajando por el Torrent Roig, donde veremos su piedra caliza y una estupenda formación en forma de arco.",
				en: ""
			},
			{
				ca: "Vols veure-ho? Millor si ho vius!",
				es: "¿Quieres verlo? ¡Mejor si lo vives!",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "NÚRIA INFERIOR",
		lloc: "QUERALBS, EL RIPOLLÈS, GIRONA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/nuriainferior.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "La joia del Pirineu català, on l'aigua fresca, els tobogans, salts i ràpels seran els protagonistes d'un dia espectacular.",
				es: "La joya del Pirineo catalán, donde el agua fresca, los toboganes, saltos y rápeles serán los protagonistas de un día espectacular.",
				en: ""
			},
			{
				ca: "T'hi atreveixes?",
				es: "¿Te atreves?",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "SALT DEL GRILL",
		lloc: "QUERALBS, EL RIPOLLÈS, GIRONA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/saltgrill.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Per a tots els públics, a prop de Barcelona i amb un ràpel final de 40 metres. Què mes es pot demanar? Vine a gaudir de l'aigua fresqueta del Ripollès.",
				es: "Para todos los públicos, cerca de Barcelona y con un rápel final de 40 metros. ¿Qué más se puede pedir? Ven a disfrutar del agua fresquita del Ripollès.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "BÓIXOLS",
		lloc: "BÓIXOLS, ALT URGELL, LLEIDA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/boixols.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Salts, tobogans i ràpels et portaran per les aigües més cristal·lines de la zona. Un barranc per gaudir en família o amistats. Vine i deixa't sorprendre pel seu encant!",
				es: "Saltos, toboganes y rápeles te llevarán por las aguas más cristalinas de la zona. Un barranco para disfrutar en familia o amistades. Ven y déjate sorprender por su encanto!",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "VIU DE LLEVATA",
		lloc: "VIU DE LLEVATA, ALTA RIBAGORÇA, LLEIDA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "Consultar",
		foto:"../media/img/activitats/viullevata.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vols fer el conegut “Salt del Tarzán”? Doncs estàs en el barranc adequat! Un barranc molt divertit on podràs gaudir de la natura i del Pirineu lleidetà sense sortir de l’aigua.",
				es: "¿Quieres hacer el conocido “Salto de Tarzán”? ¡Pues estás en el barranco adecuado! Un barranco muy divertido donde podrás disfrutar de la naturaleza y del Pirineo leridano sin salir del agua.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "TORRENT DEL GRAVET",
		lloc: "RUPIT, OSONA, BARCELONA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "45€",
		foto:"../media/img/activitats/torrentgravet.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vine a gaudir dels racons d'aquesta comarca, amb un ràpel de 20 metres passant per dins d'un gran roc que li dona una bellesa extraordinària. Durant l'aproximació i retorn gaudirem de les vistes del Salt de Sallent.",
				es: "Ven a disfrutar de los rincones de esta comarca, con un rápel de 20 metros pasando por dentro de una gran roca que le da una belleza extraordinaria. Durante la aproximación y regreso disfrutaremos de las vistas del Salt de Sallent.",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "FONT BORDONERA",
		lloc: "ORGANYÀ, ALT URGELL, LLEIDA",
		destacada: false,
		nivell: 0,
		nivellClassificacio:0,
		preu: "50€",
		foto:"../media/img/activitats/fontbordonera.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Formacions rocoses espectaculars, ràpels senzills i un tobogan de 7 metres que segur que no et deixa indiferent. Vine a caminar per les aigües d'Organyà!",
				es: "Formaciones rocosas espectaculares, rápeles sencillos y un tobogán de 7 metros que seguro no te deja indiferente. ¡Ven a caminar por las aguas de Organyà!",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "NÚRIA INTEGRAL",
		lloc: "QUERALBS, EL RIPOLLÈS, GIRONA",
		destacada: false,
		nivell: 3,
		nivellClassificacio:2,
		preu: "60€",
		foto:"../media/img/activitats/nuriaintegral.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "La joia del Pirineu català, on l'aigua fresca, els tobogans, salts i ràpels seran els protagonistes d'un dia espectacular.",
				es: "La joya del Pirineo catalán, donde el agua fresca, los toboganes, saltos y rápeles serán los protagonistas de un día espectacular.",
				en: ""
			},
			{
				ca: "T'hi atreveixes?",
				es: "¿Te atreves?",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "PAS DE L'ESCALELL",
		lloc: "CASTELL DE L'ARENY, BERGUEDÀ, BARCELONA",
		destacada: false,
		nivell: 3,
		nivellClassificacio:2,
		preu: "60€",
		foto:"../media/img/activitats/escalell.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Si vols millorar la tècnica de ràpel o endinsar-te en el món del barranquisme, aquest és el teu barranc. Compta amb 18 ràpels que superen grans cascades i tobogans arribant, fins i tot, als 25 metres!",
				es: "Si quieres mejorar la técnica de rápel o adentrarte en el mundo del barranquismo, éste es tu barranco. ¡Cuenta con 18 rápeles que superan grandes cascadas y toboganes llegando, incluso, a los 25 metros!",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "INFERN",
		lloc: "LA POBLA DE SEGUR, PALLARS JUSSÀ, LLEIDA",
		destacada: false,
		nivell: 3,
		nivellClassificacio:2,
		preu: "60€",
		foto:"../media/img/activitats/infern.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "Vols baixar a l’infern o saber per què té aquest nom? Amb aquest barranc sentiràs com si hi estiguessis! Un dels més espectaculars del Pirineu de Lleida. Vine i endinsa-t'hi amb nosaltres!",
				es: "¿Quieres bajar al infierno o saber por qué tiene ese nombre? ¡Con este barranco sentirás como si estuvieras allí! Uno de los más espectaculares del Pirineo de Lérida. ¡Ven y adéntrate con nosotros!",
				en: ""
			}
		]
	},
	{
		tipus: 1,
		nom: "SALT DE SALLENT",
		lloc: "RUPIT I PUIT, OSONA, BARCELONA",
		destacada: false,
		nivell: 3,
		nivellClassificacio:2,
		preu: "Consultar",
		foto:"../media/img/activitats/saltsallent.webp",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "El salt d'aigua més alt de Catalunya amb una caiguda de 120 m ens permetrà fer un parell de ràpels per arribar als seus peus.",
				es: "El salto de agua más alto de Cataluña con una caída de 120 m nos permitirá realizar un par de rápeles para llegar a sus pies.",
				en: ""
			},
			{
				ca: "Cal experiència prèvia.",
				es: "Es necesaria experiencia previa.",
				en: ""
			}
		]
	},
	/*{
		tipus: 0,
		nom: "ss",
		lloc: "ss",
		destacada: false,
		nivell: 0,
		nivellClassi":0,
		reu: "Consultar",
		foto:"",
		video:"",
		link:"",
		descripcio: [
			{
				ca: "asdf",
			"es: "fdsa"
		}		]
	},*/

];