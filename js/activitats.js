let activitat = {
	nom:{
		"ca": "Activitats",
		"es": "Actividades"
	},
	descripcio:[
		{
			"ca": "Vies ferrades, barranquisme, escalada...Entra i descobreix totes les activitats que oferim des de Brollats, segur que trobes la teva!",
			"es": "Vías ferratas, barranquismo, escalada...Entra y descubre todas las actividades que ofrecemos desde Brollats, ¡seguro que encuentras la tuya!"
		},
		{
			"ca": "El <strong>preu</strong> de les nostres activitats inclouen <strong>guia</strong> titulat inscrit en el ROPEC, <strong>assegurança</strong> tant de responsabilitiat civil com d'accidents, tot el <strong>material necessari</strong> i de seguretat per la realització de l'activitat i un petit <strong>reportatge fotogràfic</strong> a mans del guia.",
			"es": "El <strong>precio</strong> de nuestras actividades incluyen <strong>guía</strong> titulado inscrito en el ROPEC, <strong>seguro</strong> tanto de responsabilidad civil como de accidentes, todo el <strong>material necesario</strong> y de seguridad para la realización de la actividad y un pequeño <strong>reportaje fotográfico</strong> a manos del guía."
		}
	]
};

let tipusActivitat = [
	{//0
		nom:{
			"ca": "Via Ferrada",
			"es": "Vía Ferrata"
		},
		descripcio:[
			{
				"ca": "Les vies ferrades consisteixen en itineraris equipats per les parets amb diversos materials: claus, grapes, preses, passamans, ponts, escales penjant... vols saber-ne més? En una ferrada trobaràs esport i diversió en una mateixa activitat. Vine i gaudeix amb nosaltres de les millors ferrades de Catalunya!",
				"es": "Las vías ferratas consisten en itinerarios equipados por las paredes con diversos materiales: clavos, grapas, presas, pasamanos, puentes, escaleras colgando... ¿quieres saber más? En una ferrata encontrarás deporte y diversión en una misma actividad. ¡Ven y disfruta con nosotros de las mejores ferratas de Cataluña!"
			},
			{
				"ca": "El <strong>preu</strong> de les nostres activitats inclouen <strong>guia</strong> titulat inscrit en el ROPEC, <strong>assegurança</strong> tant de responsabilitiat civil com d'accidents, tot el <strong>material necessari</strong> i de seguretat per la realització de l'activitat i un petit <strong>reportatge fotogràfic</strong> a mans del guia.",
				"es": "El <strong>precio</strong> de nuestras actividades incluyen <strong>guía</strong> titulado inscrito en el ROPEC, <strong>seguro</strong> tanto de responsabilidad civil como de accidentes, todo el <strong>material necesario</strong> y de seguridad para la realización de la actividad y un pequeño <strong>reportaje fotográfico</strong> a manos del guía."
			}
		],
		link:"activitats/viaferrada.html", 
		img:"media/img/slideInici/foto (4).webp",
		video:""
	},
	{//1
		nom:{
			"ca": "Barranquisme",
			"es": "Barranquismo"
		},
		descripcio:[
			{
				"ca": "Imagina't estar en un parc aquàtic... però en el medi natural. No et sembla la millor opció per un cap de setmana o per sortir de la rutina? El barranquisme és un esport d'aventura que es practica dins d'un riu on hi podrem trobar salts, ràpels, cascades, tobogans... Sona bé, oi? Nosaltres t'hi acompanyem!",
				"es": "Imagínate estar en un parque acuático... pero en el medio natural. ¿No te parece la mejor opción para un fin de semana o salir de la rutina? El barranquismo es un deporte de aventura que se practica dentro de un río donde podremos encontrar saltos, rápeles, cascadas, toboganes... Suena bien, ¿verdad? ¡Nosotros te acompañamos!"
			},
			{
				"ca": "El <strong>preu</strong> dels barrancs inclouen <strong>guia</strong> titulat inscrit en el ROPEC, <strong>assegurança</strong> tant de responsabilitiat civil com d'accidents, tot el <strong>material necessari</strong> i de seguretat per la realització de l'activitat i un petit <strong>reportatge fotogràfic</strong> a mans del guia.",
				"es": "El <strong>precio</strong> de los barrancos incluyen <strong>guía</strong> titulado inscrito en el ROPEC, <strong>seguro</strong> tanto de responsabilidad civil como de accidentes, todo el <strong>material necesario</strong> y de seguridad para la realización de la actividad y un pequeño <strong>reportaje fotográfico</strong> a manos del guía."
			},
			{
				"ca": "*Per la realització d'activitats de barranquisme és imprescindible saber nedar.",
				"es": "*Para la realización de actividades de barranquismo es imprescindible saber nadar."
			}
		],
		link:"activitats/barranquisme.html", 
		img:"media/img/slideInici/foto (2).webp",
		video:""
	},
	{//2
		nom:{
			"ca": "Escalada",
			"es": "Escalada"
		},
		link:"activitats/escalada.html",
		img:"media/img/slideInici/foto (4).webp",
		video:""
	},
	{//3	
		nom:{
			"ca": "Raquetes",
			"es": "Raquetas"
		},
		link:"activitats/raquetes.html",
		img:"media/img/slideInici/foto (7).webp",
		video:""
	},
	{//4
		nom:{
			"ca": "Orientació",
			"es": "Orientación"
		},
		link:"activitats/orientacio.html",
		img:"media/img/slideInici/foto (2).webp",
		video:""
	}
];

