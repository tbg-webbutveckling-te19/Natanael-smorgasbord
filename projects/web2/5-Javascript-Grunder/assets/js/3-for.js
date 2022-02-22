console.log("For loop started")
for (var i = 0; i<10; i++) {
    console.log(`count is ${i}`)
}
console.log("For loop ended")

for(var i = 0; i < 6; i+=2) {
    console.log(i);
}

var str = "Hello world!"

for(var i = 0; i < str.length; i++) {
    console.log(str[i])
}

var myArr = ["HTML", "CSS", "JS", 35, 18, true, false,];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);
}

for (var i = 0; i <= 20; i++) {
    if(i % 2 == 0){
        console.log(i)
    }
}


console.log("Exercise 3")
for (var i = -10; i < 20; i++) {
    console.log(i)
}

console.log("Exercise 4")
for (var i = 10; i <41; i++) {
    if(i % 2 == 0){
        console.log(i)
    }
}

console.log("Exercise 5")
for (var i = 300; i<334; i++) {
    if(i%2>0)
    {
        console.log(i)
    }
}


console.log("Exercise 6")

for (var i = 5; i<51; i++) {
    if(i%5==0 || i%3==0)
    {
        console.log(i)
    }
}

console.log("Exercise 7")



//Checks if a number is odd or even.
function checkIfEvenOrOdd(i) {
    if (i%2==0)
    {
        console.log("Even")
    }
    else if (i%2>0)
    {
        console.log("Odd")
    }
}

number=5
checkIfEvenOrOdd(number)

for (var i = 0; i<11; i++) {
    console.log(`${i} * 9 =` + i*9)
}

// Square with 5*5 stars
// Nested for loop

var squareOutput = document.getElementsByClassName("square")[0];

for(var i = 0; i < 5; i++) {
    for (var j =0; j < 7; j++) {
        squareOutput.innerHTML += ("* ")
    }
    squareOutput.innerHTML += ("</br>")
}

for(var i = 0; i < 11; i++) {
    for (var j =0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i*j} `)
    }
}

var choises = ["President", "Food", "Games" , "Candy", "Water", "Cola"]

for(var i = 0; i < choises.length; i++) {
        if(i==0){
            suffix="st"
        } else if (i==1){
            suffix="nd"
        } else if (i==2){
            suffix="rd"
        } else {
            suffix="th"
        }
        console.log(`My number ${i+1}${suffix} choise is ${choises[i]}`)
}