// variables to select the html elements
var start = document.querySelector(".start");

var stoper = document.querySelector(".stop");

var reset = document.querySelector(".reset");

var timer = document.getElementById("time");

var audio = document.querySelector(".audio");

var pomodoro = document.getElementById("pomodoro");

var shortBreak = document.getElementById("shortBreak")

var longBreak = document.getElementById("longBreak")

// Focus Mode
pomodoro.addEventListener("click",function remove(){
    timer.innerHTML="25 : 00"

    pomodoro.style.backgroundColor = "#ff0000"

    shortBreak.style.backgroundColor = "#00ffaa"

    longBreak.style.backgroundColor = "#00ffaa"

    let focusTimer

    var myTimer

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime()

        var startTime = TimeNow + 1501000

        myTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var pomodorotime = startTime-currentTime;
        
            var minute = Math.floor((pomodorotime % (1000*60*60))/(1000*60));
        
            var second = Math.floor((pomodorotime % (1000*60))/(1000));
        
            timer.innerHTML = minute + " : " + second ;

            if (pomodorotime<1000){
                audio.play()
                
                clearInterval(myTimer)
    
                timer.innerHTML = "25 : 00"
            }

            })
        },1000);
        reset.addEventListener("click",()=>{
            clearInterval(myTimer)
    
            removeEventListener("click", remove())
        
            timer.innerHTML = "25 : 00"
        })
    }) 
    

// ShortBreak Mode 
shortBreak.addEventListener("click",()=>{

    // pomodoro.removeEventListener("click", remove())

    pomodoro.style.backgroundColor = "#00ffaa"

    longBreak.style.backgroundColor = "#00ffaa"

    shortBreak.style.backgroundColor = "#ff0000"

    timer.innerHTML="5 : 00"

    let shortTimer

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime();
    
        var startTime = TimeNow + 301000;
    
        shortTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var shorttime = startTime-currentTime;
        
            var minute = Math.floor((shorttime % (1000*60*60))/(1000*60));
        
            var second = Math.floor((shorttime % (1000*60))/(1000));
        
            timer.innerHTML = minute + " : " + second ;

            if(shorttime < 1000){
                audio.play()

                clearInterval(shortTimer)
        }
        },1000);
        
        timer.innerHTML = "5 : 00"


        reset.addEventListener("click",()=>{
            clearInterval(shortTimer)
        
            timer.innerHTML = "5 : 00"
        })
        
    })
})

//Long Break Mode
longBreak.addEventListener("click",()=>{
    timer.innerHTML="10 : 00"

    longBreak.style.backgroundColor = "#ff0000"

    pomodoro.style.backgroundColor = "#00ffaa"

    shortBreak.style.backgroundColor = "#00ffaa"

    var longTimer

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime();
    
        var startTime = TimeNow + 601000;
    
        longTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var longtime= startTime-currentTime;
        
            var minute = Math.floor((longtime % (1000*60*60))/(1000*60));
        
            var second = Math.floor((longtime % (1000*60))/(1000));
            timer.innerHTML = minute + " : " + second ;

            if(longtime < 1000){
                audio.play()
    
                clearInterval(longTimer)
    
                timer.innerHTML = "10 : 00"
            }
        },1000);

        reset.addEventListener("click",()=>{
            clearInterval(longTimer)
        
            timer.innerHTML = "10 : 00"
        })

        stop(longTimer)
    })
})

// stopping Function
function stop(timer){
    stoper.addEventListener("click",()=>{
        clearInterval(timer)
    });
}


