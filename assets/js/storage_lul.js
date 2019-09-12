var storedGameState = window.localStorage.getItem("tatetiGameState");

if(storedGameState)
{
    gameState = JSON.parse(storedGameState);
}
else{
    
}