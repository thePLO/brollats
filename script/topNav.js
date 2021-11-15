function button(a) {
    var x = document.getElementById("myTopnav");
    if (a==1){
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    else{
      x.className = "topnav";
    }
  }
  window.onscroll = function (e) {button(0);} 