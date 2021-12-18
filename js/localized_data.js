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

function changeLanguage(_lan){
  localStorage.setItem('language', _lan||'ca');
  document.documentElement.setAttribute('lang', _lan||'ca');
  updateLangButton();
}

var language = localStorage.getItem('language');
if (language == null){
  localStorage.setItem('language', 'ca');
}updateLangButton();