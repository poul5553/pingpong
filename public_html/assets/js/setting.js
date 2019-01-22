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
        paddleleft.style.height = value + "px";
        paddleright.style.height = value + "px";
        paddleHeightLeft = value;
        paddleHeightRight = value;
}

function ResetSetting(){
    ballS(medium);
    paddleLength(long);
}
