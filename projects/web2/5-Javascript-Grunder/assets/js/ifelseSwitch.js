// alert("Hello 😎")
// alert("How😃")
// alert("Are🤨")
// alert("You?😮")

// Greater than
var age = 35;
if(age>=30) {
    console.log("Du får ta körkort");
} else {
    console.log("Du är för ung för att ta körkort");
}
// If something is equal to
// var lesson = "Math";
// if (lesson==="English"){
//     console.log(`We have ${lesson}`);
// } else if(lesson === "History") {
//     console.log(`We have ${lesson}`)
// } else if(lesson === "Biology") {
//     console.log(`We have ${lesson}`)
// } else {
//     console.log(`We have spare time`)
// }

var user = document.getElementById("userInput");
var subject = document.getElementById("showSubject");


user.addEventListener("keydown", function(event) {
    // console.log(event.key);
    if (event.key === "Enter") {
        if(user.value.indexOf("En") === 0 || user.value.indexOf("en") === 0) {
            console.log("We have English")
        } else if(user.value.indexOf("Bio") === 0 || user.value.indexOf("bio") === 0) {
            console.log("We have Biology")
        } else if(user.value.indexOf("His") === 0 || user.value.indexOf("sis") === 0) {
            console.log("We have History")
        } else {
            console.log("we have spare time")
        }
        subject.innerHTML = user.value;
        user.value = "";
    }
})
var showWeather = document.getElementById("showWeather");
var isSunny = Math.random();
if (isSunny <= .5 ){
    showWeather.innerHTML = "Put on some warm clothes today."
} else {
    showWeather.innerHTML = "Put on some shorts today."
};

var d = new Date()
var showTime = document.getElementById("time")

// showTime.innerHTML = `${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`
showTime.innerHTML = d.toString();

if (d.getHours () < 12) {
    console.log("Good morning.")
} else {
    console.log("Good Evening")
}

if(d.getHours() <14) {
    if(d.getMonth() > 9 || d.getMonth() < 2 ) {
        console.log("Go to sleep and wake up when it is spring.")
    } else {
        console.log("Good morning")
    }
} else {
    console.log("Good evening.")
}
// Switch statement

var grade = "A"
switch (grade) {
    case "A":
        console.log("Great job! You got an A!")
        break;

    case "B":
        console.log("Good job! You got a B!")
        break;

    case "C":
        console.log("Decent work, you got a C")
        break;
    case "D":
        console.log("You got a D, good!")
        break;

    case "E":
        console.log("You passed with  the grade E")
        break;

    case "F":
        console.log("You did not pass.")
        break;
    default:
        console.log("Unknown error has occured!")
}

var currentDay = document.getElementById("currentDay");

switch (d.getDay()) {
    case 0:
        currentDay.innerHTML = "Sunday"
        break;
     
    case 1:
        currentDay.innerHTML = "Monday"
        break;
     
    case 2:
        currentDay.innerHTML = "Tuesday"
        break;
     
    case 3:
        currentDay.innerHTML = "Wednesday"
        break;
     
    case 4:
        currentDay.innerHTML = "Thursday"
        break;
     
    case 5:
        currentDay.innerHTML = "Friday"
        break;
     
    case 6:
        currentDay.innerHTML = "Saturday"
        break;
    default:
        currentDay.innerHTML = "Error" 
}

// Control the square

var square = document.getElementById("square")

// square.style.backgroundColor="red"
// square.style.width = "100px"
// square.style.height = "150px"

square.setAttribute("style", 
"position: absolute; bottom: 263px; left: 615px; background-color: red;")

var innerWidth = window.innerWidth - 50;
var innerHeight = window.innerHeight - 50;

console.log(innerWidth)
console.log(innerHeight)

document.addEventListener("keydown", function(event){
    // event.key("")
    switch(event.key) {
        case "ArrowLeft":
            keyLeft();
            break;
        
        case "ArrowRight":
            keyRight();
            break;
        
        case "ArrowUp":
            keyUp()
            break;
        
        case "ArrowDown":
            keyDown();
            break;
        break;
    }
})

// Functions

function keyLeft(){
    var leftNumbers = square.style.left.replace("px", "");
    var left = Number(leftNumbers)
    var speed = 10;
    if (left > 0){
        square.style.left = `${left - speed}px`
    }
}

function keyUp(){
    var bottomNumbers = square.style.bottom.replace("px", "");
    var bottom = Number(bottomNumbers)
    var speed = 10;
    if (bottom < innerHeight){
        square.style.bottom = `${bottom + speed}px`
    }
}

function keyRight(){
    var leftNumbers = square.style.left.replace("px", "");
    var left = Number(leftNumbers)
    var speed = 10;
    if (left < innerWidth){
        square.style.left = `${left + speed}px`
    }
}

function keyDown(){
    var bottomNumbers = square.style.bottom.replace("px", "");
    var bottom = Number(bottomNumbers)
    var speed = 10;
    if (bottom > 0){
        square.style.bottom = `${bottom - speed}px`
    }
}