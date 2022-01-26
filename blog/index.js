window.onload = function(){
  Content_OnResize();
};

function Content_OnResize(){
  var documentWidthProperty = document.documentElement.clientWidth;
  
  if(documentWidthProperty <= 750){
    document.getElementById("content_div").style.paddingLeft = "10px";
    document.getElementById("content_div").style.paddingRight = "10px";
    
    $('#navbar-logo').css("position", "relative");
    $('#navbar-logo').css("left", "0px");
    
    document.getElementsByClassName("navbar")[0].style.textAlign = "center";
    document.getElementById("desktop_menu").style.visibility = "collapse";
    document.getElementById("navbar_separator").style.visibility = "collapse";
    document.getElementById("send_review_button").style.visibility = "collapse";
  }
  else if(documentWidthProperty >= 750){
    document.getElementById("content_div").style.paddingLeft = "75px";
    
    $('#navbar-logo').css("position", "relative");
    $('#navbar-logo').css("left", "16px");
    
    document.getElementsByClassName("navbar")[0].style.textAlign = "left";
    document.getElementById("desktop_menu").style.visibility = "visible";
    document.getElementById("navbar_separator").style.visibility = "visible";
    document.getElementById("send_review_button").style.visibility = "visible";
  }
}