let nivells = [
	{nom: "Iniciació", color:"#00BFFF"},			//0
	{nom: "Fàcil", color:"#7FFF00"},				//1
	{nom: "Mig", color:"#ffff00"},					//2
	{nom: "Avançat", color:"#ff6600"},				//3
	{nom: "Difícil", color:"#ff0000"},				//4
	{nom: "Molt difícil", color:"#440000"},			//5
	{nom: "Molt difícil +", color:"#000000"}		//6
]
let nivellClassificació = [
	{nom: "Iniciació", color:"#00ff00", img:"source/img/slideInici/foto (4).webp", color:"#7FFF00"},		//0
	{nom: "Mig", color:"#ffff00", img:"source/img/slideInici/foto (4).webp", color:"#ffff00"},				//1
	{nom: "Avançat", color:"#ff0000", img:"source/img/slideInici/foto (4).webp", color:"#ff0000"}			//2
]
let activitats = [
	{
		tipus: 0,
		nom: "CALA DEL MOLÍ",
		lloc: "SANT FELIU DE GUÍXOLS, BAIX EMPORDÀ",
		destacata: true,
		nivell: 1,
		nivellClassi:0,
		preu: "30€",
		descripcio: [
				"Vine a gaudir d'una experiència única  a la Costa Brava. Passarem pels penya-segats de Sant Feliu de Guíxols amb el mar sota els vostres peus, una aventura inoblidable."
				]
	},
	{
		tipus: 0,
		nom: "ROCA DE LA CREU",
		lloc: "RIBES DE FRESER, EL RIPOLLÈS, GIRONA",
		destacata: true,
		nivell: 1,
		nivellClassi:0,
		preu: "35€",
		descripcio: [
				"Als peu de del Pirineu trobem aquesta ferrada, ideal per a iniciar-se amb els amics i la família i amb vistes espectaculars del poble i del Taga.",
				"Us animeu?"
				]
	},
	{
		tipus: 0,
		nom: "ss",
		lloc: "ss",
		destacata: false,
		nivell: 0,
		nivellClassi:0,
		preu: "Consultar",
		descripcio: ""
	}

];

function omplirActivitats(){
	var section = document.getElementById("activitats");
    
    var title = document.createElement("h1");
    title.innerHTML = 
        "<span lang='ca'translate=true>" + activitat.nom.ca + "</span>" +
        "<span lang='es'translate=true style='display:none;'>" + activitat.nom.es + "</span>";
    section.appendChild(title);

    for (var i = 0; i < activitat.descripcio.length; i++) {
    	var paragraph = document.createElement("p");
    	paragraph.innerHTML = 
        	"<span lang='ca'translate=true>" + activitat.descripcio[i].ca + "</span>" +
        	"<span lang='es'translate=true style='display:none;'>" + activitat.descripcio[i].es + "</span>";
    	section.appendChild(paragraph);
    }
}; //omplirActivitats();

function omplirTipusActivitats(){
	var container = document.getElementById("container_activitats");
    for (var i = 0; i < tipusActivitat.length; i++) {
        var element = document.createElement("div");
        //element.id = i;
        element.classList.add("activitatItem");
        element.style.backgroundImage = 'url("' + tipusActivitat[i].img + '")';
        element.style.backgroundPosition = "center";
        element.style.backgroundSize = "cover";

        if(tipusActivitat[i].video!=""){
        	var video = document.createElement("video");
        	video.muted = true;
        	video.loop = true;
        	video.innerHTML = '<source src="'+tipusActivitat[i].video+'" type="video/mp4"/>';

        	element.appendChild(video);
        }
        
        var text = document.createElement("a");
        text.href = tipusActivitat[i].link;
        text.target = "#";
        text.classList.add("title");
        text.innerHTML = "<h2>" + 
        "<span lang='ca'translate=true>" + tipusActivitat[i].nom.ca + "</span>" +
        "<span lang='es'translate=true style='display:none;'>" + tipusActivitat[i].nom.es + "</span>" +
        "</h2>";
        element.appendChild(text);
       
        container.appendChild(element);
    }
}; //omplirActivitats();