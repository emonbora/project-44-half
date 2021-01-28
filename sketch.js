var pacman, hole, gameState = 1, start, startImage
var wall1, fruit1, fruit2, fruit3, fruit4, fruit5
var wall2
var wall3
var wall4 
var wall5
var wall6 
var wall7  
var wall8 
var wall9 
var wall10
var wall11 
var wall12 
var wall13 
var wall14 
var wall15 
var wall16 
var wall17 
var wall18 
var wall19
var wall20
var wall21
var wall22

function preload(){
    startImage = loadImage("start.png")
}

function setup(){
   createCanvas(400,400)
}

function draw(){
    if(gameState === 0){
        background("blue")
        textSize(13)
        stroke("black")
        text ("Pacman in Adventure", 100,20)
        text("controls : move left, right, up, down using arrow keys", 50, 50)
        start = createSprite(200,200)
        start.addImage(startImage)
        start.scale = 0.5
    
        if(mousePressedOver (start)){
            gameState = 1
            console.log("hello")
    
        }
     }
    else if (gameState === 1){
       // start.destroy();
        background ("green")
        console.log("bye")
        pacman = createSprite(20,20,20,20)
        pacman.shapeColor = "yellow"
        wall1 = createSprite(10,60,100,20);
        wall2 = createSprite(110,0,20,400);
        wall3 = createSprite(0,250,350,20);
        wall4 = createSprite(350,400,20,150);
        wall5 = createSprite(100,130,100,20);
        wall6 = createSprite(205,200,100,20);
        wall7 = createSprite(200,175,20,150);
        wall8 = createSprite(200,25,20,50);
        wall9 = createSprite(400,100,200,20);
        wall10 = createSprite(300,50,20,50);
        wall11 = createSprite(350,245,20,70);
        wall12 = createSprite(300,250,15,100);
        wall13 = createSprite(345,200,100,20);
        wall14 = createSprite(275,250,45,20);
        wall15 = createSprite(350,150,20,30);
        wall16 = createSprite(175,300,260,20);
        wall17 = createSprite(50,375,15,50);
        wall18 = createSprite(100,330,15,50);
        wall19 = createSprite(150,375,15,50);
        wall20 = createSprite(200,330,15,50);
        wall21 = createSprite(250,375,15,50);
        wall22 = createSprite(300,325,15,50);
    }
    drawSprites()
}