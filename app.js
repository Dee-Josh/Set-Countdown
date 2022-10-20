const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const sec = document.getElementById("seconds")

const time = document.getElementById("time");
const date = document.getElementById("date");
const check = document.getElementById("save-btn");

const inputOne = document.getElementById("input-one");
const inputTwo = document.getElementById("input-two");

const nameEvent = document.getElementById("nameEvent");




// Set the date we're counting down 


check.addEventListener('click', ()=>{

    if (inputOne.value === "" || inputTwo.value === "" || date.value === "" || time.value === "")  {
        alert("All fields are required")
    }else{


        let newDateValue = date.value;
        let newTimeValue = time.value;

        window.localStorage.setItem("name", inputOne.value);
        window.localStorage.setItem("event", inputTwo.value);

        window.localStorage.setItem("time", newTimeValue);
        window.localStorage.setItem("date", newDateValue);


        const theName = localStorage.getItem('name');
        const theEvent = localStorage.getItem('event');


        const deeTime = localStorage.getItem('time');
        const deeDate = localStorage.getItem('date');

        
        nameEvent.textContent = `${theName}'s ${theEvent} is in:`
    
    
        let theTime = `${deeDate} ${deeTime}:00`;
    
        var countDownDate = new Date(theTime).getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
          // Get today's date and time
          var now = new Date().getTime();
        
          // Find the distance between now and the count down date
          var distance = countDownDate - now;
        
          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result in the element with id="demo"
        //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";
            // day.innerHTML = days;
            if(String(days).length < 2) {
                day.innerHTML = `0${days}`;
            }else{
                day.innerHTML = days;
            }
        
            if (String(hours).length < 2) {
                hour.textContent = `0${hours}`
            }else{
                hour.textContent = hours
            }
        
            if (String(minutes).length < 2) {
                minute.textContent = `0${minutes}`
            }else{
                minute.textContent = minutes
            }
        
            if (String(seconds).length < 2) {
                sec.textContent = `0${seconds}`
            }else{
                sec.textContent = seconds
            }
        
        
        
        
        
        
        //   If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
          }
        }, 1000);
    }  

    location.reload();
})

window.onload = function(){

    if (localStorage.getItem('name') !== null) {
            
        const theName = localStorage.getItem('name');
        const theEvent = localStorage.getItem('event');


        const deeTime = localStorage.getItem('time');
        const deeDate = localStorage.getItem('date');

        
        nameEvent.textContent = `${theName}'s ${theEvent} is in:`


        let theTime = `${deeDate} ${deeTime}:00`;

        var countDownDate = new Date(theTime).getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
        
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="demo"
        //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";
            // day.innerHTML = days;
            if(String(days).length < 2) {
                day.innerHTML = `0${days}`;
            }else{
                day.innerHTML = days;
            }
        
            if (String(hours).length < 2) {
                hour.textContent = `0${hours}`
            }else{
                hour.textContent = hours
            }
        
            if (String(minutes).length < 2) {
                minute.textContent = `0${minutes}`
            }else{
                minute.textContent = minutes
            }
        
            if (String(seconds).length < 2) {
                sec.textContent = `0${seconds}`
            }else{
                sec.textContent = seconds
            }
        })   
    }
   
}