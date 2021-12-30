<!DOCTYPE html>
<html lang="ca">
<!--<meta name="google" content="notranslate">-->
  <head>
    <meta charset="utf-8">
    <title>Brollats - Guies de muntanya</title>
    <meta name="author" content="Brollats">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script src="https://kit.fontawesome.com/15ab96be69.js" crossorigin="anonymous"></script>
    <link rel="icon" type="image/png" href="media/img/logos/logo_1_c3.png">
    <link rel="stylesheet" href="css/styles.css">
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
      <link rel="stylesheet" href="css/ie.css">
    <![endif]-->
    <script src="js/responsive-nav.js"></script>
    
    <script src="js/data/seccioActivitat.js"></script>
    <script src="js/data/tipusActivitats.js"></script>
    <script src="js/data/activitatsData.js"></script>
    <script src="js/data/nivells.js"></script>
    <script src="js/data/nivellsFiltre.js"></script>
    <script src="js/data/bonoRegal.js"></script>
    <script src="js/data/material.js"></script>
    <script src="js/data/menuTitols.js"></script>
    <script src="js/data/calendariInfo.js"></script>

    <script src="js/activitats.js"></script>
  </head>
  <body>

    <?php include 'php/idioma.php'; ?>
    <?php //include 'php/header.php'; ?>
    <header>
      <a href="#inici" class="logo" data-scroll><img src="media\img\logo_inici.png" class="logo" height="45px"></a>
      <nav class="nav-collapse" id="mainMenu" >
        <ul>
          <li class="menu-item active"><a href="#inici" data-scroll id="menu1">Inici</a></li>
          <li class="menu-item"><a href="#activitats" data-scroll id="menu2">Activitats</a></li>
          <li class="menu-item"><a href="#calendari" data-scroll id="menu3">Calendari</a></li>
          <li class="menu-item"><a href="#lloguer" data-scroll id="menu4">Lloguer de material</a></li>
          <li class="menu-item"><a href="#contacte" data-scroll id="menu5">Contacte</a></li>
          <li class="menu-item">
            <div class="social"> 
                <a class="social" href="https://www.instagram.com/brollats/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a class="social" href="https://www.facebook.com/brollats-101131178785251" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a class="social" href="https://twitter.com/brollats" target="_blank"><i class="fab fa-twitter"></i></a>
                <a class="social" href="https://api.whatsapp.com/send?phone=34644433597&text=En%20que%20et%20podem%20ajudar?" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
          </li>
        </ul>
      </nav>
    </header><script>translateMenu();</script>
    <a class="whatsupBuble" href="https://api.whatsapp.com/send?phone=34644433597&text=En%20que%20et%20podem%20ajudar?" target="_blank"><img src="media/img/logo_whatsapp.png" width="65px"></a>
    
    <script>
      var tipus = "none";
      submenuActivitats(tipus);
      var submenu = document.getElementsByClassName("submenu");
      submenu[0].style.top = "45px";
      submenuDesplegable();
    </script>

    <section id="inici">
      <div id="imatgesInici"> </div>
      <script src="js/slideFotosInici.js"></script>
      <a class="slidesNav" id="left" onclick="previousImage();"><i class="fas fa-chevron-left"></i></a>
      <a class="slidesNav" id="right" onclick="nextImage();"><i class="fas fa-chevron-right"></i></a>
    </section>

    <section id="activitats">
      <script>omplirSeccioActivitats();</script>   
      <div id="container_activitats"></div>
      <script>omplirTipusActivitats();</script>
      <script>omplirSeccioActivitats2();</script>   
      <!--<script>
        var videos= document.getElementsByClassName("activitatItem");
        for (var i=0;i<videos.length;i++){
          videos[i].addEventListener("mouseover", function() {
            this.children[0].play();
          });
          videos[i].addEventListener("mouseleave", function() {
            this.children[0].pause();
          });
        }
      </script>-->
    </section>

    <section id="calendari">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script type="text/javascript" src="js/jquery.gcal_flow.js"></script>
      <script type="text/javascript" src="js/calendar.js"></script>
      <h1 id="titolSeccioCal">Calendari</h1>
      <div id="container_activitats">
        <div id="calBrollats">
          <div class="gcf-header-block">
            <div class="gcf-title-block">
              <!--<h3 class="gcf-title">Your calendar name</h3>-->
              <h3 id="titolCalSeccioCal" class="gcf-title_2">
                <span lang='ca' translate=true>Pròximes activitats programades</span>
                <span lang='es' translate=true style='display:none;'>Próximas actividades programadas</span>
                <span lang='en' translate=true style='display:none;'>Upcoming scheduled activities</span>
              </h3>
            </div>
          </div>
          <div class="gcf-item-container-block">
            <div class="gcf-item-block">
              <a class="link-desc-based" href="">
                <span style="display:none;" class="gcf-item-description"></span><!--DESC-LINK-->
                <div class="gcf-item-header-block">
                  <div class="gcf-item-date-block">
                    <span class="gcf-item-date"></span><!--DIA-->
                    <br><span class="gcf-item-daterange"></span><!--HORA-->
                  </div>
                  <div class="gcf-item-title-block">
                    <strong class="gcf-item-title"></strong><!--TITLE-->
                  </div>
                </div>
              </a>
            </div>        
          </div>
        </div>
        <div id="calInfoBrollats"></div>
      </div>
      <script>omplirCalendari();</script>
    </section>

    <section id="lloguer"></section>
    <script>omplirMaterial();</script>

    <section id="contacte">
      <script>
        var iframeHeight = -1;
        function resizeIframe(obj) {
          if(iframeHeight==-1) iframeHeight =  obj.contentWindow.document.documentElement.scrollHeight;
          obj.style.height = iframeHeight + 'px';
        }
      </script>
      <iframe name="myframe" src="contact.php" style="width:100%; overflow: hidden; border:none;" frameborder="0" scrolling="no" onload="resizeIframe(this)"></iframe>
    </section>
  </body>

  <script src="js/fastclick.js"></script>
  <script src="js/scroll.js"></script>
  <script src="js/fixed-responsive-nav.js"></script>
  <footer id="footer">
    <div class="container">
      <div style="min-width:300px">
        <img src="/media/img/logo_inici.png" class="logo">
        <br>
        <a href="https://www.instagram.com/brollats/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="https://www.facebook.com/brollats-101131178785251" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
        <a href="https://twitter.com/brollats" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://api.whatsapp.com/send?phone=34644433597&text=En%20que%20et%20podem%20ajudar?" target="_blank"><i class="fab fa-whatsapp fa-2x"></i></a>
        <br>
        <a href="mailto:info@brollats.cat">info@brollats.cat</a>
        <br><br>
        <a href="tel:+34644433597">644 433 597</a>
        <p style="font-size: 10px">
          <span lang='ca' translate=true>Si no contestem, deixeu-nos un Whatsapp</span>
          <span lang='es' translate=true style='display:none;'>Si no contestamos, dejanos un Whatsapp</span>
          <span lang='en' translate=true style='display:none;'>If we don't answer, send us a Whatsapp</span>
        </p>
      </div>
      <div style="min-width:300px">
        <strong>
          <br>
          <span lang='ca' translate=true>Col·laboradors</span>
          <span lang='es' translate=true style='display:none;'>Colaboradores</span>
          <span lang='en' translate=true style='display:none;'>Partners</span>
          <br><br>
        </strong>
        <div>
          <div style="font-size: 10px">
              <a href="https://www.jombigwall.com/"><img src="/media/img/logos/jom.png" style="height:30px;background-color:black;padding:5px;border-radius:5px;" class="logo"/>
              <br>
              <span lang='ca' translate=true>Botiga especialitzada en esports al aire lliure</span>
              <span lang='es' translate=true style='display:none;'>Tienda especializada en deportes al aire libre</span>
              <span lang='en' translate=true style='display:none;'>Store specialized in outdoor sports</span>
          </div>
          <br>
          <div style="font-size: 10px">
              <a href="https://www.escapadesenparella.cat/"><img src="/media/img/logos/escapades.png" style="height:25px;background-color:white;padding:5px;border-radius:5px;" class="logo"/>
              <br>
              <span lang='ca' translate=true>Portal especialitzat en escapades</span>
              <span lang='es' translate=true style='display:none;'>Portal especializado en escapadas</span>
              <span lang='en' translate=true style='display:none;'>Portal specializing in outdoor plans</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</html>
