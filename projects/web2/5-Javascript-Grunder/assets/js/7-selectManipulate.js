// select an element and then manipulate it

// select
// var h1 = document.querySelector("h1")

// //manipulate
// h1.style.color = "red";

// // toggle background color

// // select
// var bg = document.getElementsByTagName("body")[0];
// var isGreen = false;
// var interval = setInterval(function(){
//     if(isGreen){
//         bg.style.backgroundColor="rgb(85, 37, 161)";
//     } else {
//         bg.style.backgroundColor="purple"
//     }
//     isGreen = !isGreen;
// }, 2000)

// clear intervall

// bg.addEventListener("dblclick", function(){
//     clearInterval(interval)
// })

// select by ID
var element = document.getElementById("highlight");
console.log(element);
console.dir(element);

// select by className
var elements = document.getElementsByClassName("bolded"); //nodelist
console.log(elements);
console.dir(elements);

// select by tagName
var eles = document.getElementsByTagName("li"); //nodelist
console.log(eles)
console.dir(eles)

// select by querySelector
// Takes a string argument adn returns teh first element that
//  matches a given CSS-style selector
var queryTag = document.querySelector(".bolded") // only return the first element
console.log(queryTag)
console.dir(queryTag)

// select by querySelectorAll
// Tkaes a string argument adn returns a list of elements that
// matches a given CSS-style selector 
var queryTagAll = document.querySelectorAll("h1") //nodelist
console.log(queryTagAll)
console.dir(queryTagAll)

var pTag1 = document.querySelector("#first")
var pTag2 = document.querySelector(".special")
var pTag3 = document.getElementsByTagName("p")[0]
var pTag4 = document.getElementById("first")
var pTag5 = document.getElementsByClassName("special")[0]
var pTag6 = document.querySelector("body+p")
console.log("----")

console.log(pTag1)
console.log(pTag2)
console.log(pTag3)
console.log(pTag4)
console.log(pTag5)
console.log(pTag6)

// select
var element = document.querySelector("#highlight")
// manipulate with WET code
// element.style.color = "blue"
// element.style.border = "10px solid black"
// element.style.fontSize = "55px"
// element.style.backgroundColor = "#eee"

element.classList.add("someClass")

// select

var tag = document.querySelector("h1")
// add a classs
tag.classList.add("anotherClass")

// remove a class
tag.classList.remove("anotherClass")

// toggle a class
tag.classList.toggle("anotherClass")

// manipulate text and content
// select

var pEle = document.querySelector(".test")
pEle.textContent="This is an <strong>awesome</strong> paragraph"
pEle.innerHTML="This is an <strong>awesome</strong> paragraph"

// chain methods
document.getElementsByTagName("h1")[0].textContent="Used by chaining method"
document.getElementsByTagName("h1")[0].innerHTML="<i>Used by chaining method</i>"

// manipulating attributes

var link = document.querySelector("a")

// get attr

console.log(link.getAttribute("href"))

// change htef attr

link.setAttribute("href", "http://google.com")

// change img source
var img = document.getElementsByTagName("img")[0]

img.setAttribute("src", "assets/images/separationOfConcerns.jpg")
img.setAttribute("alt", "sepOfConcerns")
img.setAttribute("title", "SOC")

// Making things interactive with events

// select
var btn = document.querySelector("button")
// manipulate
btn.addEventListener("click", ()=>{
    document.querySelector("button + p").innerHTML="yay ive been clicked;"
})

// select
var list = document.querySelectorAll("li") //nodelist

// manipulate
// loop through all the list items and add an event listener
for(var i = 0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        // this.style.textDecoration = "line-through"
        this.classList.toggle("todo")
    })
}



