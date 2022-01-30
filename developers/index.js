window.onload += function(){
    HideSendReviewMenu();
};

function ShowSendReviewMenu(){
    $('#send-review-menu').show();
}

function HideSendReviewMenu(){
    $('#send-review-menu').hide();
}

function Body_OnResize(){
    try{
        var documentWidthProperty = document.documentElement.clientWidth;
        
        if(documentWidthProperty <= 1000){
            //Dev avatar
            $('#dev-avatar').css("width", "180px");
            $('#dev-avatar').css("height", "180px");

            //Dev text
            $('#dev-text').css("top", "25px");
            $('#dev-text').css("padding-left", "0px");

            $('#navbar-logo').css("position", "relative");
            $('#navbar-logo').css("left", "0px");
            document.getElementsByClassName("navbar")[0].style.textAlign = "center";

            document.getElementById("desktop_menu").style.visibility = "collapse";
            document.getElementById("navbar_separator").style.visibility = "collapse";
            document.getElementById("SearchBoxControl").style.visibility = "collapse";
            document.getElementById("send_review_button").style.visibility = "collapse";

            //Enable mobile shell
            $('#mobile-menu-button').css("visibility", "visible");
            $('#mobile-search-button').css("visibility", "visible");

            $('#socials-div').css("margin-left", "3px");
            $('#socials-div').css("margin-right", "3px");

            $('#socials').css("padding-top", "36px");
        }
        else if(documentWidthProperty >= 1000){
            //Dev avatar
            $('#dev-avatar').css("width", "200px");
            $('#dev-avatar').css("height", "200px");

            //Dev text
            $('#dev-text').css("top", "20px");
            $('#dev-text').css("padding-left", "100px");

            $('#navbar-logo').css("position", "relative");
            $('#navbar-logo').css("left", "16px");
            document.getElementsByClassName("navbar")[0].style.textAlign = "left";

            document.getElementById("desktop_menu").style.visibility = "visible";
            document.getElementById("navbar_separator").style.visibility = "visible";
            document.getElementById("SearchBoxControl").style.visibility = "visible";
            document.getElementById("send_review_button").style.visibility = "visible";

            //Disable mobile shell
            $('#mobile-menu-button').css("visibility", "collapse");
            $('#mobile-search-button').css("visibility", "collapse");

            $('#socials-div').css("margin-left", "120px");
            $('#socials-div').css("margin-right", "120px");

            $('#socials').css("padding-top", "126px");
        }

        //debugger;
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

function SearchButton_Click(){
    try{
        SearchBing($('#SearchBoxInput').val());
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

function SendMail_Click(){
    try{
        HideSendReviewMenu();

        SendMessage();
    }
    catch(e){
        console.log(e.toString());
    }
}

function SendMicrosoftStore_Click(){
    try{
        HideSendReviewMenu();

        window.open("ms-windows-store://pdp/?productid=9NLHP5KRXZQ7");
    }
    catch(e){
        console.log(e.toString());
    }
}

function ContactSkype(){
    window.open("https://join.skype.com/invite/ogkx5Z6yva8P");
}

function ContactMeSocial(args){
    try{
        if(args == "twitter"){
            window.open("https://twitter.com/dev_dmitriy");
        }
        else if(args == "facebook"){
            window.open("https://www.facebook.com/dmitriy.windows.dev");
        }
        else if(args == "instagram"){
            window.open("https://www.instagram.com/dmitriy.windowsdev/");
        }
    }
    catch(e){
        console.log(e.toString());
    }
}

function SendMessage(){
    window.open("mailto:dima.borodij@gmail.com");
}