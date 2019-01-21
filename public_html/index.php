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

    <!--Howtoplay modal popup-->
    <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close" onclick="Close()"><i class="fas fa-times"></i></span>
              <h3>How To Play</h3>
              <p><i class="fas fa-circle p1"></i> Player 1 : UP( W ) / DOWN( S )</p>
              <p><i class="fas fa-circle p2"></i> Player 2 : UP( <i class="fas fa-long-arrow-alt-up"></i> ) 
                        / DOWN( <i class="fas fa-long-arrow-alt-down"></i> )</p>
              
          </div>
        </div>
    
    <!--Settings modal popup-->
        <div id="SettingModal" class="modal">
          <div class="modal-content">      

            <span class="close" onclick="Close()"><i class="fas fa-times"></i></span>
              <h3>Settings</h3><br/>
              <!--Setting form-->
              <form name="Settingform" class="Settingform">
                <!--Setting size of the ball-->
                <div class="Setting-field">
                    <div class="switch-title">Ball Size</div>
                    <input type="radio" id="small" name="ballsize" value="small" onclick="ballS()" />
                    <label for="small">Small</label>
   
                    <input type="radio" id="medium" name="ballsize" value="medium" onclick="ballS()" checked/>
                    <label for="medium">Medium</label>
                    
                     <input type="radio" id="big" name="ballsize" value="big" onclick="ballS()" />
                    <label for="big">Big</label>   
                </div>
                  
                <!--Setting speed of the ball--> 
                <div class="Setting-field">
                      <div class="switch-title">Ball Speed</div>
                      
                      <input type="radio" id="slow" name="ballspeed" value="slow" onclick="Speed()" />
                      <label for="slow">Slow</label>
                      
                      <input type="radio" id="speednormal" name="ballspeed" value="normal" onclick="Speed()" checked/>
                      <label for="speednormal">Normal</label>
                      
                      <input type="radio" id="fast" name="ballspeed" value="fast" onclick="Speed()" />
                      <label for="fast">Fast</label>
                </div>
                  
                <!--Setting size of the Paddle-->
                 <div class="Setting-field">
                      <div class="switch-title">Paddle Size</div>
                      
                      <input type="radio" id="short" name="paddlesize" value="slow" onclick="paddleLength()" />
                      <label for="short">Short</label>
                      
                      <input type="radio" id="paddlenormal" name="paddlesize" value="normal" onclick="paddleLength()" checked/>
                      <label for="paddlenormal">Medium</label>
                      
                      <input type="radio" id="long" name="paddlesize" value="long" onclick="paddleLength()" />
                      <label for="long">Long</label>
                  </div>
              
                  <button type="reset" id="resetsetting" onclick="ResetSetting()" value="Reset"> Reset <br/>Settings </button>
              </form>
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

                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
