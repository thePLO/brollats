//ACTIVITAT
//HistNav topleft
//activitats (desc+mencioCal+tipus+ACTdestacades) > tipus(tipus) > nivell(desctipus+nivells) > Activitats(descNivell, llistaActs)

/*tipus
nom
lloc
destacada
nivell 0,1 (facil) 2,3 (mig) 4,5 (dificil) verd, verd groc, groc, groc vermell, vermell, vermell negre
preu
descripcio*/

let tipusActivitat = [
	{//0
		nom:"Via Ferrada", 
		link:"activitats/viaferrada.html", 
		img:"media/img/slideInici/foto (4).webp",
		video:""
	},
	{//1
		nom:"Barranquisme", 
		link:"activitats/barranquisme.html", 
		img:"media/img/slideInici/foto (2).webp",
		video:""
	},
	{//2
		nom:"Escalada",
		link:"activitats/escalada.html",
		img:"media/img/slideInici/foto (4).webp",
		video:""
	},
	{//3	
		nom:"Raquetes",
		link:"activitats/raquetes.html",
		img:"media/img/slideInici/foto (7).webp",
		video:""
	},
	{//4
		nom:"Orientació",
		link:"activitats/orientacio.html",
		img:"media/img/slideInici/foto (2).webp",
		video:""
	}
]
function omplirActivitats(){
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
        text.classList.add("title");
        text.innerHTML = "<h2>" + tipusActivitat[i].nom + "<h2>";
        element.appendChild(text);
        
        /*element.onclick = function(){
        	console.log("tpus_"+this.id+": "+tipusActivitat[this.id].nom);
        };*/
        container.appendChild(element);
    }
} omplirActivitats();

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

]

function omplirTipus(){
	var cTipus = document.getElementById("containerTipus");
	var i;
    for (i = 0; i < tipusActivitat.length; i++) {
        var element = document.createElement("div");

        var image = document.createElement("div");
        image.classList.add("imageBG");
        image.style.backgroundImage ="url('" + tipusActivitat[i].img + "')";
        element.appendChild(image);

        var text = document.createElement("div");
        text.classList.add("miniaturaText");
        text.innerHTML = tipusActivitat[i].nom;
        element.appendChild(text);
        element.id = i;
        element.classList.add("tActivitat");
        element.onclick = function(){
        	console.log("tpus_"+this.id+": "+tipusActivitat[this.id].nom);
        };
        cTipus.appendChild(element);
    }
} //omplirTipus();
function temporalSeeColors(){
	var cTipus = document.getElementById("containerDestacades");
	var i;
	for (i = 0; i < nivells.length; i++) {
    	var element = document.createElement("div");
    	element.classList.add("tActivitat");
    	element.style.backgroundColor = nivells[i].color;
    	var text = document.createElement("div");
        text.classList.add("miniaturaText");
        text.innerHTML = nivells[i].nom;
        element.appendChild(text);
    	cTipus.appendChild(element);
    }
}//temporalSeeColors();
