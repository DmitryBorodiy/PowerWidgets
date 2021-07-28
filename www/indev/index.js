window.onload = function(){

};

function GoBack(){
    try{
        window.history.back();
    }
    catch(e){
        console.log(e.toString());
    }
}