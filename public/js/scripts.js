// confirm("the ejs is working if you can see this")
// function WIP (msg) {
//     alert(msg);
// }

// function accountIntent (msg) {
//     alert(msg)
// }

// function getStartedIntent (msg) {
//     alert(msg)
// }

// function indexIntent (msg) {
//     alert(msg)
// }

const seconds = 0;
// Convert that into seconds and store in a global variable.
const interval = 0 ;
// OG
// function pomodoro(mins) {
//    seconds = mins*60 || 0;     
//    interval = setInterval(function() {
 
//         seconds--;
//         if(!seconds){
//              clearInterval(interval); 
//              alert("🚨 Time is up 😎. I hope you had fun, wish you could share ");
//         }
//    },1000)
// }

pomodoro((mins) => {
    // Get the total number of minutes.
    seconds = mins*60 || 0;  
    // Create a function that executes every second using setInterval.
    interval = setInterval(function() {
        for (let seconds = mins*60 || 0; seconds < interval.length; seconds--) {
            // Decrement the seconds by “1” for each second.
            if(!seconds){
            // clean up the function
            console.warn("the pomodoro function has been cleaned up")
            return clearInterval(interval);
             
            }
        //   Check if the seconds reaches 0. If true then alert the user and clear the timer.
            alert("🚨 Time is up 😎. I hope you had fun, wish you could share ");
        }
    }, 1000) // first you wait 1 second --> 1000 milliseconds = 1 second
})

// Hamburger Menu
// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});