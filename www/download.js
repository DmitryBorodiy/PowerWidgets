function SendReview(){
    try
    {
      window.open("ms-windows-store://review/?ProductId=9NLHP5KRXZQ7");
    }
    catch(e)
    {
      console.log(e.toString());
    }
}

function OpenInStore(){
    try
    {
      window.open("ms-windows-store://pdp/?ProductId=9NLHP5KRXZQ7");
    }
    catch(e)
    {
      console.log(e.toString());
    }
}