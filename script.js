//Remember to deal with the problem of having the space key restarting the game.

let displayBall = document.getElementById('TennisBall');
let startText = document.getElementById('IntroText');
let playingBall = document.getElementById('TBforPlaying');
let tennisCourt = document.getElementById('TennisCourt');
let tennisRacket = document.getElementById('Racket');
let startButton = document.getElementById('startbutton');
let redRacket = document.getElementById('RedRacket')
let passClear = document.getElementById('pword');
let userClear = document.getElementById('uname');
let skibidi = document.getElementById('Yewsername');
let ohioRizzler = document.getElementById('Pantsword');
let beforeGame = document.getElementById('BeforeGame');
const tennisCanvas = document.getElementById('tenniscanvas');
const ctx = tennisCanvas.getContext("2d");
tennisCanvas.style.display = 'none';
var cat = 'The code works!';
function validatePass(password){
    if (password.length < 8){
        console.log('This is too short of a password. Please enter again.');
        return false;
    }
    let matchFind = false;
    let matchNum = false;
    let matchFound = false;

    password.split('').forEach(cymbal =>{
        if (isCapital(cymbal)){
            matchFind = true
        }
        if (isNumber(cymbal)){
            matchNum = true
        }
        if (isSymbol(cymbal)){
            matchFound = true
        }
    })

    if (matchFind === true && matchFound === true && matchNum === true){
        console.log(cat);
        return true;
    }
    console.log(matchFind,'hi');
    console.log(matchFound,'ho');
    console.log(matchNum,'hee');
    return false;
}
function isSymbol(char){
    let listy = ['@','!','#','$','%','^','&','*','(',')']
    let matchFound = false
     listy.forEach(symbol => {
        if (char === symbol){
            matchFound = true
        }
     })
    return matchFound
}

function isCapital(char){
    let listy = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let matchFind = false
     listy.forEach(letter => {
        if (char === letter){
            matchFind = true
        }
     })
    return matchFind
}

function isNumber(char){
    let listy = ['1','2','3','4','5','6','7','8','9','0']
    let matchNum = false
     listy.forEach(numberi => {
        if (char === numberi){
            matchNum = true
        }
     })
    return matchNum;
}
beforeGame.style.display = 'none';
function submit(){
    let a = passClear.value;
    validatePass(a);
    
    let b = userClear.value;
    
    console.log(a);
    displayBall.style.display = 'none';
    playingBall.style.display = 'none';
    tennisRacket.style.display = 'none';
    startButton.style.display = 'none';
    passClear.style.display = 'none';
    redRacket.style.display = 'none';
    userClear.style.display = 'none';
    startText.style.display = 'none';
    skibidi.style.display = 'none';
    ohioRizzler.style.display = 'none';
    tennisCourt.style.display = 'none';
    tennisCanvas.style.display = 'block';
    ctx.drawImage(tennisCourt, 1,1,1300,500);
    ctx.drawImage(playingBall, 625,225,50,50);
    draw(blueRac);
    draw(redRac);
    beforeGame.style.display = 'block';
}
startButton.addEventListener('click',function(event){
    event.preventDefault();
    submit();
})
document.addEventListener('keydown',function(event){
    if (event.key === ' '){
        keyPress.space = true;
        spaceStarts();

    }if (event.key === 'ArrowUp'){
        keyPress.arrowUp = true;
    }if (event.key === 'ArrowDown'){
        keyPress.arrowDown = true;
    }if (event.key === 'w' || event.key === 'W'){
        keyPress.wW = true;
    }if (event.key === 's' || event.key === 'S'){
        keyPress.sS = true;
    }
})

document.addEventListener('keyup',function(event){
    if (event.key === ' '){
        keyPress.space = false;
    }if (event.key === 'ArrowUp'){
        keyPress.arrowUp = false;
    }if (event.key === 'ArrowDown'){
        keyPress.arrowDown = false;
    }if (event.key === 'w' || event.key === 'W'){
        keyPress.wW = false;
    }if (event.key === 's' || event.key === 'S'){
        keyPress.sS = false;
    }
})

/* document.addEventListener('mousemove',function(event){
    var rekt = tennisCanvas.getBoundingClientRect();
    console.log(event.clientX - rekt.left,'this is related ot the x coorinatde');
    console.log(event.clientY - rekt.top,'related y');
    // (626, 109) and (640, 382) for the blue racket hit
    // (660, 114) and (655, 382) for the red racket hit)
})
*/ 
let keyPress = {
    arrowDown: false,
    arrowUp: false,
    wW: false,
    sS: false,
    space: false
};

