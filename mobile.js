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
    }
  }
  catch(e){
    console.log(e.toString());
  }
}