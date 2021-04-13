// déclaration variables

// dimensions
var ballSize = 12;
var blockSizeX = 3*ballSize;
var blockSizeY = 2*ballSize;
var shipSizeY = 2*ballSize;
var blockCapacityX = 13;
var blockCapacityY = 17;
var nbLevel = 6;



//les vitesses
var shipSpeed = 12;



//score
var life = 3;
var level = 2;
// créer un tableau de level

var levelEditor = new Array(nbLevel); 

for(var i=0; i<levelEditor.length; i++){
    levelEditor[i] = new Array(blockCapacityX);  // Deuxieme dimension (0 à 12)
    for(var j=0; j<blockCapacityX; j++){
        levelEditor[i][j] = new Array(blockCapacityY);  // Troisième dimension (0 à 16)
    }
}
//level 0 (test)

for ( var i = 0; i<blockCapacityX; i++){
    for( var j= 0 ; j<blockCapacityY; j++){
    levelEditor[0][i][j] = randColor();
    }
}
// level 1
levelEditor[1][ 0]=[0,0,2,8,8,8,6,8,8,8,2,0,0,0,0,0,0];
levelEditor[1][ 1]=[0,0,2,8,8,6,6,6,8,8,2,0,0,0,0,0,0];
levelEditor[1][ 2]=[0,0,2,8,6,6,6,6,6,8,3,0,0,0,0,0,0];
levelEditor[1][ 3]=[0,0,2,6,6,6,6,6,6,6,2,0,0,0,0,0,0];
levelEditor[1][ 4]=[0,0,2,8,8,6,6,6,8,8,2,0,0,0,0,0,0];
levelEditor[1][ 5]=[0,0,2,8,8,6,6,6,8,8,2,0,0,0,0,0,0];
levelEditor[1][ 6]=[0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0];
levelEditor[1][ 7]=[0,0,2,9,9,7,7,7,9,9,2,0,0,0,0,0,0];
levelEditor[1][ 8]=[0,0,2,9,9,7,7,7,9,9,2,0,0,0,0,0,0];
levelEditor[1] [9]=[0,0,2,7,7,7,7,7,7,7,2,0,0,0,0,0,0];
levelEditor[1][10]=[0,0,2,9,7,7,7,7,7,9,3,0,0,0,0,0,0];
levelEditor[1][11]=[0,0,2,9,9,7,7,7,9,9,2,0,0,0,0,0,0];
levelEditor[1][12]=[0,0,2,9,9,9,7,9,9,9,2,0,0,0,0,0,0];

//level 2
levelEditor[2][ 0]=[0,0,9,9,8,8,7,7,6,6,5,5,1,1,9,9,0];
levelEditor[2][ 1]=[0,0,9,9,8,8,7,7,6,6,5,5,1,1,9,9,0];
levelEditor[2][ 2]=[0,0,1,1,9,9,8,8,7,7,6,6,5,5,1,1,0];
levelEditor[2][ 3]=[0,0,1,1,9,9,8,8,7,7,6,6,5,5,1,1,0];
levelEditor[2][ 4]=[0,0,5,5,1,1,9,9,8,8,7,7,6,6,5,5,0];
levelEditor[2][ 5]=[0,0,5,5,1,1,9,9,8,8,7,7,6,6,5,5,0];
levelEditor[2][ 6]=[0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0];
levelEditor[2][ 7]=[0,0,6,6,5,5,1,1,9,9,8,8,7,7,6,6,0];
levelEditor[2][ 8]=[0,0,6,6,5,5,1,1,9,9,8,8,7,7,6,6,0];
levelEditor[2] [9]=[0,0,7,7,6,6,5,5,1,1,9,9,8,8,7,7,0];
levelEditor[2][10]=[0,0,7,7,6,6,5,5,1,1,9,9,8,8,7,7,0];
levelEditor[2][11]=[0,0,8,8,7,7,6,6,5,5,1,1,9,9,8,8,0];
levelEditor[2][12]=[0,0,8,8,7,7,6,6,5,5,1,1,9,9,8,8,0];

