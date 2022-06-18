var header;
var header_text;
var header_img;
var header_logo_ui;
var search_box;
var search_box_input;
var send_review_action;
var badge_ui;
var twitter_widget;
var mobile_menu_button;
var mobile_twitter_button;
var desktop_menu;
var menu_flyout_ui;
var mobile_search_input;
var frame_ui;

window.onload = function () {
    Body_OnLoaded();
    OnResize();

    //debugger;
};

setInterval(OnResize, 500);

function Body_OnLoaded() {
    try {
        document.body.onresize = OnResize;

        header = document.getElementById("header-ui");
        header_text = document.getElementById("header-text");
        header_img = document.getElementById("header-img");
        header_logo_ui = document.getElementById("header-logo-ui");
        search_box = document.getElementById("search-box");
        send_review_action = document.getElementById("send-review-action");
        badge_ui = document.getElementById("badge-ui");
        mobile_menu_button = document.getElementById("mobile-menu-button");
        mobile_twitter_button = document.getElementById("mobile-twitter-button");
        desktop_menu = document.getElementById("desktop-menu");
        menu_flyout_ui = document.getElementById("menu-flyout-ui");
        mobile_search_input = document.getElementById("mobile-search-input");
        search_box_input = document.getElementById("search-box-input");
        frame_ui = document.getElementById("frame-ui");

        if(frame_ui != null){
            frame_ui.style.height = document.body.clientHeight;
        }

        search_box.addEventListener("keydown", SearchBox_KeyDown);
        mobile_search_input.addEventListener("keydown", MobileSearch_KeyDown);

        twitter_widget = document.getElementById("twitter-widget-0");

        twitter_widget.style.position = "fixed";
        twitter_widget.style.top = "27px";
        twitter_widget.style.right = "336px";

        var windowWidth = document.body.clientWidth;

        if (windowWidth <= 800) {
            twitter_widget.style.visibility = "collapse";
            //debugger;
        }
        else {
            twitter_widget.style.visibility = "visible";
        }

        //debugger;
    }
    catch(e) {
        console.log(e.toString());
    }
}

function OnResize() {
    try {
        if(twitter_widget == null) {
            twitter_widget = document.getElementById("twitter-widget-0");
        }

        twitter_widget.style.position = "fixed";
        twitter_widget.style.top = "27px";
        twitter_widget.style.right = "336px";

        var windowWidth = document.body.clientWidth;

        if(frame_ui != null){
            frame_ui.style.height = document.body.clientHeight;
        }

        if (windowWidth <= 800) {
            header.style.height = "65px";
            header_img.width = "42";
            header_img.height = "42";
            header_text.style.visibility = "collapse";
            search_box.style.visibility = "collapse";
            send_review_action.style.visibility = "collapse";
            badge_ui.style.visibility = "collapse";
            header_img.style.left = "20px";
            header_img.style.position = "relative";
            twitter_widget.style.visibility = "collapse";
            desktop_menu.style.visibility = "collapse";
            menu_flyout_ui.style.marginTop = "70px";

            //Mobile UI handle
            mobile_menu_button.style.visibility = "visible";
            mobile_twitter_button.style.visibility = "visible";

            header_logo_ui.style.textAlign = "center";
            header_logo_ui.style.position = "";
            header_logo_ui.style.width = "100%";
            header_logo_ui.style.top = "10px";
            header_logo_ui.style.left = "0px";
        }
        else {
            header.style.height = "86px";
            header_img.width = "56";
            header_img.height = "56";
            header_text.style.visibility = "visible";
            search_box.style.visibility = "visible";
            send_review_action.style.visibility = "visible";
            badge_ui.style.visibility = "visible";
            header_img.style.left = "0xp";
            header_img.style.position = null;
            twitter_widget.style.visibility = "visible";
            mobile_menu_button.style.visibility = "visible";
            desktop_menu.style.visibility = "visible";
            menu_flyout_ui.style.marginTop = "92px";

            //Mobile UI handle
            mobile_menu_button.style.visibility = "collapse";
            mobile_twitter_button.style.visibility = "collapse";

            header_logo_ui.style.textAlign = "left";
            header_logo_ui.style.position = "fixed";
            header_logo_ui.style.width = "";
            header_logo_ui.style.top = "13px";
            header_logo_ui.style.left = "18px";
        }
    }
    catch(e) {
        console.log(e.toString());
    }
}

function SearchBox_KeyDown(args) {
    try {
        if (args.code.toString() == "Enter") {
            window.open("https://www.bing.com/search?q=" + search_box.value.toString());
            search_box.value = "";
        }
    }
    catch (e) {
        console.log(e.toString());
    }
}

function ShowMenuFlyout() {
    try {
        menu_flyout_ui.style.visibility = "visible";
    }
    catch (e) {
        console.log(e.toString());
    }
}

function HideMenuFlyout() {
    try {
        menu_flyout_ui.style.visibility = "collapse";
    }
    catch (e) {
        console.log(e.toString());
    }
}

function OpenInMicrosoftStore() {
    try {
        if (navigator.appVersion.indexOf("Windows ") != -1) {
            if (getWindowsOS() == "Windows 10") {
                window.open("ms-windows-store://pdp/?productid=9NLHP5KRXZQ7");
            }
            else {
                window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
            }
        }
        else {
            window.open("https://www.microsoft.com/en-us/p/power-widgets-customize-your-at-a-glance-info/9nlhp5krxzq7");
        }
    }
    catch (e) {
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

function NavigateTo(url) {
    try {
        document.location.href = url;
    }
    catch (e) {
        console.log(e.toString());
    }
}

function SendFeedback() {
    try {
        if(navigator.appVersion.indexOf("Windows ") != -1) {
            if(getWindowsOS() == "Windows 10") {
                window.open("ms-windows-store://review/?ProductId=9NLHP5KRXZQ7");
            }
            else{
                window.open("mailto:dima.borodiy@outlook.com");
            }
        }
        else{
            window.open("mailto:dima.borodiy@outlook.com");
        }
    }
    catch (e) {
        console.log(e.toString());
    }
}

function SearchButton_Click() {
    try {
        window.open("https://www.bing.com/search?q=" + mobile_search_input.value.toString());
        mobile_search_input.value = "";
    }
    catch (e) {
        console.log(e.toString());
    }
}

function MakeSearch(){
    try{
        window.open("https://www.bing.com/search?q=" + search_box_input.value.toString());
        search_box_input.value = "";
    }
    catch(e){
        console.log(e.toString());
    }
}

function MobileSearch_KeyDown(args) {
    try {
        if(args.code == "Enter") {
            window.open("https://www.bing.com/search?q=" + mobile_search_input.value.toString());
            mobile_search_input.value = "";
        }
    }
    catch (e) {
        console.log(e.toString());
    }
}

