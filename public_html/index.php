<?php include("assets/include/header.php"); ?>

<style>
body {
  width: 1200px;
  margin: auto;
}
</style>
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



        <div id="field">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid">
                <rect id="background" width="800" height="100"></rect>

                <rect id="paddleLeft" class="paddeLeft" width="20" height="100" x="10" y="200"></rect>
                <rect id="paddleRight" width="20" height="100" x="770" y="200"></rect>

                <circle id="ball" r="10" cx="400" cy="250"></circle>
            </svg>
        </div>


    </section>

<?php include("assets/include/footer.php"); ?>
