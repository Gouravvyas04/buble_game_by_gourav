var hit = 0
var timer = 60;
var score = 0;

function makeBubble()
{
    var clutter="";

for(var i = 1; i<=182;i++)
{
    var val = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${val}</div>`;
}

document.querySelector(".panel-bottom").innerHTML = clutter;
}

function runTimer()
{
    var timeval = setInterval(function(){
        if(timer>0)
        {
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        }

        else{
            clearInterval(timeval);
            document.querySelector(".panel-bottom").innerHTML = `<h1>Game Over! Your Score Is ${score} </h1>`;
        }
    },1000);
}

function hitvalue()
{
    // var hitva = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =  Math.floor(Math.random()*10);

    
    
    document.querySelector(".panel-bottom").addEventListener("click", (e) => {
        if(e.target.innerHTML == document.querySelector("#hitval").textContent){
            console.log(e.target.innerHTML)
            console.log("Sahi Value")
            scoreVal();
            hitvalue();
            makeBubble();
        } else {
            console.log(e.target.innerHTML)
            console.log("Galat VAlue")
        }
    });
}


function scoreVal()
{
    score = score + 10;
    document.querySelector("#scoreval").textContent = score;

}

hitvalue();
runTimer();
makeBubble();
