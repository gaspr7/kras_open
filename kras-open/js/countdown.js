const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time < 10 ? `${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    if (timeDifference <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        mins.textContent = "00";
        secs.textContent = "00";
        clearInterval(timer); // Ustavimo interval, ko doseže ničlo
        return;
    }

    let calcSecs = Math.floor(timeDifference / 1000) % 60;
    let calcMins = Math.floor(timeDifference / 1000 / 60) % 60;
    let calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    
    

    days.textContent = formatTime(calcDays);
    hours.textContent = formatTime(calcHours);
    mins.textContent = formatTime(calcMins);
    secs.textContent = formatTime(calcSecs);

    
    
    //console.log(calDays, calHours, calMins, calSecs);
}

const countDown = (targetDate) => {
    updateCountDown(targetDate);
    timer = setInterval(() => updateCountDown(targetDate), 1000);

}


const targetDate = new Date("August 22 2025 09:00");
let timer;
countDown(targetDate);



// // Set the date we're counting down to
// var countDownDate = new Date("Aug 22, 2025 09:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);