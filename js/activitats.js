let activitats = activitatsData;

function omplirIdiomes(contingut) {
	var innerHTML = 
		"<span lang='ca' translate=true>" + contingut.ca + "</span>" +
        "<span lang='es' translate=true style='display:none;'>" + contingut.es + "</span>"+
        "<span lang='en' translate=true style='display:none;'>" + contingut.en + "</span>";
    return innerHTML;
}

//-----------------------

function omplirSeccioActivitats(){
	var section = document.getElementById("activitats");
    
    var title = document.createElement("h1");
    title.innerHTML = omplirIdiomes(seccioActivitat.nom);
    section.appendChild(title);

    for (var i = 0; i < seccioActivitat.descripcio.length; i++) {
    	var paragraph = document.createElement("p");
    	paragraph.innerHTML = omplirIdiomes(seccioActivitat.descripcio[i]);
    	section.appendChild(paragraph);
    }

    //bono!
};

function omplirTipusActivitats(){
	var container = document.getElementById("container_activitats");
    for (var i = 0; i < tipusActivitat.length; i++) {
        var element = document.createElement("div");
        //element.id = i;
        element.classList.add("activitat");
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
        //text.target = "#";
        text.classList.add("title");
        text.innerHTML = "<h2>" + omplirIdiomes(tipusActivitat[i].nom) + "</h2>";
        element.appendChild(text);
       
        container.appendChild(element);
    }
};

//-----------------------

function getIndexTipus(a){
	if (a==="ferrada") return 0;
	else if (a==="barranquisme") return 1;
	else if (a==="escalada") return 2;
	else if (a==="raquetes") return 3;
	else if (a==="orientacio") return 4;
	else return -1;
}


function submenuActivitats(a){
	var section = document.body;
	var tipus = getIndexTipus(a);

	var submenu = document.createElement("div");
	submenu.classList.add("submenu");

	for (var i = 0; i < tipusActivitat.length; i++) {
		var submenuItem = document.createElement("div");
		submenuItem.classList.add("submenu-item");
		if(i==tipus) submenuItem.classList.add("active");
		var link = document.createElement("a");
		    link.href=tipusActivitat[i].link;
		    link.innerHTML= omplirIdiomes(tipusActivitat[i].nom);
            submenuItem.appendChild(link);
        submenu.appendChild(submenuItem);
	}
	section.appendChild(submenu);
}

function submenuDesplegable(){
    const isHover = e => e.parentElement.querySelector(':hover') === e;
    document.addEventListener('mousemove', function checkHover() {
        var actButton = document.getElementById("menu2");
        var hovered = false;
    /*if (actButton.parentElement.classList.contains("active")){
        hovered = true;
    }
    else {*/
        var menu = document.getElementsByClassName("menu-item");
        var submenu = document.getElementsByClassName("submenu"); 
        for (var i = menu.length - 1; i >= 0; i--){
            if(hovered) break;
            if(menu[i].children[0].id == "menu2") hovered = isHover(menu[i]);
        }
        for (var i = submenu.length - 1; i >= 0; i--){
            if(hovered) break;
            hovered = isHover(submenu[i]);
        }
    //}
    if(hovered) actButton.classList.add("hovered");
    else actButton.classList.remove("hovered");

    if (hovered && submenu[0].style.top != "79px") submenu[0].style.top = "79px";
    else if (!hovered && submenu[0].style.top == "79px") submenu[0].style.top = "45px";
    //console.log(hovered);
});

}

function hovered(id){
    var menu = document.getElementsByClassName("menu-item");
    for (var i = menu.length - 1; i >= 0; i--) {
        menu[i].classList.remove("hovered");
        console.log(menu[i])
        if (menu[i].id == id) menu[i].classList.add("hovered");
    }
}