//level 3
levelEditor[3][ 0]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
levelEditor[3][ 1]=[0,0,0,0,0,0,0,5,4,0,0,0,0,0,0,0,0];
levelEditor[3][ 2]=[0,0,0,0,5,4,0,5,4,0,5,4,0,0,0,0,0];
levelEditor[3][ 3]=[0,0,0,0,5,4,0,5,4,0,5,4,0,0,0,0,0];
levelEditor[3][ 4]=[0,5,4,0,5,4,0,5,4,0,5,4,0,5,4,0,0];
levelEditor[3][ 5]=[0,5,4,0,5,4,0,5,4,0,5,4,0,5,4,0,0];
levelEditor[3][ 6]=[0,5,4,0,5,4,0,5,4,0,5,4,0,5,4,0,0];
levelEditor[3][ 7]=[0,5,4,0,5,4,0,5,4,0,5,4,0,5,4,0,0];
levelEditor[3][ 8]=[0,5,4,0,5,4,0,5,4,0,5,4,0,5,4,0,0];
levelEditor[3] [9]=[0,0,0,0,5,4,0,5,4,0,5,4,0,0,0,0,0];
levelEditor[3][10]=[0,0,0,0,5,4,0,5,4,0,5,4,0,0,0,0,0];
levelEditor[3][11]=[0,0,0,0,0,0,0,5,4,0,0,0,0,0,0,0,0];
levelEditor[3][12]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//level 4
levelEditor[4][ 0]=[0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0];
levelEditor[4][ 1]=[0,0,0,0,0,0,0,0,7,2,8,7,0,0,0,0,0];
levelEditor[4][ 2]=[0,0,4,4,4,4,0,7,8,8,2,7,7,0,0,0,0];
levelEditor[4][ 3]=[0,4,5,5,5,5,7,7,2,2,8,8,7,0,0,0,0];
levelEditor[4][ 4]=[0,4,5,5,5,5,7,8,8,8,2,2,7,0,0,0,0];
levelEditor[4][ 5]=[0,4,5,5,9,9,7,8,8,8,2,2,7,0,0,0,0];
levelEditor[4][ 6]=[0,0,4,4,4,4,7,7,2,2,8,8,7,8,7,0,0];
levelEditor[4][ 7]=[0,4,5,5,9,9,7,8,8,8,2,2,7,0,8,0,0];
levelEditor[4][ 8]=[0,4,5,5,5,5,7,8,8,8,2,2,7,0,7,0,0];
levelEditor[4] [9]=[0,4,5,5,5,5,7,7,2,2,8,8,7,0,0,0,0];
levelEditor[4][10]=[0,0,4,4,4,4,0,7,8,8,2,7,7,0,0,0,0];
levelEditor[4][11]=[0,0,0,0,0,0,0,0,7,2,8,7,0,0,0,0,0];
levelEditor[4][12]=[0,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0];

//level 5
levelEditor[5][ 0]=[0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0];
levelEditor[5][ 1]=[0,0,0,3,3,7,7,7,3,3,0,0,0,0,0,0,0];
levelEditor[5][ 2]=[0,0,3,7,7,7,7,7,7,7,3,0,0,0,0,0,0];
levelEditor[5][ 3]=[0,0,3,7,7,7,7,7,7,7,7,3,0,0,0,0,0];
levelEditor[5][ 4]=[0,3,7,7,7,7,7,7,7,7,7,7,3,0,0,0,0];
levelEditor[5][ 5]=[0,0,3,7,7,7,7,7,7,7,7,7,7,3,0,0,0];
levelEditor[5][ 6]=[0,0,0,3,8,7,8,7,8,7,8,7,8,7,3,0,0];
levelEditor[5][ 7]=[0,0,3,8,8,8,8,8,8,8,8,8,8,3,0,0,0];
levelEditor[5][ 8]=[0,3,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0];
levelEditor[5] [9]=[0,0,3,8,8,8,8,8,8,8,8,3,0,0,0,0,0];
levelEditor[5][10]=[0,0,3,8,8,8,8,8,8,8,3,0,0,0,0,0,0];
levelEditor[5][11]=[0,0,0,3,3,8,8,8,3,3,0,0,0,0,0,0,0];
levelEditor[5][12]=[0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0];


//level chargé
var  currentLevel= new Array(blockCapacityX);
for (var i = 0; i < blockCapacityX; i++)
{
 currentLevel[i] = new Array(blockCapacityY);
}


