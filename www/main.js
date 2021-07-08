window.onload = function(){
  var width = document.documentElement.clientWidth;
  
  if (width <= 850) {
    document.getElementById("app_navigation").style.visibility = "collapse";
    document.getElementById("download_app_button").style.visibility = "collapse";
  }
  else if (width >= 850) {
    document.getElementById("app_navigation").style.visibility = "visible";
    document.getElementById("download_app_button").style.visibility = "visible";
  }
}

function Page_OnResize(){
  var width = document.documentElement.clientWidth;
  
  if(width <= 850){
    document.getElementById("app_navigation").style.visibility = "collapse";
  }
  else if(width >= 850){
    document.getElementById("app_navigation").style.visibility = "visible";
  }
}