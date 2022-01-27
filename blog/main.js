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

function NavigateTo(url){
  try{
    document.location.href = url.toString();
  }
  catch(e){
    console.log(e.toString());
  }
}

function SendReview(){
  window.open("mailto:dima.borodij@gmail.com");
}

function OpenInMicrosoftStore(){
  try{
    if(navigator.appVersion.indexOf("Windows ")!=-1){
      if(getWindowsOS() == "Windows 10"){
        window.open("ms-windows-store://pdp/?productid=9NLHP5KRXZQ7");
      }
      else{
        window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
      }
    }
    else{
      window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function getWindowsOS() {
  // http://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx#PltToken
  if (navigator.appVersion.indexOf("Windows NT 10.") != -1) {
    return 'Windows 10';
  } else if (navigator.appVersion.indexOf("Windows NT 6.3") != -1) {
    return "Windows 8.1";
  } else if (navigator.appVersion.indexOf("Windows NT 6.2") != -1) {
    return "Windows 8";
  } else if (navigator.appVersion.indexOf("Windows NT 6.1") != -1) {
    return "Windows 7";
  } else if (navigator.appVersion.indexOf("Windows NT 6.0") != -1) {
    return "Windows Vista";
  } else if (navigator.appVersion.indexOf("Windows NT 5.2") != -1) {
    return "Windows Server 2003; Windows XP x64 Edition";
  } else if (navigator.appVersion.indexOf("Windows NT 5.1") != -1) {
    return "Windows XP";
  } else if (navigator.appVersion.indexOf("Windows NT 5.01") != -1) {
    return "Windows 2000, Service Pack 1 (SP1)";
  } else if (navigator.appVersion.indexOf("Windows NT 5.0") != -1) {
    return "Windows 2000";
  } else if (navigator.appVersion.indexOf("Windows NT 4.0") != -1) {
    return "Windows NT 4.0";
  } else if (navigator.appVersion.indexOf("Windows 98; Win 9x 4.90") != -1) {
    return "Windows Millennium Edition (Windows Me)";
  } else if (navigator.appVersion.indexOf("Windows 98") != -1) {
    return "Windows 98";
  } else if (navigator.appVersion.indexOf("Windows 95") != -1) {
    return "Windows 95";
  } else if (navigator.appVersion.indexOf("Windows CE") != -1) {
    return "Windows CE";
  } else {
    return "Windows OS, Version nicht bekannt";
  }
}

function Message(content){
  alert(content.toString());
}