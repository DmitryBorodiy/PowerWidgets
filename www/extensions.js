window.onload = function(){
    document.body.onresize = Window_OnResize;

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

function NavigateTo(path){
    try{
      document.location.href = path;
    }
    catch(e){
      console.log(e.toString());
    }
}

function GetPremium(){
    try{
        window.open("ms-windows-store://pdp/?ProductId=9N9D5RCZ3QV7");
    }
    catch(e){
        console.log(e.toString());
    }
}

function OpenWindow(url){
    try{
        window.open(url);
    }
    catch(e){
        console.log(e.toString());
    }
}