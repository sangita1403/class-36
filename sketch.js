
var database;
var gameState1 = 0;
var PlayerCount1;
var form,player,game;
var allPlayersInfo;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(PlayerCount1 === 4){
        game.updateState(1)
    }
    if(gameState1 === 1){
        game.play()
    }
}
