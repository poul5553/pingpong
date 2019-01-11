var score = 0;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        moveBarPlayerOne("up");
    }
    else if (e.keyCode == '40') {
        moveBarPlayerOne("down");
    }
    else if (e.keyCode == '87') {
       moveBarPlayerTwo("up");
    }
    else if (e.keyCode == '83') {
       moveBarPlayerTwo("down");
    }

}

function moveBarPlayerOne(value) {
  if (value == "up") {
    console.log(value);
    //flyt bar op
    //document.getElementById('paddleLeft').style.y = '20';
    MoveBar("up", "right");
  }
  else {
    console.log(value);
    //flyt bar ned
    MoveBar("down", "right");
  }
}

function moveBarPlayerTwo(value) {
  if (value == "up") {
    console.log(value);
    //flyt bar op
    //document.getElementById('paddleLeft').style.y = '20';
    MoveBar("up", "left");
  }
  else {
    console.log(value);
    //flyt bar ned
    MoveBar("down", "left");
  }
}

function MoveBar(value, side) {
  if (side == "left") {
    var bar = document.getElementById("paddleLeft");
  }
  else {
    var bar = document.getElementById("paddleRight");
  }

  if (bar.style.y == "0px") {
    bar.style.y = 200;
  }

  if (bar.style.y == "") {
    bar.style.y = 200;
  }


  var y = 1;


  if (value == "up") {
    if (bar.style.y > 0) {
    var y = parseInt(bar.style.y);
    bar.style.y = y - 7;
    console.log(bar.style.y);
  }
}
  else if (value == "down") {
    if (bar.style.y < 389) {
    var y = parseInt(bar.style.y);
    bar.style.y = y + 7;
    console.log(bar.style.y);
  }
}
}


function ball() {
  var ball = document.getElementById("ball");
  if (ball.style.cx == "") {
    ball.style.cx = 400;
  }
  var cx = parseInt(ball.style.cx);

    if (ball.style.cx < 800) {
      ball.style.cx = cx + 2;
}
  else {
    playerPoint();
    ball.style.cx = 400;
  }
}
setInterval(ball, 10);
playerOnePoints = 0;

function playerPoint() {
  playerOnePoints++;
  var scoreOne = document.getElementById("playerScore");
  scoreOne.innerHTML = playerOnePoints;
}
