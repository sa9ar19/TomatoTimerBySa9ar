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
pomodoro.addEventListener("click",()=>{
    timer.innerHTML="25 : 00"

    let focusTimer

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime();

        var startTime = TimeNow + 1501000;

        var myTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var time = startTime-currentTime;
        
            var minute = Math.floor((time % (1000*60*60))/(1000*60));
        
            var second = Math.floor((time % (1000*60))/(1000));
        
            timer.innerHTML = minute + " : " + second ;

            if(time < 1000){
                audio.play()
    
                clearInterval(myTimer)
    
                timer.innerHTML = "25 : 00"
            }
        },1000);
        
        reset.addEventListener("click",()=>{
            clearInterval(myTimer)
        
            timer.innerHTML = "25 : 00"
        })
    }) 
})

// ShortBreak Mode 
shortBreak.addEventListener("click",()=>{

    timer.innerHTML="5 : 00"

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime();
    
        var startTime = TimeNow + 301000;
    
        var shortTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var time = startTime-currentTime;
        
            var minute = Math.floor((time % (1000*60*60))/(1000*60));
        
            var second = Math.floor((time % (1000*60))/(1000));
        
            timer.innerHTML = minute + " : " + second ;

            if(time < 1000){
                audio.play()

                clearInterval(shortTimer)

                timer.innerHTML = "5 : 00"
        }
        },1000);

        reset.addEventListener("click",()=>{
            clearInterval(shortTimer)
        
            timer.innerHTML = "5 : 00"
        })
        
    })
})

//Long Break Mode
longBreak.addEventListener("click",()=>{
    timer.innerHTML="10 : 00"

    var longTimer

    start.addEventListener("click",()=>{

        TimeNow = new Date().getTime();
    
        var startTime = TimeNow + 601000;
    
        longTimer = setInterval(function(){
            var currentTime = new Date().getTime()
        
            var time= startTime-currentTime;
        
            var minute = Math.floor((time % (1000*60*60))/(1000*60));
        
            var second = Math.floor((time % (1000*60))/(1000));
            timer.innerHTML = minute + " : " + second ;

            if(time < 1000){
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


