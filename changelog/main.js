window.onload = function(){
    Page_OnLoaded();
};

function Page_OnLoaded(){
    try{
        CheckShellTheme();
    }
    catch(e){
        console.log(e.toString());
    }
}

function SetTheme(theme){
    try{
        switch(theme){
            case "Light":
                document.body.style.backgroundColor = "rgb(246, 246, 246)";
                document.body.style.color = "rgb(32, 32, 32)";
                document.getElementsByClassName("gradient-div")[0].style.background = "linear-gradient(0deg, rgba(250, 250, 250, 1) 3%, rgba(255,255,255,0) 100%)";
            break;
            case "Dark":
                document.body.style.backgroundColor = "rgb(32, 32, 32)";
                document.body.style.color = "rgb(250, 250, 250)";
                document.getElementsByClassName("gradient-div")[0].style.background = "linear-gradient(0deg, rgba(32, 32, 32, 1) 3%, rgba(255,255,255,0) 100%)";
            break;
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function CheckShellTheme(){
    try{
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(e => {
            if(e.matches){
                SetTheme("Dark");
            } else{
                SetTheme("Light");
            }
        });
    }
    catch(e){
        console.log(e.toString());
    }
}