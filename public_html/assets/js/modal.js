var modal = document.getElementById("myModal");
var settingmodal = document.getElementById("SettingModal");

function reset(){
   //location.reload();
    window.location.reload(false);
}

function howtoplay() {   
    modal.style.display = "block";
}

function setting(){
    settingmodal.style.display = "block";
}

function Close(){
    //mymodal.classList.add("modalclose"); 
    modal.style.display = "none";
    settingmodal.style.display = "none";
    
}
