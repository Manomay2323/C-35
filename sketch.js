var playerCount,database;
var gameState=0;
var form;
var player,game;
var allplayers;

function setup(){
    createCanvas(500,500);
    
database=firebase.database()

game= new Game();
game.getState();
game.start();

}

function draw(){
if(playerCount===4){
    game.update(1);
}
    if(gameState===1){
        clear();
        game.play();
    }
}
