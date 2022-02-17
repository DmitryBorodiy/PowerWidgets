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
    }
    else if(documentWidth >= 780){
      $("#logo-div").css("position", "absolute");
      $("#logo-div").css("left", "14px");
      $("#get-app-button").css("visibility", "visible");
    }
  }
  catch(e){
    console.log(e.toString());
  }
}
