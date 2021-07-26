var content;

window.onload = function(){
    setTimeout(OnTick, 5000);

    document.body.onresize = OnResize;

    content = document.getElementById("content");

    OnResize();
};

function OnResize(){
    try{
        content.style.width = window.innerWidth.toString() + "px";
        content.style.height = window.innerHeight.toString() + "px";

        console.log(document.documentElement.scrollWidth.toString() + "px");
        console.log(document.documentElement.scrollHeight.toString() + "px");
    }
    catch(e){
        console.log(e.toString());
    }
}

function OnTick(){
    try{
        document.location.href = "home.html";
    }
    catch(e){
        console.log(e.toString());
    }
}