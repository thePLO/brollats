var section = document.getElementById("sInici");
  var images = section.children;
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
    var section = document.getElementById("sInici");
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
    var section = document.getElementById("sInici");
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
  }
  function selectImage(desired){
    var section = document.getElementById("sInici");
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