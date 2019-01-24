// Initialize variables to run the game (paddles, ball)
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var score1 = 0;
var score2 = 0;
var waitLScor = 0;
var waitRScor = 0;
var setLeftSpeed = 5;

// Get size and position from DOM
var lpad = document.getElementById("paddleLeft");
var rpad = document.getElementById("paddleRight");
var baal = document.getElementById("ball");
var bane = document.getElementById("field"); 
var box = bane.getAttribute('viewBox');
var boxH = bane.viewBox.baseVal.height;
var boxW = bane.viewBox.baseVal.width;  
var lBox = lpad.getBBox();
var rBox = rpad.getBBox();
var ballsize = document.getElementById("ball");
ballsize.style.r = 25;
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
paddleleft.style.height = "300px";
paddleright.style.height = "300px";
paddleHeightLeft = 300;
paddleHeightRight = 300;
placePaddles ();

/*Function to change the length of paddles*/
function paddleLength(value){
        paddleleft.style.height = value + "px";
        paddleright.style.height = value + "px";
        paddleHeightLeft = value;
        paddleHeightRight = value;
        placePaddles ();
}

function ResetSetting(){
    ballS(medium);
    paddleLength(long);
}

function placePaddles () {
    var bane = document.getElementById("field"); 
    var box = bane.getAttribute('viewBox');
    var boxH = bane.viewBox.baseVal.height;  

    var halfPaddleHeightLeft = paddleHeightLeft / 2;
    var halfPaddleHeightRight = paddleHeightRight / 2;
    var topPositionOfPaddleLeft = (boxH / 2) - halfPaddleHeightLeft;
    var topPositionOfPaddleRight = (boxH / 2) - halfPaddleHeightRight;
    document.getElementById("paddleLeft").style.y = (topPositionOfPaddleLeft);
	document.getElementById("paddleRight").style.y = (topPositionOfPaddleRight);

}

// Setup position varibles
var paddleHeightLeft = parseInt(lBox.y);
var paddleHeightRight = parseInt(rBox.y);
console.log (lBox.y);
console.log (paddleHeightLeft);
var paddleWidthLeft = lBox.width;
var paddleWidthRight =	rBox.width;
var innerPosPaddleLeft = lBox.x + lBox.width;
var innerPosPaddleRight = rBox.x;
var outerPosPaddleLeft = lBox.x;
var outerposPaddleRight = rBox.x - rBox.width;
var ballRadius = baal.style.r;
var ballRadiusN = parseInt(ballRadius,10); 
var halfPaddleHeightLeft = paddleHeightLeft / 2;
var halfPaddleHeightRight = paddleHeightRight / 2;

var topPositionOfPaddleLeft = (boxH / 2) - halfPaddleHeightLeft;
var topPositionOfPaddleRight = (boxH / 2) - halfPaddleHeightRight;

var topPositionOfBall = boxH / 2;
var leftPositionOfBall = boxW / 2;

// Start the ball (begin game)
function startBall(dir = 0) {

	topPositionOfBall = boxH / 2;
	leftPositionOfBall = boxW / 2;
	document.getElementById("ball").style.cy = topPositionOfBall;
	document.getElementById("ball").style.cx = leftPositionOfBall;


	if (dir == 0) {
		topPositionOfPaddleLeft = (boxH / 2) - halfPaddleHeightLeft;
		topPositionOfPaddleRight = (boxH / 2) - halfPaddleHeightRight;
		document.getElementById("paddleLeft").style.y = (topPositionOfPaddleLeft);
		document.getElementById("paddleRight").style.y = (topPositionOfPaddleRight);
		baal = document.getElementById("ball");
		ballRadius = baal.style.r;
		ballRadiusN = parseInt(ballRadius,10);
		
		if (Math.random() < 0.5) {
			var side = 1
		} else {
			var side = -1
		}
	} else if (dir > 0) {
		side = 1;
	} else {
		side = -1;
	}

	if (Math.random() < 0.5) {
		var topDir = 1
	} else {
		var topDir = -1
	}




	// Set speed of ball at the beginning
	if (score1 == 0 && score2 == 0) {
		leftSpeedOfBall = setLeftSpeed;
		leftSpeedOfBall = leftSpeedOfBall * side;
	}
	topSpeedOfBall = setLeftSpeed + (Math.random() * 2);
	topSpeedOfBall = topSpeedOfBall * topDir;

	waitLScor = 0;
	waitRScor = 0;

};

function Speed(value){
    if( value == slow){
        setLeftSpeed = 3;
    } else if(value == speednormal){
        setLeftSpeed = 5;
    } else if (value == fast){
        setLeftSpeed = 8;
    }
}

