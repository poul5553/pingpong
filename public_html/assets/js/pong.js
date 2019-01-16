
var paddleHeight = 100;
var paddleWidth = 10;
var ballRadius = 10;
var halfPaddleHeight = paddleHeight / 2;
var speedOfPaddle1 = 0;
var positionOfPaddle1 = 300;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 300;
var topPositionOfBall = window.innerHeight / 2;
var leftPositionOfBall = window.innerWidth / 2;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;
function startBall(dir = 0) {
	var topPositionOfBall = window.innerHeight / 2;
	var leftPositionOfBall = window.innerWidth / 2;
	if (dir == 0) {
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
	
	topSpeedOfBall = Math.random() * 2 + 3;
	leftSpeedOfBall = side * (Math.random() * 2 + 3);
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
		console.dir("left: " + leftPositionOfBall + " " + paddleWidth);
		if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			score2++;
			startBall(-1);
		}
	}
	if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
		console.dir("right: " + leftPositionOfBall + " " + paddleWidth + " " + ballRadius + " " + window.innerWidth);
		if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			score1++
			startBall(1);
		}
	}
	document.getElementById("paddleLeft").style.y = (positionOfPaddle1);
	document.getElementById("paddleRight").style.y = (positionOfPaddle2);
	document.getElementById("ball").style.cy = (topPositionOfBall);
	document.getElementById("ball").style.cx = (leftPositionOfBall);
	document.getElementById('playerScore').innerHTML = score1.toString();
	document.getElementById('playerTwo-score').innerHTML = score2.toString();
}, 1000/60);