function activitatsfiltre(a){
	//console.log(a);
	let action = parseInt(a);
	var container = document.getElementById("container_activitats");
	for (var i = 0; i < container.children.length; i++) {
		if (action == -1) container.children[i].style.display="block";
		else {
			if (container.children[i].classList.contains("classificacio"+action)) container.children[i].style.display="block";
			else container.children[i].style.display="none";
		}
	}
	var botons = document.getElementsByClassName("containerFiltre")[0].children;
	for (var i = 0; i < botons.length; i++){ botons[i].classList.remove("active");}
	if(action+1<botons.length) botons[action+1].classList.add("active");
    else botons[botons.length-1].classList.add("active");
}
function omplirActivitat(a){
	var section = document.getElementById("contingut");
	var tipus = getIndexTipus(a);

	var title = document.createElement("h1");
    title.innerHTML = omplirIdiomes(tipusActivitat[tipus].nom);
    section.appendChild(title);

    for (var i = 0; i < tipusActivitat[tipus].descripcio.length; i++) {
    	var paragraph = document.createElement("p");
    	paragraph.innerHTML = omplirIdiomes(tipusActivitat[tipus].descripcio[i]);
    	section.appendChild(paragraph);
    }
};
function omplirActivitats(a) {
	var section = document.getElementById("contingut");
	var tipus = getIndexTipus(a);

    var containerFiltre = document.createElement("div");
    containerFiltre.classList.add("containerFiltre");

    var button_all = document.createElement("button");
    let allString = {ca: "Tot", es: "Todo", en: "All"};
    button_all.classList.add("boto_filtre");
    button_all.classList.add("active");
    button_all.onclick = function(){activitatsfiltre(-1)};
    button_all.innerHTML = omplirIdiomes(allString);
    containerFiltre.appendChild(button_all)
    var classiUtilitzada = [false, false, false];
    for (var i = 0; i < activitats.length; i++) {
        if (activitats[i].tipus == tipus){
            classiUtilitzada[activitats[i].nivellClassificacio] = true;
        }
    }
    for (var i = 0; i < nivellsFiltre.length; i++) {
        if(classiUtilitzada[i]){
            var button = document.createElement("button");
            button.classList.add("boto_filtre");
            button.id = i;
            button.onclick = function(){activitatsfiltre(this.id)};
            button.innerHTML = omplirIdiomes(nivellsFiltre[i].nom);
            containerFiltre.appendChild(button);
        }
    }
    section.appendChild(containerFiltre);

    var container = document.createElement("div");
    container.id = "container_activitats";
    for (var i = 0; i < activitats.length; i++) {
    	if (activitats[i].tipus == tipus){
    		var activitat = document.createElement("div");
    		activitat.classList.add("activitat_Item");
    		activitat.classList.add("classificacio"+activitats[i].nivellClassificacio);
    		activitat.classList.add("nivell"+activitats[i].nivell);

    		var img = document.createElement("img");
    		if(activitats[i].foto != "") img.src = activitats[i].foto;
    		else  img.src = "../media/img/activitats/default.webp";
    		activitat.appendChild(img);

        	var nom = document.createElement("h2");
    		nom.innerHTML = activitats[i].nom;
    		activitat.appendChild(nom);

    		var lloc = document.createElement("div");
    		lloc.innerHTML = activitats[i].lloc;
    		lloc.classList.add("detall");
    		activitat.appendChild(lloc);

    		for (var j = 0; j < activitats[i].descripcio.length; j++) {
    			var descripcio = document.createElement("p");
    			descripcio.innerHTML = omplirIdiomes(activitats[i].descripcio[j]);
    			activitat.appendChild(descripcio);
    		}

    		var preu = document.createElement("span");
    		preu.classList.add("preu");
    		preu.innerHTML = activitats[i].preu;
    		activitat.appendChild(preu);

    		var preu = document.createElement("span");
    		preu.classList.add("nivell");
    		preu.innerHTML = omplirIdiomes(nivells[activitats[i].nivell].nom);
    		activitat.appendChild(preu);

    		container.appendChild(activitat);
    	}
    }

    section.appendChild(container);
}

//-----------------------

function omplirBono(){
	var section = document.getElementById("contingut");
	
	var title = document.createElement("h1");
    title.innerHTML = omplirIdiomes(bonoRegal.titol);
    section.appendChild(title);

    for (var i = 0; i < bonoRegal.info.length; i++) {
    	var paragraph = document.createElement("p");
    	paragraph.innerHTML = omplirIdiomes(bonoRegal.info[i]);
    	section.appendChild(paragraph);
    }
    var container_exemples = document.createElement("div");
    container_exemples.id = "container_material";

    for (var i = 0; i < bonoRegal.exemples.length; i++) {
        var exemple = document.createElement("div");
        exemple.classList.add("exemple");

        var foto = document.createElement("img");
        foto.src = bonoRegal.exemples[i];
        exemple.appendChild(foto);

        container_exemples.appendChild(exemple);
    }

    section.appendChild(container_exemples);
}

//-----------------------
function omplirMaterial(){
    var section = document.getElementById("lloguer");

    var title = document.createElement("h1");
    title.innerHTML = omplirIdiomes(materialInfo.titol);
    section.appendChild(title);

    for (var i = 0; i < materialInfo.descripcio.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = omplirIdiomes(materialInfo.descripcio[i]);
        section.appendChild(paragraph);
    }

    var container_material = document.createElement("div");
    container_material.id = "container_material";

    for (var i = 0; i < materialInfo.activitat.length; i++) {
        var fitxaMaterial = document.createElement("div");
        fitxaMaterial.classList.add("materialActivitat");

        var title = document.createElement("h2");
        title.innerHTML = omplirIdiomes(materialInfo.activitat[i].titol);
        fitxaMaterial.appendChild(title);

        var llista = document.createElement("ul");
        for (var j = 0; j < materialInfo.activitat[i].llista.length; j++) {
            var item_llista = document.createElement("li");
            item_llista.innerHTML = omplirIdiomes(materialInfo.activitat[i].llista[j]);
            llista.appendChild(item_llista);
        }
        fitxaMaterial.appendChild(llista);

        var preu = document.createElement("div");
        preu.classList.add("preu");
        preu.innerHTML = omplirIdiomes(materialInfo.activitat[i].preu);
        fitxaMaterial.appendChild(preu);

        container_material.appendChild(fitxaMaterial);
    }

    section.appendChild(container_material);

    var container_reserva = document.createElement("div");
    container_reserva.id = "container_material";
    var item_reserva = document.createElement("div");
    item_reserva.classList.add("materialActivitat");
    item_reserva.id = "item_reserva";

    for (var i = 0; i < materialInfo.reserva.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = omplirIdiomes(materialInfo.reserva[i]);
        item_reserva.appendChild(paragraph);
    }

    var contacte = document.createElement("div");
    contacte.innerHTML = "<a href='mailto:info@brollats.cat'><i class='far fa-envelope'></i></a><br>" +
    "<a href='mailto:info@brollats.cat'>info@brollats.cat</a><br>" +
    "<a href=tel:'+34644433597'><i class='fas fa-phone'></i>  " +
    "<a href='https://api.whatsapp.com/send?phone=34644433597&text=En%20que%20et%20podem%20ajudar?' target='_blank'><i class='fab fa-whatsapp'></i></a><br>" + 
    "<a href='tel:+34644433597'>644 433 597</a>";
    item_reserva.appendChild(contacte);
    
    container_reserva.appendChild(item_reserva);

    section.appendChild(container_reserva);
    
}