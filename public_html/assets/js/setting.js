/* Get ball and paddles */
var ballsize = document.getElementById("ball");
var paddleleft = document.getElementById("paddleLeft");
var paddleright = document.getElementById("paddleRight");

/* Get id(input) for different SIZES of the ball */
var ball = document.getElementById("small");
var ballM = document.getElementById("medium");
var ballL = document.getElementById("big");

function ballS(){
    if(ball.checked){
        ballsize.style.r = "10";
    } else if(ballM.checked){
        ballsize.style.r = "25";
    } else if(ballL.checked){
        ballsize.style.r = "50";
    }
}

/* Get id(input) for different SPEED of the ball */
var slow = document.getElementById("slow");
var normalspeed = document.getElementById("speednormal");
var fast = document.getElementById("fast");
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var side = 1;



function Speed(){

}


/* Get id(input) for different LENGTH of the paddle */
var short = document.getElementById("short");
var paddleNormal = document.getElementById("paddlenormal");
var long = document.getElementById("long");

function paddleLength(){
    if(short.checked){
        paddleleft.style.height = "100px";
        paddleright.style.height = "100px";
        paddleHeight = 100;
    } else if(paddleNormal.checked){
        paddleleft.style.height = "200px";
        paddleright.style.height = "200px";
        paddleHeight = 200;
        
    } else if(long.checked){
        paddleleft.style.height = "300px";
        paddleright.style.height = "300px";
        paddleHeight = 300;
    }
}

function ResetSetting(){
    ballS();
    paddleLength();
}

document.getElementById("ball").style.cy = (topPositionOfBall);
document.getElementById("ball").style.cx = (leftPositionOfBall);