//les objets
var ship = new Racket(5,18,56);
var ball = new Bullet((ship.x-4)*ballSize,(ship.y+1)*ballSize,'red',true,2,2,10);





//autres
var pi =Math.PI;
var pause = false;
var key = 0;
var timer = null;



//les screen
var gameScreen = document.getElementById('gameScreen');
var scoreScreen = document.getElementById('scoreScreen');
var context = gameScreen.getContext('2d');
var context2 = scoreScreen.getContext('2d');

//définir les tailles des screen
gameScreen.setAttribute('width',13*blockSizeX);
gameScreen.setAttribute('height',30*blockSizeY);
scoreScreen.setAttribute('width',13*blockSizeX);
scoreScreen.setAttribute('height',4*ballSize);
var screenX = gameScreen.offsetLeft;
var screenY = gameScreen.offsetTop;
//définir attributs gameScreen
// gameScreen.style.backgroundImage='url(images/back'+level+'.jpg)';

//Les constructeurs

//le constructeur Racket
function Racket(size,x,y){
    this.size = size;
    this.x = x;
    this.y = y;

    //  méthodes de racket
    this.draw = function(){
       
        context.save();
        context.translate(this.x*ballSize,this.y*ballSize);
        context.beginPath();

        
        
        context.fillStyle='red';
        context.arc(ballSize,ballSize,ballSize,rad(90),rad(270));
        context.moveTo((this.size-1)*ballSize,ballSize);
        context.arc((this.size-1)*ballSize,ballSize,ballSize,rad(90),rad(270),true);
        context.fill();

        
        context.fillStyle='rgb(217,217,217)';
        context.fillRect(ballSize,0,(this.size-2)*ballSize,blockSizeY);
        context.restore();
        

    }
    this.erase = function(){
        context.save();
        context.translate(this.x*ballSize,this.y*ballSize);
        context.clearRect(0, 0, this.size*ballSize, blockSizeY);
        context.restore();
        
        

    }
    this.move = function(direction){
        
        if (timer){return};
        var zis = this;
        timer = setInterval(function(){
            
            zis.erase();
            zis.x += (direction);
         
            if(zis.x<0){zis.x = 0};
            if(zis.x+zis.size>39){zis.x = 39-zis.size};
            zis.draw();
            
            
        },25);
   


        

    }
}

//le constructeur ball

