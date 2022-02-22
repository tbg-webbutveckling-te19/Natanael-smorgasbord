// alert("con")
// Higher order function
var showTime = document.getElementById("showTime");


// start button

var start =  document.getElementById("startTime")

// stop button


//global var for clear intervall

var myInterval;

//

var stopp = document.getElementById("stopTime")

//
function myTimer() {
    var d = new Date();
    showTime.innerHTML = d.toLocaleTimeString();    
}


start.addEventListener("click", function(){
    myInterval =setInterval(myTimer, 1000)
})

function stopTimer() {
    clearInterval(myInterval);
}

stopp.addEventListener("click", function(){
    stopTimer()
})

// Write a function named tellFortune that:

// takes 4 arguments: number of children, partner's name, geographic location, job title.

// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Call that function 3 times with 3 different values for the arguments.

// Make an array for each argument and insert a few values in each

// When a button is clicked randomize a value from each array and call the function with random values each time



// Solution:
var children = ["5", "2", "3", "4"]
var partner = ["Michelle" , "Hillary" , "Obama" , "Trump"] 
var geo = ["Lycksele" , "Washington" , "New York" , "London"]
var job = ["Webdeveloper" , "Programmer" , "Carpenter" , "Fishermen"]

var buttonFortune = document.getElementById("buttonFortune")
var showFortune = document.getElementById("showFortune")

function randomN(wList){
    return wList[Math.round(Math.random()*wList.length)]
}

function tellFortune(children, partner, geo, job){
    showFortune.innerHTML += (`You will have ${randomN(children)} children, be married to ${randomN(partner)} , live in ${randomN(geo)} and work as a ${randomN(job)} |\n`)
}

buttonFortune.addEventListener("click", function(){
    tellFortune(children, partner, geo, job)
})
