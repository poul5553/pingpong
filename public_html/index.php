<?php include("assets/include/header.php"); ?>



<!--<object class="board" type="image/svg+xml" data="assets/svg/Skitse3.svg">Your browser does not support SVGs</object>-->


    <section class="board">

        <h1 class="myH1">PINGPONG</h1>

        <div id="playSetting">
            <button class="how" id="how" onclick="howtoplay()">HOW TO PLAY</button>
            <button class="setting" id="setting" onclick="setting()">SETTINGS</button>
        </div>

        <div id="gameRecord">
            <div id="player1">
                <!-- <text class="score" id="playerOne" x="200" y="50">Player 1</text> -->
                <input type="text" name="PlayerOne" id="playerOne" class="score"  placeholder="Player 1">
                <text class="score" id="playerScore" >0</text>
            </div>
            <div id="startReset">
                <button class="start" id="start" onclick="startBall()">START</button>
                <button class="reset" id="reset" onclick="reset()">RESET</button>
            </div>
            <div id="player2">
                <text class="score" id="playerTwo-score" >0</text>
                <!-- <text class="score" id="playerTwo" x="200" y="50">Player 2</text> -->
                <input type="text" name="PlayerOne" id="playerOne" class="score"  placeholder="Player 2">

            </div>
        </div>





    <!--Howtoplay modal popup-->
    <div id="HowModal" class="modal">
          <div class="modal-content">
            <span class="close" onclick="Close()">X<i class="fas fa-times"></i></span>
              <h3>How To Play</h3>
              <p><i class="fas fa-circle p1"></i> Player 1 : UP( W ) / DOWN( S )</p>
              <p><i class="fas fa-circle p2"></i> Player 2 : UP( <i class="fas fa-long-arrow-alt-up"></i> )
                        / DOWN( <i class="fas fa-long-arrow-alt-down"></i> )</p>

          </div>
        </div>

    <!--Settings modal popup-->
    <div id="SettingModal" class="modal">
          <div class="modal-content">

            <span class="close" onclick="Close()">X<i class="fas fa-times"></i></span>
              <h3>Settings</h3><br/>
              <!--Setting form-->
              <form name="Settingform" class="Settingform">
                <!--Setting size of the ball-->
                <div class="Setting-field">
                    <div class="switch-title">Ball Size</div>
                    <input type="radio" id="small" name="ballsize" value="small" onclick="ballS(small)" />
                    <label for="small">Small</label>

                    <input type="radio" id="medium" name="ballsize" value="medium" onclick="ballS(medium)" checked/>
                    <label for="medium">Medium</label>

                     <input type="radio" id="big" name="ballsize" value="big" onclick="ballS(big)" />
                    <label for="big">Big</label>
                </div>

                <!--Setting speed of the ball-->
                <div class="Setting-field">
                      <div class="switch-title">Ball Speed</div>

                      <input type="radio" id="slow" name="ballspeed" value="slow" onclick="Speed(slow)" />
                      <label for="slow">Slow</label>

                      <input type="radio" id="speednormal" name="ballspeed" value="speednormal" onclick="Speed(speednormal)" checked/>
                      <label for="speednormal">Normal</label>

                      <input type="radio" id="fast" name="ballspeed" value="fast" onclick="Speed(fast)" />
                      <label for="fast">Fast</label>
                </div>

                <!--Setting size of the Paddle-->
                 <div class="Setting-field">
                      <div class="switch-title">Paddle Size</div>

                      <input type="radio" id="short" name="paddlesize" value="short" onclick="paddleLength(100)" />
                      <label for="short">Short</label>

                      <input type="radio" id="paddlenormal" name="paddlesize" value="paddlenormal" onclick="paddleLength(200)"  />
                      <label for="paddlenormal">Medium</label>

                      <input type="radio" id="long" name="paddlesize" value="long" onclick="paddleLength(300)" checked/>
                      <label for="long">Long</label>
                  </div>

                  <button type="reset" id="resetsetting" onclick="ResetSetting()"> Reset <br/>Settings </button>
              </form>
          </div>
        </div>


            <svg id="field" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 718" preserveAspectRatio="xMinYMin">

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      style="enable-background:new 0 0 250 250;" xml:space="preserve">
                    <style type="text/css">
                        #paddleLeft{fill:#21409A;stroke:#58595B;stroke-miterlimit:10;}
                    </style>
                    <g>
                        <rect y="120" x="20" id="paddleLeft" width="20" height="100"/>
                    </g>
                </svg>



                <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      style="enable-background:new 0 0 250 250;" xml:space="preserve">
                    <style type="text/css">
                        #paddleRight{fill:#ED1C24;stroke:#58595B;stroke-miterlimit:10;}
                    </style>
                    <g>
                        <rect x="1660" y="120" id="paddleRight" width="20" height="100"/>
                    </g>
                </svg>

                <!-- </object> -->

                <!-- <object id="bold"> -->

                <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      style="enable-background:new 0 0 250 250;" xml:space="preserve">
                <style type="text/css">
                    #ball
                </style>
                    <g>
                        <circle id="ball" r="10" cx="400" cy="160"/>
                    </g>
                </svg>
                <!--<circle id="ball" r="10" cx="400" cy="160"></circle>-->
            </svg>




    </section>

<?php include("assets/include/footer.php"); ?>
