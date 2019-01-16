<?php include("assets/include/header.php"); ?>



<!--<object class="board" type="image/svg+xml" data="assets/svg/Skitse3.svg">Your browser does not support SVGs</object>-->


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

   
    
        
            <svg id="field" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1540 718" preserveAspectRatio="xMinYMin">

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      style="enable-background:new 0 0 250 250;" xml:space="preserve">
                    <style type="text/css">
                        #paddleLeft{fill:#21409A;stroke:#58595B;stroke-miterlimit:10;}
                    </style>
                    <g>
                        <rect y="120" id="paddleLeft" width="20" height="100"/>
                    </g>
                </svg>



                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      style="enable-background:new 0 0 250 250;" xml:space="preserve">
                    <style type="text/css">
                        #paddleRight{fill:#ED1C24;stroke:#58595B;stroke-miterlimit:10;}
                    </style>
                    <g>
                        <rect x="1520" id="paddleRight" width="20" height="100"/>
                    </g>
                </svg>

                <circle id="ball" r="10" cx="400" cy="160"></circle>
            </svg>
    


    </section>

<?php include("assets/include/footer.php"); ?>
