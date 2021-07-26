window.onload = function(){
  Window_OnResize();
};

function Window_OnResize(){
  var width = document.documentElement.scrollWidth;
  
  if (width <= 600){
    document.getElementById("menu_nav").style.visibility = "collapse";
  }
  else{
    document.getElementById("menu_nav").style.visibility = "visible";
  }
}

function SendReview(){
    try
    {
      window.open("ms-windows-store://review/?ProductId=9NLHP5KRXZQ7");
    }
    catch(e)
    {
      console.log(e.toString());
    }
}

function OpenInStore(){
    try
    {
      window.open("ms-windows-store://pdp/?ProductId=9NLHP5KRXZQ7");
    }
    catch(e)
    {
      console.log(e.toString());
    }
}

function DownloadInsiderBuild(){
    try{
      document.location.href = "insider/index.html";
    }
    catch(e){
      console.log(e.toString());
    }
}

function NavigateTo(path){
  try{
    document.location.href = path;
  }
  catch(e){
    console.log(e.toString());
  }
}