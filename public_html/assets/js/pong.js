// Initialize variables to run the game (paddles, ball)
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var score1 = 0;
var score2 = 0;
var waitLScor = 0;
var waitRScor = 0; 

// Get size and position from DOM
var lpad = document.getElementById("paddleLeft");
var rpad = document.getElementById("paddleRight");
var baal = document.getElementById("ball");

var lBox = lpad.getBBox();
var rBox = rpad.getBBox();

// Setup position varibles 
var paddleHeightLeft = lBox.height;
var paddleHeightRight = rBox.height;
var paddleWidthLeft = lBox.width;
var paddleWidthRight =	rBox.width;
var innerPosPaddleLeft = lBox.x + lBox.width;
var innerPosPaddleRight = rBox.x; 
var outerPosPaddleLeft = lBox.x; 
var outerposPaddleRight = rBox.x - rBox.width;
var ballRadius = baal.r.animVal.value;
var halfPaddleHeightLeft = paddleHeightLeft / 2;
var halfPaddleHeightRight = paddleHeightRight / 2;

var topPositionOfPaddleLeft = (window.innerHeight / 2) - halfPaddleHeightLeft;
var topPositionOfPaddleRight = (window.innerHeight / 2) - halfPaddleHeightRight;

var topPositionOfBall = window.innerHeight / 2;
var leftPositionOfBall = window.innerWidth / 2;

// Start the ball (begin game)
function startBall(dir = 0) {

	topPositionOfBall = window.innerHeight / 2;
	leftPositionOfBall = window.innerWidth / 2;
	document.getElementById("ball").style.cy = topPositionOfBall;
	document.getElementById("ball").style.cx = leftPositionOfBall;

	
	if (dir == 0) {
		topPositionOfPaddleLeft = (window.innerHeight / 2) - halfPaddleHeightLeft;
		topPositionOfPaddleRight = (window.innerHeight / 2) - halfPaddleHeightRight;
		document.getElementById("paddleLeft").style.y = (topPositionOfPaddleLeft);
		document.getElementById("paddleRight").style.y = (topPositionOfPaddleRight);
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

	// Set speed of ball at the beginning
	if (score1 == 0 && score2 == 0) {
		topSpeedOfBall = Math.random() * 2 + 3;
		leftSpeedOfBall = side * (Math.random() * 2 + 3);
	
	}
	
	waitLScor = 0;
	waitRScor = 0; 
	
};
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
	if (topPositionOfPaddleLeft >= window.innerHeight - paddleHeightLeft) {
		topPositionOfPaddleLeft = window.innerHeight - paddleHeightLeft;
	}
	if (topPositionOfPaddleRight > window.innerHeight - paddleHeightRight) {
		topPositionOfPaddleRight = window.innerHeight - paddleHeightRight;
	}
	// Change direction at top / bottom of the game field
	if (topPositionOfBall - ballRadius <= 0 || topPositionOfBall + ballRadius >= window.innerHeight) {
		topSpeedOfBall = -topSpeedOfBall
	}
	
	// Test ballposition at the left side of the game field
	if (leftPositionOfBall - ballRadius <= innerPosPaddleLeft) {
		// Test hit on left paddle
		if (topPositionOfBall - ballRadius <= topPositionOfPaddleLeft + paddleHeightLeft && topPositionOfBall + ballRadius >= topPositionOfPaddleLeft && waitRScor == 0) {
			// hit: change ball direction
			leftSpeedOfBall = -leftSpeedOfBall;
		} else 
			// Set score switch for testing 
			waitRScor = 1;
			// no hit: score for opponent and start new ball 
			if (leftPositionOfBall < -10) {
				score2++;
				if (score2 >= 3) {
					gameStop();
				} else {
					startBall(-1);
				}
				
			}
			
	}


		// Test ballposition at the right side of the game field
		if (leftPositionOfBall + ballRadius >= innerPosPaddleRight) {
			// Test hit on left paddle
			if (topPositionOfBall - ballRadius < topPositionOfPaddleRight + paddleHeightRight && topPositionOfBall + ballRadius > topPositionOfPaddleRight && waitLScor == 0) {
				// hit: change ball direction
				leftSpeedOfBall = -leftSpeedOfBall;
			} else {
				// Set score switch for testing
				waitLScor = 1; 
				if (leftPositionOfBall > window.innerWidth + 10) {
					score1++;
					if (score1 >= 3) {
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
	if (score1 >= 3) {
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