function Bullet(x,y,color,powered,speedX,speedY,speedMax){
    this.x = x;
    this.y = y;
    this.color = color;
    this.powered = powered;
    this.speedX = speedX;
    this.speedY = speedY;
    this.speedMax = speedMax;
    this.impactX = 0;
    this.impactY = 0;

    
    


    //les méthodes de Bullet
    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
    
        context.fillStyle = this.color;
        context.arc(0, 0, ballSize/2, 0, rad(360));
        context.fill();
        context.restore();

        


        // dessin direction, point impact boule?
        var alpha = Math.atan(ball.speedY/ball.speedX);
        if (this.speedX >=0 && this.speedY >=0){this.impactX = this.x+(ballSize/2)*Math.cos(alpha);this.impactY = this.y+(ballSize/2)*Math.sin(alpha);}
        if (this.speedX >=0  && this.speedY <0){this.impactX = this.x+(ballSize/2)*Math.cos(alpha);this.impactY = this.y-(ballSize/2)*Math.sin(alpha+Math.PI);}
        if (this.speedX <0 && this.speedY >=0){this.impactX = this.x+(ballSize/2)*Math.cos(alpha+Math.PI);this.impactY = this.y+(ballSize/2)*Math.sin(alpha+Math.PI);}
        if (this.speedX <0 && this.speedY <0){this.impactX = this.x+(ballSize/2)*Math.cos(alpha+Math.PI);this.impactY = this.y+(ballSize/2)*Math.sin(alpha+Math.PI);}
        // this.impactX = this.x+(ballSize/2)*Math.cos(alpha);
        // this.impactY = this.y+(ballSize/2)*Math.sin(alpha);
        context.save();
        context.translate(this.impactX,this.impactY);
        context.beginPath();
    
        context.fillStyle = 'white';
        context.arc(0, 0, 3, 0, rad(360));
        context.fill();
        context.restore();
        console.log('ball speed:',this.speedX,this.speedY);

    }
    this.erase = function(){
        
        context.save();
        context.translate(this.x,this.y);
        context.fillStyle='red';
        
        context.clearRect(-ballSize/2, -ballSize/2,ballSize,ballSize);
        
        context.restore();

    }

    this.checkCollision = function(){
        //Collision avec murs

        //extrémités de la balle    
        var rightEdgeBall = this.x+ballSize/2;
        var leftEdgeBall = this.x-ballSize/2;
        var topEdgeBall = this.y-ballSize/2;
        var bottomEdgeBall = this.y+ballSize/2;
                
        if(leftEdgeBall < 0 || rightEdgeBall>gameScreen.width ){
            this.speedX=-this.speedX;
         }

        
       
        if(topEdgeBall < 0 ){this.speedY=-this.speedY;}
        if(bottomEdgeBall > gameScreen.height ){this.speedY=-this.speedY;}// = perdu

        //Collision avec ship

        //extrémités et mise à l'echelle de ship
        var leftEdgeShip = ship.x*ballSize;
        var rightEdgeShip = (ship.x+ship.size)*ballSize;
        var topEdgeShip = ship.y*ballSize;
        var bottomEdgeShip = (ship.y+2)*ballSize;
        
        //Définition de toutes les conditions pour une collision
        // A la même altitude
        var isAtlevel = bottomEdgeBall > topEdgeShip && topEdgeBall < bottomEdgeShip;
        var isInBetween = rightEdgeBall >= leftEdgeShip && leftEdgeBall <= rightEdgeShip;
        var isTouching = isInBetween && isAtlevel;
        var isTouchingLeftRed = isTouching && ball.x < leftEdgeShip+ballSize;
        var isTouchingRightRed = isTouching && ball.x > rightEdgeShip-ballSize;
   
        if(isTouching){this.speedY=-this.speedY;}
        if(isTouchingLeftRed || isTouchingRightRed ){this.speedX=-this.speedX;}
        
         //Collision avec block
        var blockZoneX = Math.floor(this.x/blockSizeX);
        var blockZoneY = Math.floor(this.y/blockSizeY);
        // console.log('block('+blockZoneX+','+blockZoney+')'); 
        // console.log(currentLevel[blockZoneX][blockZoneY].color);
        if(currentLevel[blockZoneX][blockZoneY] && currentLevel[blockZoneX][blockZoneY].lifeLeft>0){
            this.speedY=-this.speedY;
            currentLevel[blockZoneX][blockZoneY].colided();
        }  

    }
    
    




 
}
//Le constructeur Block
function Block(color,x,y){
    //propriétés de Block
    this.color=color;
    switch (color){
        case 'hotpink':
            this.lifeLeft=1;
            this.resurrect=false;
            this.acceleration=-2;
            break;
        case 'silver':
            this.lifeLeft=2;
            this.resurrect=false;
            this.acceleration=0;
            break;
        case 'goldenrod':
            this.lifeLeft=Infinity;
            this.resurrect=false;
            this.acceleration=2;
            break;
        case 'slategray':
            this.lifeLeft=2;
            this.resurrect=true;
            this.acceleration=2;
            break;
        default:
            this.lifeLeft=1;
            this.resurrect=false;
            this.acceleration=0;
            break;

    }

    this.x=x;
    this.y=y;

    //méthodes de de Block
    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.fillStyle = this.color;
        context.rect(this.x, this.y,blockSizeX , blockSizeY);
        context.fill();
        context.stroke();
        context.restore();
        // console.log(this.x,this.y);
    }

    this.dies = function(){
        context.save();
        context.translate(this.x, this.y);
        context.clearRect(this.x, this.y,blockSizeX , blockSizeY);
        context.restore();
        
    }
    this.colided = function(){
        this.lifeLeft--;
        if(this.lifeLeft<=0){this.dies();}
        else{this.draw();}
        
        

    }
    
    
}

