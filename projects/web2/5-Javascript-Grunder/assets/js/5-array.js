var rndmArray = ["Adam", 35, false]

var makeArray = []
var Makearray = new Array();

console.log(rndmArray[2])
console.log(rndmArray.length)

//push () Adds an item

console.log("push")

var colors = ["Red", "Blue", "Green"]

colors.push("Yellow")
console.log(colors)

// pop() Removes the last index and returns it

console.log(colors.pop())
console.log(colors)

// shift() Removes first index and returns it
console.log("shift")

console.log(colors.shift())
console.log(colors)

// unshift()

console.log("unshift")

console.log(colors.unshift("oragne"))
console.log(colors)

// indexOf()
console.log("indexOf")

console.log(colors.indexOf("oragne"))

// slice

//Use slice() to copy the 2nd and 3rd fruit

var fruits =["Banna", "s", "f", "t"]
var citrus = fruits.slice(1,3)
console.log(citrus)

console.log("Slice")
console.log(colors.slice(0,1))

// reverse

console.log("reverse")
console.log(colors)
colors.reverse()
console.log(colors)

// Array with groups
var groups = [["A", "B", "C"], [], []]
console.log(groups[0][0])

var games = ["Zelda", "Megaman", "Iceclimbers", "Mario"];


for(var i = 0;i <games.length; i++) {
    console.log(games[i])
}

games.forEach(function(game){
    console.log(game);
})

var countries = ["Sweden", "Schweiz", "Finland", "Germany", "Iceland", "Norway"]

countries.forEach(function(country){
    console.log(country)
})


var cars = ["Audi", "Mercedes", "Volvo", "BMW"]

cars.forEach(function(car){
    console.log(car)
})


var nmbrs =[-3,-8,-2]
function max(list){
    biggestNmbr=-Infinity
    list.forEach(function(count){
        if (biggestNmbr<count){
            biggestNmbr=count
        }
    })
    return biggestNmbr
}
console.log(max(nmbrs))