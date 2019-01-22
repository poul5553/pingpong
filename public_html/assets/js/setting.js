/* Get id for the ball */
var ballsize = document.getElementById("ball");

/*function to change the size of the ball*/
function ballS(value){
    if(value == small){
        ballsize.style.r = "10";
    } else if( value == medium){
        ballsize.style.r = "25";
    } else if( value == big){
        ballsize.style.r = "50";
    }
}

/* Get both game paddles */
var paddleleft = document.getElementById("paddleLeft");
var paddleright = document.getElementById("paddleRight");

/*Function to change the length of paddles*/
function paddleLength(value){
    if(value == short){
        paddleleft.style.height = "100px";
        paddleright.style.height = "100px";
        paddleHeight = 100;
    } else if(value == paddlenormal){
        paddleleft.style.height = "200px";
        paddleright.style.height = "200px";
        paddleHeight = 200;
        
    } else if(value == long){
        paddleleft.style.height = "300px";
        paddleright.style.height = "300px";
        paddleHeight = 300;
    }
}

function ResetSetting(){
    ballS(medium);
    paddleLength(long);
}


