var storedGameState = window.localStorage.getItem("tatetiGameState");

if(storedGameState)
{
    gameState = JSON.parse(storedGameState);
}
else{
    //Amo el github lol <3
    
    //http://dev-test.nemikor.com/web-storage/
}