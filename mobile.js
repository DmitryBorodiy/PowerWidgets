var header;
var logo_img;

window.onload = function(){
  DetectMobileMode();
  
  //logo_img = document.getElementById("logo_img");
  //header = document.getElementsByClassName("navbar")[0];
};

function DetectMobileMode(){
  try{
    var documentWidthProperty = document.documentElement.clientWidth;
    
    //console.log(documentWidth.toString());
    
    if(documentWidthProperty <= 1000){
      $('#navbar-logo').css("position", "relative");
      $('#navbar-logo').css("left", "0px");
      document.getElementsByClassName("navbar")[0].style.textAlign = "center";

      document.getElementById("desktop_menu").style.visibility = "collapse";
      document.getElementById("navbar_separator").style.visibility = "collapse";
      document.getElementById("SearchBoxControl").style.visibility = "collapse";
      document.getElementById("send_review_button").style.visibility = "collapse";

      $('#page-title').css("font-size", "40px");
      $('#app-preview-image').css("top", "100px");
        $('#app-preview-image').css("width", "85%");

        $('#content').css("width", "100%");
    }
    else if(documentWidthProperty >= 1000){
      $('#navbar-logo').css("position", "relative");
      $('#navbar-logo').css("left", "16px");
      document.getElementsByClassName("navbar")[0].style.textAlign = "left";

      document.getElementById("desktop_menu").style.visibility = "visible";
      document.getElementById("navbar_separator").style.visibility = "visible";
      document.getElementById("SearchBoxControl").style.visibility = "visible";
      document.getElementById("send_review_button").style.visibility = "visible";

      $('#page-title').css("font-size", "60px");
      $('#app-preview-image').css("top", "50px");
        $('#app-preview-image').css("width", "1000px");

        $('#content').css("width", "100%");
      }

      if (documentWidthProperty <= 880) {
          $('#apps-description').css("padding-left", "35px");
          $('#apps-description').css("padding-right", "35px");
          $('#apps-description').css("margin-top", "40px");
          $('#personalize-text').css("padding-left", "35px");
          $('#personalize-text').css("padding-right", "35px");
          $('#fast-actions-text').css("padding-left", "35px");
          $('#fast-actions-text').css("padding-right", "35px");
          $('#fast-actions-text').css("padding-top", "40px");
          $('#fast-actions-text').css("top", "35px");

          $('bing-wallpapers').css("width", "100%");
      }
      else if (documentWidthProperty >= 880) {
          $('#apps-description').css("padding-left", "60px");
          $('#apps-description').css("padding-right", "0px");
          $('#apps-description').css("margin-top", "-50px");
          $('#personalize-text').css("padding-left", "135px");
          $('#personalize-text').css("padding-right", "0px");
          $('#fast-actions-text').css("padding-left", "90px");
          $('#fast-actions-text').css("padding-right", "0px");
          $('#fast-actions-text').css("padding-top", "-35px");
          $('#fast-actions-text').css("top", "-50px");

          $('bing-wallpapers').css("width", "436px");
      }
  }
  catch(e){
    console.log(e.toString());
  }
}