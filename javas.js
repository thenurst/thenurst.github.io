function clockes(){
    var display = document.getElementById("clock");
    var now = new Date();
    display.innerHTML = now.toLocaleTimeString();
    setTimeout(clockes, 1000);
    } 
window.onload = clockes;
            