
var gameState=0
var playerCount;
var database,form1,player1,game1;

function setup(){

canvas=createCanvas(400,400)
    database=firebase.database();
    game1=new Game();
    game1.getState();
    game1.start();
}
function draw(){

}
