<?php include("assets/include/header.php"); ?>


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
                <button class="reset" id="reset" onclick="reset()">RESET</button>
            </div>
            <div id="player2">
                <text class="score" id="playerTwo-score" x="200" y="50">0</text>
                <text class="score" id="playerTwo" x="200" y="50">Player 2</text>

            </div>
        </div>  

   
    
        
            <svg id="field" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 718" preserveAspectRatio="xMinYMin">

                <rect id="paddleLeft" width="20" height="100" x="10" y="120"></rect>
                <rect id="paddleRight" width="20" height="100" x="1520" y="120"></rect>

                <circle id="ball" r="10" cx="400" cy="160"></circle>
            </svg>
    


    </section>

<?php include("assets/include/footer.php"); ?>
