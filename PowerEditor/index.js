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
      $("#menu-separator").css("visibility", "collapse");
      $("#SearchBoxControl").css("visibility", "collapse");
    }
    else if(documentWidth >= 780){
      $("#logo-div").css("position", "absolute");
      $("#logo-div").css("left", "14px");
      $("#get-app-button").css("visibility", "visible");
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

function SearchBing(query){
    try{
        var request = "https://www.bing.com/search?q=" + query.toString();

        window.open(request.toString());
    }
    catch(e){
        console.log(e.toString());
    }
}

function SearchButton_Click(){
    try{
        SearchBing($('#SearchBoxInput').val());
    }
    catch(e){
        console.log(e.toString());
    }
}

function GetApp(){
    try{
      
    }
    catch(e){
      console.log(e.toString());
    }
}
