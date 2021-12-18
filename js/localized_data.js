/*{
  "titol_activitat"= {
    "ca"=[
      "Activitats"
    ],
    "es"=[
      "Actividades"
    ]
  },
  "descripcio_activitat"={
    "ca"=[
      "Vies ferrades, barranquisme, escalada...Entra i descobreix totes les activitats que oferim des de Brollats, segur que trobes la teva!",
      "Totes les nostres activitats inclouen guia titulat inscrit en el ROPEC, assegurança tant de responsabilitiat civil i d'accidents, tot el material necessari i de seguretat  i un petit reportatge fotogràfic a mans del guia."
    ],
    "es"=[
      "Vías ferratas, barranquismo, escalada...Entra y descubre todas las actividades que ofrecemos desde Brollats, ¡seguro que encuentras la tuya!",
      "Todas nuestras actividades incluyen guía titulado inscrito en el ROPEC, seguro tanto de responsabilidad civil y de accidentes, todo el material necesario y de seguridad y un pequeño reportaje fotográfico en manos del guía."
    ]
  }
}*/


var buttonContainer = document.querySelector("#idiomaSwapp");
console.log(buttonContainer);
      
function updateLangButton(){
  var language = localStorage.getItem('language');
  if(language=='es'){
    buttonContainer.children[2].classList.add("active");
    buttonContainer.children[1].classList.remove("active");
  }else {
    buttonContainer.children[1].classList.add("active");
    buttonContainer.children[2].classList.remove("active");
  }
}

function updateTexts(){
  var language = localStorage.getItem('language');
  var translatables = document.querySelectorAll('[translate=true]');
   for (var i = 0; i < translatables.length; i++) {
      if(translatables[i].getAttribute("lang")==language) translatables[i].style.display = "inline";
      else translatables[i].style.display = "none";
   }
}

function changeLanguage(_lan){
  localStorage.setItem('language', _lan||'ca');
  document.documentElement.setAttribute('lang', _lan||'ca');
  updateLangButton();
  updateTexts();
}

var language = localStorage.getItem('language');
if (language == null){
  localStorage.setItem('language', 'ca');
}

updateLangButton();