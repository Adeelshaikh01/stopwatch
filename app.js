var counter;
var miliSeconds = 0;
var seconds = 0;

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn")
var clearBtn = document.getElementById("clearBtn")
var display = document.getElementById("miliValue")
var secs = document.getElementById("secs")

function counterStart() {
    startBtn.disabled  = true
    stopBtn.disabled  = false
    clearBtn.disabled  = false

    counter = setInterval(function () {
        miliSeconds += 1
        if(miliSeconds <= 9){
            display.innerText = "0"+ miliSeconds;
        }
        else{
            display.innerText = miliSeconds;
        }

        if (miliSeconds > 99) {
            secs.innerText = seconds += 1;
            miliSeconds = 0;
          }
          
    }, 10)
}

function stopCounter(){
    startBtn.disabled  = false
    stopBtn.disabled  = true
    clearInterval(counter)
}

function counterReset(){
    startBtn.disabled  = false
    stopBtn.disabled  = true
    clearBtn.disabled  = true
    
    miliSeconds = 0;
    seconds = 0;
    clearInterval(counter)
    display.innerText = "00";
    secs.innerText = "0";
}
