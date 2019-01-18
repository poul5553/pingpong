var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var score1 = 0;
var score2 = 0;

var lpad = document.getElementById("paddleLeft");
var rpad = document.getElementById("paddleRight");
var baal = document.getElementById("ball");
lx = lpad.x.animVal.value;
ly = lpad.style.y;
lh = lpad.style.height;
lw = lpad.style.width;

rx = rpad.x.animVal.value;
ry = rpad.style.y;
rh = rpad.style.height;
rw = rpad.style.width;

bx = baal.style.cx;
by = baal.style.cy;
br = baal.r.animVal.value; 




var paddleHeightLeft = 100;
var paddleHeightRight = 100;
var paddleWidthLeft = 20;
var paddleWidthRight = 20;
var ballRadius = 10;
var halfPaddleHeightLeft = paddleHeightLeft / 2;
var halfPaddleHeightRight = paddleHeightRight / 2;

var positionOfPaddle1 = 300;

var positionOfPaddle2 = parseInt(rpad.style.y);
var topPositionOfBall = window.innerHeight / 2;
var leftPositionOfBall = window.innerWidth / 2;


function initial () {

var lpad = document.getElementById("paddleLeft");
var rpad = document.getElementById("paddleRight");
var baal = document.getElementById("ball");
lx = lpad.x.animVal.value;
ly = lpad.style.y;
lh = lpad.height;
lw = lpad.width;

rx = rpad.x.animVal.value;
ry = rpad.style.y;
rh = rpad.style.height;
rw = rpad.style.width;

bx = baal.style.cx;
by = baal.style.cy;
br = baal.r.animVal.value; 

console.dir(lx); 
console.dir(ly); 
console.dir(lh); 
console.dir(lw); 

console.dir(rx); 
console.dir(ry); 
console.dir(rh); 
console.dir(rw); 

console.dir(bx); 
console.dir(by); 
console.dir(br); 




var paddleHeightLeft = lpad.style.height;
var paddleHeightRight = rpad.style.height;
var paddleWidthLeft = lpad.style.width;
var paddleWidthRight = rpad.style.width;
var ballRadius = baal.r.animVal.value;
var halfPaddleHeightLeft = paddleHeightLeft / 2;
var halfPaddleHeightRight = paddleHeightRight / 2;

var positionOfPaddle1 = parseInt(lpad.style.y);
var speedOfPaddle2 = 0;
var positionOfPaddle2 = parseInt(rpad.style.y);
var topPositionOfBall = window.innerHeight / 2;
var leftPositionOfBall = window.innerWidth / 2;

}


function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
	  if ((new Date().getTime() - start) > milliseconds){
		break;
	  }
	}
  }

function startBall(dir = 0) {
	initial();

	
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

	initial();
	if (positionOfPaddle1 <= 0) {
		positionOfPaddle1 = 0;
	}
	if (positionOfPaddle2 <= 0) {
		positionOfPaddle2 = 0;
	}
	if (positionOfPaddle1 >= window.innerHeight - paddleHeightLeft) {
		positionOfPaddle1 = window.innerHeight - paddleHeightLeft;
	}
	if (positionOfPaddle2 > window.innerHeight - paddleHeightRight) {
		positionOfPaddle2 = window.innerHeight - paddleHeightRight;
	}
	if (topPositionOfBall <= 0 || topPositionOfBall >= window.innerHeight) {
		topSpeedOfBall = -topSpeedOfBall
	}
	
	if (leftPositionOfBall <= lx + paddleWidthLeft) {
		if (topPositionOfBall < lpad.offsetTop - ballRadius && topPositionOfBall > lpad.offsetTop - lpad.offsetHeight) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			score2++;
			sleep(1000); 
			startBall(-1);
		}	
	}
		// if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
		// 	leftSpeedOfBall = -leftSpeedOfBall;
		// } else {
		// 	score2++;
		// 	sleep(1000); 
		// 	startBall(-1);
		// }
	// }
	if (leftPositionOfBall >= rx - ballRadius - paddleWidthRight) {
		
		if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeightRight) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			score1++
			sleep(1000); 
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
