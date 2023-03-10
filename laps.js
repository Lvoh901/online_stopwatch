window.onload = function(){
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");

    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");
    console.log(minutes,tens,seconds);
    console.log(startBtn,stopBtn,resetBtn);

    let minutesSet=00;
    let secondsSet=00;
    let tensSet=00;
    let Interval;

//start button
    startBtn.onclick = function () {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10);
    };

//stop button
    stopBtn.onclick = function () {
        clearInterval(Interval);

        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `Lap <span>${minutes.innerHTML}:${seconds.innerHTML}. ${tens.innerHTML}</span>`;

        lap.appendChild(li);
    }

//reset button
    resetBtn.onclick = function (){
        clearInterval(Interval);
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        tens.innerHTML = tensSet;
        seconds.innerHTML = secondsSet;
        minutes.innerHTML = minutesSet;

        document.getElementById("laps").innerHTML = "";
    }

    //Create Start Timer function
    function startTimer () {
        tensSet++;
        if(tensSet < 9){
            tens.innerHTML = "0" + tensSet;
        }
        if(tensSet > 9) {
            tens.innerHTML = tensSet;
        }
        
        if(tensSet > 99){
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }

        if(secondsSet > 9){
            seconds.innerHTML=secondsSet
        }
        if(secondsSet == 60){
            minutesSet++;
            minutes.innerHTML="0" +minutesSet;
            secondsSet = 0;
        }

        if(minutesSet > 9){
            minutes.innerHTML = minutesSet;
        }
    }
};