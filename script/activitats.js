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
	{nom:"Via Ferrada", img:"source/img/slideInici/foto (4).webp"},	//0
	{nom:"Barranc", img:"source/img/slideInici/foto (2).webp"},    	//1
	{nom:"Escalada", img:"source/img/slideInici/foto (4).webp"},    //2
	{nom:"Raquetes", img:"source/img/slideInici/foto (7).webp"},   	//3
	{nom:"Orientació", img:"source/img/slideInici/foto (2).webp"}   //4
]
let nivells = [
	{nom: "Iniciació", color:"#00BFFF"},			//0
	{nom: "Fàcil", color:"#7FFF00"},				//1
	{nom: "Mig", color:"#ffff00"},					//2
	{nom: "Avançat", color:"#ff6600"},				//3
	{nom: "Difícil", color:"#ff0000"},				//4
	{nom: "Molt difícil", color:"#440000"},			//5
	{nom: "Molt difícil +", color:"#000000"}		//6
]
let nivellFerradaClassificació = [
	{nom: "Iniciació", color:"#00ff00"},	//0
	{nom: "Avançat", color:"#ffff00"},		//1
	{nom: "Expert", color:"#ff0000"}		//2
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
		descripcio: "Vine a gaudir d'una experiència única  a la Costa Brava. Passarem pels penya-segats de Sant Feliu de Guíxols amb el mar sota els vostres peus, una aventura inoblidable."
	},
	{
		tipus: 0,
		nom: "ROCA DE LA CREU",
		lloc: "RIBES DE FRESER, EL RIPOLLÈS, GIRONA",
		destacata: true,
		nivell: 1,
		nivellClassi:0,
		preu: "35€",
		descripcio: "Als peu de del Pirineu trobem aquesta ferrada, ideal per a iniciar-se amb els amics i la família i amb vistes espectaculars del poble i del Taga. Us animeu?"
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
} omplirTipus();
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
}temporalSeeColors();
