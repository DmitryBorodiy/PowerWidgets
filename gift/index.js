window.onload += function(){

};

//Gift info
var giftCode = "DMCRF-VTHX9-VV4FC-RW6TC-KF7FZ";
var IsGiftAvaliable = true;

function Window_OnLoaded(){
  try{
    setTimeout(Timer_OnTick, 5600);
  }
  catch(e){
    console.log(e.toString());
  }
}

function Timer_OnTick(){
  $('#pgring').hide();
  $('#gift-content').show();

  CheckGiftBox(IsGiftAvaliable);

  $('#gift-content').css("visibility", "visible");
}

function CheckGiftBox(args){
  if(args == true){
    document.getElementById("gift-title").innerHTML = "We have a gift box for you!";
    document.getElementById("gift-code").innerHTML = giftCode.toString();
  }
  else if(args == false){
    document.getElementById("gift-title").innerHTML = "Gift box now is empty.";
    document.getElementById("gift-code").innerHTML = "";
  }
}

function SendReview(){
  window.open("mailto:dima.borodij@gmail.com");
}

function OnResize(){
    try{
        var documentWidthProperty = document.documentElement.clientWidth;

        if(documentWidthProperty <= 880){
            $('#navbar-logo').css("position", "relative");
            $('#navbar-logo').css("left", "0px");
            $('#get-app-button').css("visibility", "collapse");

            document.getElementsByClassName("navbar")[0].style.textAlign = "center";

            document.getElementById("desktop_menu").style.visibility = "collapse";
            document.getElementById("navbar_separator").style.visibility = "collapse";
            document.getElementById("send_review_button").style.visibility = "collapse";
        }
        else if(documentWidthProperty >= 880){
            $('#navbar-logo').css("position", "relative");
            $('#navbar-logo').css("left", "16px");
            $('#get-app-button').css("visibility", "visible");

            document.getElementsByClassName("navbar")[0].style.textAlign = "left";

            document.getElementById("desktop_menu").style.visibility = "visible";
            document.getElementById("navbar_separator").style.visibility = "visible";
            document.getElementById("send_review_button").style.visibility = "visible";
        }
    }
    catch(e){
        console.log(e.toString());
    }
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