document.addEventListener('keydown', function (e) {
     if (e.keyCode == 87 || e.which == 87) { // W key
      speedOfPaddle1 = -10;
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      speedOfPaddle1 = 10;
     }
     if (e.keyCode == 38 || e.which == 38) { // up arrow
      speedOfPaddle2 = -10;
     }
     if (e.keyCode == 40 || e.which == 40) { // down arrow
      speedOfPaddle2 = 10;
     }
}, false);
console.log("keydown");
document.addEventListener('keyup', function (e) {
	if (e.keyCode == 87 || e.which == 87) {
		speedOfPaddle1 = 0;
	}
	if (e.keyCode == 83 || e.which == 83) {
		speedOfPaddle1 = 0;
	}
	if (e.keyCode == 38 || e.which == 38) {
		speedOfPaddle2 = 0;
	}
	if (e.keyCode == 40 || e.which == 40) {
		speedOfPaddle2 = 0;
	}
}, false);
function print() {
	console.log(topPositionOfPaddleLeft);
}
var repeatCount = setInterval(show, 1000 / 60);


function show() {
	// Move paddles and ball
	
	topPositionOfPaddleLeft += speedOfPaddle1;
	topPositionOfPaddleRight += speedOfPaddle2;
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;
	

	// Keep paddles inside the game field
	if (topPositionOfPaddleLeft <= 0) {
		topPositionOfPaddleLeft = 0;
	}
	if (topPositionOfPaddleRight <= 0) {
		topPositionOfPaddleRight = 0;
	}
	if (topPositionOfPaddleLeft >= boxH - paddleHeightLeft) {
		topPositionOfPaddleLeft = boxH - paddleHeightLeft;
	}
	if (topPositionOfPaddleRight > boxH - paddleHeightRight) {
		topPositionOfPaddleRight = boxH - paddleHeightRight;
	}
	// Change direction at top / bottom of the game field
	if (topPositionOfBall - ballRadiusN <= 0 || topPositionOfBall + ballRadiusN >= boxH) {
		topSpeedOfBall = -topSpeedOfBall;
		
	}

	// Test ballposition at the left side of the game field
	if (leftPositionOfBall - ballRadiusN <= innerPosPaddleLeft) {
		// Test hit on left paddle
		if (topPositionOfBall - ballRadiusN <= topPositionOfPaddleLeft + paddleHeightLeft && topPositionOfBall + ballRadiusN >= topPositionOfPaddleLeft && waitRScor == 0) {
			// hit: change ball direction
			leftSpeedOfBall = -leftSpeedOfBall;
		} else
			// Set score switch for testing
			waitRScor = 1;
			// no hit: score for opponent and start new ball
			if (leftPositionOfBall < 0-ballRadiusN) {
				score2++;
				if (score2 >= 10) {
					gameStop();
				} else {
					startBall(-1);
				}

			}

	}


		// Test ballposition at the right side of the game field
		if (leftPositionOfBall + ballRadiusN >= innerPosPaddleRight) {
			// Test hit on left paddle
			if (topPositionOfBall - ballRadiusN < topPositionOfPaddleRight + paddleHeightRight && topPositionOfBall + ballRadiusN > topPositionOfPaddleRight && waitLScor == 0) {
				// hit: change ball direction
				leftSpeedOfBall = -leftSpeedOfBall;
			} else {
				// Set score switch for testing
				console.dir ("rigth bounce " + leftPositionOfBall + " " + ballRadiusN + " " + boxW);
				waitLScor = 1;
				if (leftPositionOfBall > boxW + ballRadiusN) {
					score1++;
					if (score1 >= 10) {
						gameStop();
					} else {
						startBall(1);
					}

				}

			}
		}


	// Update positions for paddles, ball and score for both players
	document.getElementById("paddleLeft").style.y = (topPositionOfPaddleLeft);
	document.getElementById("paddleRight").style.y = (topPositionOfPaddleRight);
	document.getElementById("ball").style.cy = (topPositionOfBall);
	document.getElementById("ball").style.cx = (leftPositionOfBall);
	document.getElementById('playerScore').innerHTML = score1.toString();
	document.getElementById('playerTwo-score').innerHTML = score2.toString();
};


function gameStop() {

	clearInterval(repeatCount);
	if (score1 >= 10) {
		var winnerModal = document.getElementById("field");
		winnerModal.classList.add("winnerBlue");
		winnerModal.style.display = "block";

	} else {
		var winnerModal = document.getElementById("field");
		winnerModal.classList.add("winnerRed");
		winnerModal.style.display = "block";
	}

}

//simple reset function
function reset(){
	//location.reload();
	 window.location.reload(false);
 }
