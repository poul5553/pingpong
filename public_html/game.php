<?php
include("assets/include/header.php");
?>

<section class="board">

    <h1 class="myH1">PINGPONG</h1>

    <div id="playSetting">
        <button class="how" id="how">HOW TO PLAY</button>
        <button class="setting" id="setting">SETTINGS</button>
    </div>

    <div id="gameRecord">
        <div id="player1">
            <text class="score" id="playerOne" x="200" y="50">Player 1</text>
            <text class="score" id="playerScore" x="200" y="50">0</text>
        </div>
        <div id="startReset">
            <button class="start" id="start">START</button>
            <button class="reset" id="reset">RESET</button>
        </div>
        <div id="player2">
            <text class="score" id="playerTwo-score" x="200" y="50">0</text>
            <text class="score" id="playerTwo" x="200" y="50">Player 2</text>

        </div>
    </div>

<div id="paddleLeft"  style="position:absolute;left:0px;top:460px;width:10px;height:150px;background-color:black;">
</div>
<div id="ball"  style="position:absolute;left:820px;top:510px;width:25px;height:25px;background-color:red;border-radius:50%;">
</div>
<div id="paddleRight"  style="position:absolute;right:0px;top:460px;width:10px;height:150px;background-color:black;">
</div>

</section>

<?php
include("assets/include/footer.php");
?>