//les listeners
window.addEventListener('keydown',function(e){  
    
    key = e.keyCode;
    // console.log(e.keyCode);
    
    
    
    
    switch(e.keyCode){
        case 97: ship.move(-1);break;//pavé numérique 1
        case 87: ship.move(-1);break;//sans pavé numérique w
        case 99: ship.move(1);break;//pavé numérique 3
        case 67: ship.move(1);break;//sans pavé numérique c
        case 100: ship.move(-4);break;//pavé numérique 4
        case 81: ship.move(-4);break;//sans pavé numérique q
        case 102: ship.move(4);break;//pavé numérique 6
        case 68: ship.move(4);break;//sans pavé numérique d
        case 103: ship.move(-20);break;//pavé numérique 7
        case 65: ship.move(-20);break;//sans pavé numérique a
        case 105: ship.move(20);break;//pavé numérique 8
        case 69: ship.move(20);break;//sans pavé numérique e
        case  74: ball.erase();ball.x-=2; ball.draw();break;//controle bille pour test
        case  76: ball.erase();ball.x+=2; ball.draw();break;//controle bille pour test
        case  73: ball.erase();ball.y-=2; ball.draw();break;//controle bille pour test
        case  75: ball.erase();ball.y+=2; ball.draw();break;//controle bille pour test
        
        case 37: changeDirection(-2,0);break;//test change direction bille
        case 39: changeDirection(2,0);break;//test change direction bille
        case 40: changeDirection(0,2);break;//test change direction bille
        case 38: changeDirection(0,-2);break;//test change direction bille
        
        case 48: level = 0;init();break;//test change level
        case 49: level = 1;init();break;//test change level
        case 50: level = 2;init();break;//test change level
        case 51: level = 3;init();break;//test change level
        case 52: level = 4;init();break;//test change level
        case 53: level = 5;init();break;//test change level
        

        
        case  32: ;break;//space;
        case 13:
         
        if(pause == true){pause=false;run()}
        else{pause=true;};break;
        
        
    }
})
window.addEventListener('keyup',function(e){  
    
    
    clearInterval(timer);
    timer=null;


})
//test position
gameScreen.addEventListener('click',function(e){
    var pointX = e.clientX-screenX-12;
    var pointY = e.clientY-screenY-12;
    console.log('souris', pointX, pointY);
    var blockCol =  Math.floor((pointX)/blockSizeX);
    var blockLin =  Math.floor((pointY)/blockSizeY);
    console.log('block ',blockCol,blockLin);
    console.log(currentLevel[ blockCol][blockLin]);


})
// test largage de bille
gameScreen.addEventListener('dblclick',function(e){
    ball.erase();
    
    ball.x = e.clientX-screenX-12;
    ball.y = e.clientY-screenY-12;
    ball.draw();
    run();
})

// les fonctions

function rad(deg){ 
    return deg*pi/180;
}
// test changement direction bille
function changeDirection(dX,dY){
    switch(dX){
        case 0 : ball.speedY += dY;break;
        default : ball.speedX += dX;break;
        

    }
    console.log('ball speed:',ball.speedX,ball.speedY)
}


function init(){
    gameScreen.style.backgroundImage='url(images/back'+level+'.jpg)';
    context.clearRect(0, 0, gameScreen.width, gameScreen.height);
    // var ship = new Racket(5,18,56);
    // var ball = new Bullet((ship.x-4)*ballSize,(ship.y+1)*ballSize,'red',true);
    
    drawLevel(level);
    pause = true;
    run();
}

function run(){
    if (pause == true){return;}
   
    
    ship.draw();
    requestAnimationFrame(run);
    ball.draw();
    ball.erase();
    ball.x+=ball.speedX;
    ball.y+=ball.speedY;
    ball.draw();
    ball.checkCollision();
   // console.log('ball', ball.x, ball.y);

}

// draw level
function drawLevel(level){
    
       
    for ( var i = 0; i<blockCapacityX; i++){
        for( var j= 0 ; j<blockCapacityY; j++){
            var color = readColor(levelEditor[level][i][j]);
                if (color !=''){

            
                 currentLevel[i][j]= new Block(color,i*blockSizeX/2,j*blockSizeY/2);
                 currentLevel[i][j].draw();
                }
            }
        }
    }


function randColor(){
    return Math.floor (9*Math.random())+1;
}

function readColor(nmb){

 switch (nmb){
        case 1: return 'hotpink';
        case 2: return 'silver';
        case 3: return 'slategray';
        case 4: return 'goldenrod';
        case 5: return 'white';
        case 6: return 'blue';
        case 7: return 'crimson';
        case 8: return 'yellow';
        case 9: return 'skyblue';
       
        
        
        default: return '';

    }
}

init();

