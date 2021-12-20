//<span lang='ca'translate=true>
//<span lang='es' translate=true style="display:none;">
//<span lang='en' translate=true style="display:none;">

var buttonContainer = document.querySelector("#idiomaSwapp");
      
function updateLangButton(){
  var language = localStorage.getItem('language');
  if(language=='en'){
    buttonContainer.children[1].classList.remove("active");
    buttonContainer.children[2].classList.remove("active");
    buttonContainer.children[2].classList.add("active");    
  }
  if(language=='es'){
    buttonContainer.children[1].classList.remove("active");
    buttonContainer.children[2].classList.add("active");
    buttonContainer.children[3].classList.remove("active");
  }
  else {
    buttonContainer.children[1].classList.add("active");
    buttonContainer.children[2].classList.remove("active");
    buttonContainer.children[3].classList.remove("active");
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
  if(_lan != "en"){
    localStorage.setItem('language', _lan||'ca');
    document.documentElement.setAttribute('lang', _lan||'ca');
    updateLangButton();
    updateTexts();
  }
}

var language = localStorage.getItem('language');
if (language == null){
  localStorage.setItem('language', 'ca');
}

updateLangButton();