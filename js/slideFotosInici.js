var fotos = [
  "/brollats/media/img/slideInici/foto (1).webp",
  "/brollats/media/img/slideInici/foto (2).webp",
  "/brollats/media/img/slideInici/foto (3).webp",
  "/brollats/media/img/slideInici/foto (7).webp",
  "/brollats/media/img/slideInici/foto (8).webp"
]

  var section = document.getElementById("imatgesInici");
  for (i = 0; i < fotos.length; i++) {
    var foto = document.createElement("img");
    foto.src = fotos[i];
    section.appendChild(foto);
  }
  var images = section.children;
  images[0].classList.add("active");
  var container = document.createElement("div");
  container.id = "slideIniciButtons";
  var i;
  for (i = 0; i < images.length; i++) {
    var element = document.createElement("a");
    element.innerHTML = '<i class="far fa-circle"></i>';
    element.id = i;
    element.onclick = function(){
      selectImage(this.id)
    };
    container.appendChild(element);
  }
  section.appendChild(container);

  function updateBolas(){
    var section = document.getElementById("imatgesInici");
    var images = section.children;
    var bolasContainer = document.getElementById("slideIniciButtons");
    var bolas = bolasContainer.children;
    var i;
    for (i = 0; i < images.length-1; i++) {
      if(images[i].classList.contains("active")){
        bolas[i].innerHTML = '<i class="fas fa-circle"></i>';
      } else {
        bolas[i].innerHTML = '<i class="far fa-circle"></i>';
      }
    }
  }
  var nextImage = function(){
    var section = document.getElementById("imatgesInici");
    var images = section.children;
    var i;
    for (i = 0; i < images.length-1; i++) {
      if(images[i].classList.contains("active")){
        images[i].classList.remove("active");
        if (i+1<images.length-1){
          images[i+1].classList.add("active");
        }else {
          images[0].classList.add("active");
        }
        updateBolas();
        break;
      }
    }
    clearInterval(iniciInterval);
    iniciInterval = setInterval(function(){nextImage();}, 5000);
  }
  var previousImage = function(){
    var section = document.getElementById("imatgesInici");
    var images = section.children;
    var i;
    for (i = 0; i < images.length-1; i++) {
      if(images[i].classList.contains("active")){
        images[i].classList.remove("active");
        if (i-1>=0){
          images[i-1].classList.add("active");
        }else {
          images[images.length-2].classList.add("active");
        }
        updateBolas();
        break;
      }
    }
    clearInterval(iniciInterval);
    iniciInterval = setInterval(function(){nextImage();}, 5000);
  }
  function selectImage(desired){
    var section = document.getElementById("imatgesInici");
    var images = section.children;
    var i;
    for (i = 0; i < images.length-1; i++) {
      if(i == desired){
        images[i].classList.add("active");

      } else {
          images[i].classList.remove("active");
      }
    }
    updateBolas();
    clearInterval(iniciInterval);
    iniciInterval = setInterval(function(){nextImage();}, 5000);
  }
  updateBolas();
  var iniciInterval = setInterval(function(){nextImage();}, 5000);

  let touchstartX = 0
  let touchendX = 0


function handleGesture() {
  if(Math.abs(touchendX-touchstartX) > 120){
    if (touchendX < touchstartX) /*alert('swiped left!' )*/nextImage();
    if (touchendX > touchstartX) /*alert('swiped right!')*/previousImage();
  }
}

section.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

section.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  handleGesture()
})