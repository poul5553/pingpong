var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var score1 = 0;
var score2 = 0;

// initial(); 

var lpad = document.getElementById("paddleLeft");
var rpad = document.getElementById("paddleRight");
var baal = document.getElementById("ball");

var lBox = lpad.getBBox();
lx = lBox.x;
ly = lBox.y; 
lh = lBox.height;
lw = lBox.width;

var rBox = rpad.getBBox();
rx = rBox.x;
ry = rBox.y;
rh = rBox.height;
rw = rBox.width;

bx = baal.style.cx;
by = baal.style.cy;
br = baal.r.animVal.value; 

var paddleHeightLeft = lh;
var paddleHeightRight = rh;
var paddleWidthLeft = lw;
var paddleWidthRight = rw;
var ballRadius = br;
var halfPaddleHeightLeft = paddleHeightLeft / 2;
var halfPaddleHeightRight = paddleHeightRight / 2;

var positionOfPaddle1 = (window.innerHeight / 2) - halfPaddleHeightLeft;
var positionOfPaddle2 = (window.innerHeight / 2) - halfPaddleHeightRight;

var topPositionOfBall = window.innerHeight / 2;
var leftPositionOfBall = window.innerWidth / 2;


// function initial (sw = 0) {

// var lpad = document.getElementById("paddleLeft");
// var rpad = document.getElementById("paddleRight");
// var baal = document.getElementById("ball");

// var lBox = lpad.getBBox();
// lx = lBox.x;
// ly = lBox.y; 
// lh = lBox.height;
// lw = lBox.width;

// var rBox = rpad.getBBox();
// rx = rBox.x;
// ry = rBox.y;
// rh = rBox.height;
// rw = rBox.width;

// bx = baal.style.cx;
// by = baal.style.cy;
// br = baal.r.animVal.value; 

// console.dir(lx); 
// console.dir(ly); 
// console.dir(lh); 
// console.dir(lw); 

// console.dir(rx); 
// console.dir(ry); 
// console.dir(rh); 
// console.dir(rw); 

// console.dir(bx); 
// console.dir(by); 
// console.dir(br); 



// if (sw = 0) {
// 	var paddleHeightLeft = lh;
// 	var paddleHeightRight = rh;
// 	var paddleWidthLeft = lw;
// 	var paddleWidthRight = rw;
// 	var ballRadius = baal.r.animVal.value;
// 	var halfPaddleHeightLeft = paddleHeightLeft / 2;
// 	var halfPaddleHeightRight = paddleHeightRight / 2;
	
// 	var positionOfPaddle1 = (window.innerHeight / 2) - halfPaddleHeightLeft;
// 	var positionOfPaddle2 = (window.innerHeight / 2) - halfPaddleHeightLeft;
	
// 	var speedOfPaddle1 = 0;
// 	var speedOfPaddle2 = 0;
	
// 	var topPositionOfBall = window.innerHeight / 2;
// 	var leftPositionOfBall = window.innerWidth / 2;
// }


// }


function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
	  if ((new Date().getTime() - start) > milliseconds){
		break;
	  }
	}
  }

function startBall(dir = 0) {

	var topPositionOfBall = window.innerHeight / 2;
	var leftPositionOfBall = window.innerWidth / 2;
	document.getElementById("ball").style.cy = topPositionOfBall;
	document.getElementById("ball").style.cx = leftPositionOfBall;

	
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

	

	if (score1 < 4 && score2 < 4) {
		console.dir ("sbal "); 
		console.dir(topSpeedOfBall);
		console.dir(leftSpeedOfBall);
		console.dir(topPositionOfBall);
		console.dir(leftPositionOfBall);
	}
	
	
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

	var lpad = document.getElementById("paddleLeft");
	var rpad = document.getElementById("paddleRight");
	// var baal = document.getElementById("ball");
	
	var lBox = lpad.getBBox();
	lx = lBox.x;
	ly = lBox.y; 
	lh = lBox.height;
	lw = lBox.width;
	
	var rBox = rpad.getBBox();
	rx = rBox.x;
	ry = rBox.y;
	rh = rBox.height;
	rw = rBox.width;
	
	// bx = baal.style.cx;
	// if (bx <= 0) {
	// 	bx = leftPositionOfBall;
	// }
	// by = baal.style.cy;
	// if (by < 0) {
	// 	by = topPositionOfBall;
	// }
	bx = leftPositionOfBall;
	by = topPositionOfBall;
	// br = baal.r.animVal.value; 
	
	// console.dir(lx); 
	// console.dir(ly); 
	// console.dir(lh); 
	// console.dir(lw); 
	
	// console.dir(rx); 
	// console.dir(ry); 
	// console.dir(rh); 
	// console.dir(rw); 
	
	// console.dir(bx); 
	// console.dir(by); 
	// console.dir(br); 
	
	if (positionOfPaddle1 <= 0) {
		positionOfPaddle1 = 0;
	}
	if (positionOfPaddle2 <= 0) {
		positionOfPaddle2 = 0;
	}
	if (positionOfPaddle1 >= window.innerHeight - lh) {
		positionOfPaddle1 = window.innerHeight - lh;
	}
	if (positionOfPaddle2 > window.innerHeight - rh) {
		positionOfPaddle2 = window.innerHeight - rh;
	}
	if (by + br <= 0 || by + br >= window.innerHeight) {
		topSpeedOfBall = -topSpeedOfBall
	}
	
	if ( bx - br <= lx + lw) {
		
		// lOffsetTop = ly;
		if (by - br < ly + lh && by + br > ly) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			
			startBall(-1);
			score2++;
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
	if (leftPositionOfBall >= rx - (ballRadius * 2) - rw) {
		rOffsetTop = ry;
		if (topPositionOfBall - ballRadius < rOffsetTop && topPositionOfBall + ballRadius > ry + rh) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			
			startBall(1);
			score1++;
		}
	}

	// if (score1 > 9 || score2 > 9) {
	// 	alert("Game over"); 
	// 	return; 
	// }
	document.getElementById("paddleLeft").style.y = (positionOfPaddle1);
	document.getElementById("paddleRight").style.y = (positionOfPaddle2);
	document.getElementById("ball").style.cy = (topPositionOfBall);
	document.getElementById("ball").style.cx = (leftPositionOfBall);
	document.getElementById('playerScore').innerHTML = score1.toString();
	document.getElementById('playerTwo-score').innerHTML = score2.toString();
}, 1000/60);
