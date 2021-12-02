window.onload = function(){
  ThemeInitialize();
};

function ThemeInitialize(){
  try{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    
    if (darkThemeMq.matches) {
      var cssId = 'dark';
      
      if (!document.getElementById(cssId))
      {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style_dark.css';
        link.media = 'all';
        head.appendChild(link);
      }
    } 
    else {
      var cssId = 'light';
      
      if (!document.getElementById(cssId))
      {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style.css';
        link.media = 'all';
        head.appendChild(link);
      }
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function Animate(){
  
}