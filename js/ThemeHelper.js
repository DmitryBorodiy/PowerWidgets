var defaultTheme = "Light";

function GetCurrentEnviromentTheme(){
  try{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    
    if (darkThemeMq.matches) {
      defaultTheme = "Dark";
    } else {
      defaultTheme = "Light";
    }
    
    return defaultTheme;
  }
  catch(e){
    console.log(e.toString());
  }
}

const RequestedTheme = {
  Light: "Light",
  Dark: "Dark"
}