let blueRac = {
    x:1200,
    y:225,
    width:75,
    height:115,
    image: tennisRacket,
    move(direction){
        if (direction === 'up'){
            this.y-=5;
        }
        if (direction === 'down'){
            this.y+=5;
        }
    }
}


let redRac = {
    x:20,
    y:225,
    width:75,
    height:115,
    image: redRacket,
    move(direction){
        if (direction === 'up'){
            this.y-=5;
        }
        if (direction === 'down'){
            this.y+=5;
        }
    }
}

let tenBal = {
    x:625,
    y:225,
    image: playingBall,
    width:50,
    height:50,
    velocityX:0,
    velocityY:0

}

function clearScreen(){
    ctx.clearRect(0,0, tennisCanvas.width,tennisCanvas.height);
    ctx.drawImage(tennisCourt, 1,1,1300,500);
    draw(redRac);
    //draw(tenBal);
    draw(blueRac);
    if (keyPress.arrowDown){
        blueRac.move('down');
        draw(blueRac);
    }
    if (keyPress.arrowUp){
        blueRac.move('up');
        draw(blueRac);
    }
    if (keyPress.wW){
        redRac.move('up');
        draw(redRac);
    }
    if (keyPress.sS){
        redRac.move('down');
        draw(redRac);
    }
    tenBal.x+=tenBal.velocityX;
    tenBal.y+=tenBal.velocityY;
    ctx.drawImage(playingBall,tenBal.x,tenBal.y,50,50);
    racketContact();
    ballIsOut();
}
function draw(sprite){
    ctx.drawImage(sprite.image,sprite.x,sprite.y,sprite.width,sprite.height);
}
clearScreenInterval = setInterval(clearScreen,60);
function spaceStarts(){
    // ball is going to move.
    ballInterval = setInterval(moveBall,10);
    //clearScreenInterval = setInterval(clearScreen,60)
    tenBal.velocityX=16;
    tenBal.velocityY=2;
}

function moveBall(){
    //figure out movement
}
// The filters: >=8 characters, 1 number, 1 capital letter, 1 symbol. e.g = Qwerty12#
var lastHit;
var redCounter = 0;
var blueCounter=0;

function racketContact(){
    var dx = blueRac.x-tenBal.x;
    var dy = blueRac.y-tenBal.y;
    var findis1 = Math.sqrt(dx*dx+dy*dy);
    
    if (findis1 < 55){
        tenBal.velocityX /= -1;
        tenBal.velocityY *= (-1/4)*dy;
        lastHit = 'b'
    }
    var dw = redRac.x-tenBal.x;
    var dz = redRac.y-tenBal.y;
    var findis2 = Math.sqrt(dw*dw+dz*dz);
    
    if (findis2 < 70){
        tenBal.velocityX /= -1;
        tenBal.velocityY *= (-1/4)*dz;
        lastHit = 'r'
    }
}
 // (626, 109) and (640, 382) for the blue racket hit
    // (660, 114) and (655, 382) for the red racket hit)
function ballIsOut(){
    if (tenBal.y < 60 || tenBal.y > 440){
        if (lastHit === 'b' && tenBal.x < 625){
            redCounter += 1
            redCounter += 0
            console.log(redCounter,'man c')
        }
        else if (lastHit === 'b'){
            blueCounter +=1 
            blueCounter += 0
            console.log(blueCounter,'man u')
        }

        else if (lastHit === 'r' && tenBal.x >= 625){
            blueCounter += 1
            redCounter+=0
            console.log(blueCounter,'man u')
        }
        
        else if (lastHit === 'r'){
            redCounter +=1 
            redCounter += 0
            console.log(redCounter,'man c')
        }
        tenBal.x = 625;
        tenBal.y=200;
        tenBal.velocityX = 0;
        tenBal.velocityY = 0;
        if (blueCounter === 7){
            console.log('Red Wins');
            tennisCanvas.style.display = 'none';
            beforeGame.innerHTML = 'Red Player Won!';
            beforeGame.style.fontSize = '240px';
        }

        else if (redCounter === 7){
            console.log('Blue Wins');
            tennisCanvas.style.display = 'none';
            beforeGame.innerHTML = 'Blue Player Won!';
            beforeGame.style.fontSize = '240px';
        }   
    }
    if (tenBal.x > blueRac.x){
        blueCounter += 1
        blueCounter+=0
        tenBal.x = 625;
        tenBal.y=200;
        tenBal.velocityX = 0;
        tenBal.velocityY = 0;
        console.log(blueCounter,'man u')
    }
    else if (tenBal.x < redRac.x){
        redCounter += 1
        redCounter+=0
        tenBal.x = 625;
        tenBal.y=200;
        tenBal.velocityX = 0;
        tenBal.velocityY = 0;
        console.log(redCounter,'man c')
    }
}