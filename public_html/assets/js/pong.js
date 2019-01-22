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
	console.log(positionOfPaddle1);
}
window.setInterval(function show() {
	positionOfPaddle1 += speedOfPaddle1;
	positionOfPaddle2 += speedOfPaddle2;
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;


	if (positionOfPaddle1 <= 0) {
		positionOfPaddle1 = 0;
	}
	if (positionOfPaddle2 <= 0) {
		positionOfPaddle2 = 0;
	}
	if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
		positionOfPaddle1 = window.innerHeight - paddleHeight;
	}
	if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
		positionOfPaddle2 = window.innerHeight - paddleHeight;
	}
	if (topPositionOfBall <= 0 || topPositionOfBall >= window.innerHeight) {
		topSpeedOfBall = -topSpeedOfBall
	}
	if (leftPositionOfBall <= paddleWidth) {
		if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			score2++;
			startBall();
		}
	}
	if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
		if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			score1++
			startBall();
		}
	}
	document.getElementById("paddleLeft").style.y = (positionOfPaddle1);
	document.getElementById("paddleRight").style.y = (positionOfPaddle2);
	document.getElementById("ball").style.cy = (topPositionOfBall);
	document.getElementById("ball").style.cx = (leftPositionOfBall);
	document.getElementById('playerScore').innerHTML = score1.toString();
	document.getElementById('playerTwo-score').innerHTML = score2.toString();
}, 1000/60);
