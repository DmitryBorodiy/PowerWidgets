window.onload = function(){
  Window_OnResize();
}

function Window_OnResize(){
  var width = document.documentElement.scrollWidth;
  
  if (width <= 600){
    document.getElementById("menu_nav").style.visibility = "collapse";
  }
  else{
    document.getElementById("menu_nav").style.visibility = "visible";
  }
}