window.onload = function(){
  Page_OnResize();
};

function Page_OnResize(){
  try{
    var documentWidth = parseInt(document.body.clientWidth);
    console.log(documentWidth.toString());
    
    if(documentWidth <= 780){
      $("#logo-div").css("position", "relative");
      $("#logo-div").css("left", "0px");
      $("#get-app-button").css("visibility", "collapse");
      $("#menu-ui").css("visibility", "collapse");
      $("#menu-separator").css("visibility", "collapse");
      $("#SearchBoxControl").css("visibility", "collapse");
    }
    else if(documentWidth >= 780){
      $("#logo-div").css("position", "absolute");
      $("#logo-div").css("left", "14px");
      $("#get-app-button").css("visibility", "visible");
      $("#menu-ui").css("visibility", "visible");
      $("#menu-separator").css("visibility", "visible");
      $("#SearchBoxControl").css("visibility", "visible");
    }
  }
  catch(e){
    console.log(e.toString());
  }
}

function SearchBoxInput_KeyDown(key){
    try{
        if(key != null){
            if(key.code == "Enter"){
                //debugger;
                SearchBing($('#SearchBoxInput').val());
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

function SearchBing(query){
    try{
        var request = "https://www.bing.com/search?q=" + query.toString();

        window.open(request.toString());
    }
    catch(e){
        console.log(e.toString());
    }
}

function SendReview(){
    try{
        if(getWindowsOS() == "Windows 10"){
            window.open("ms-windows-store://review/?ProductId=9NCXLRSKPL9K");
        }
        else{
            window.open("https://www.microsoft.com/store/productId/9NCXLRSKPL9K");
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function GetApp(){
    try{
        if(getWindowsOS() == "Windows 10"){
            window.open("ms-windows-store://pdp/?ProductId=9NCXLRSKPL9K");
        }
        else{
            window.open("https://www.microsoft.com/store/productId/9NCXLRSKPL9K");
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
