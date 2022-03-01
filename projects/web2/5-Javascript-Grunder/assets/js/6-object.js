var person1 = ['sid', 35, 'lycksele']
console.log(person1[2])

var person = {
    hometown: 'livelong',
    name: 'Sid',
    age: 35,
    friends: ["bob", "Dylan",'Aidee','Deezee'],
    isFriendly: true,
    birthday: function() {
        this.age++
        return this.age
    }
}

person.friends.forEach(function(friend){
    console.log(friend)
})

// Blog post
// 1. Create an array of posts where each index is an object
var postsOutput = document.getElementById("posts")
var posts = [
    {
        author: "Fjodor",
        title: "Crime and Punishment",
        comments: ["Yeah dude totally!","Psychopath!", "zzzzz"]
    },
    {
        author: "Numero dos",
        titel: "Cities of the world",
        comments: ["Big citites we have", "No more cities", "A city"]
    }
];

posts.forEach(function(post){
    postsOutput.innerHTML += `<br> <span class="postKey">Author:</span> ${post.author} <br> <span class="postKey">Title.</span>${post.title} <br> <span class="postKey">Comments:</span> ${post.comments}<br>`
})

var personInfo = document.getElementById("person")
personInfo.innerHTML = `Name: ${person.name} <br> Age: ${person.age} <br> City: ${person.hometown}`

var input = document.getElementById("updateCity")
input.addEventListener("keydown", function(e){
    if (e.key === 'Enter') {
        personInfo.innerHTML =
         `Name: ${person.name} <br> 
         Age: ${person.age} <br> 
         City: ${person.hometown = input.value}`;
         input.value ="";
    }
    
})

var btnCelebrate = document.getElementById("celebrate")
btnCelebrate.addEventListener("click", () => {
    person.birthday();
    personInfo.innerHTML =
    `Name: ${person.name} <br> 
    Age: ${person.age} <br> 
    City: ${person.hometown}`;
})


/*
***************************************
Create your own code - movieDB
***************************************
*/
 
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/
var movies= document.getElementById("movies")
var movie = [
    {
        title: "Frozen",
        rating: 4,
        watched: true
    },
    {
        title: "Django",
        rating: 5,
        watched: false
    },
    {
        title: "Frozen",
        rating: 4,
        watched: true
    },
    {
        title: "Shawshank",
        rating: 2,
        watched: false
    }    
];

movie.forEach(function(post){
    if (post.watched===true){
        movies.innerHTML += `<br> <span class="postKey">You have seen :</span> ${post.title} - <br> <span class="postKey">Rating.</span>${post.rating}`
    }
    else
    movies.innerHTML += `<br> <span class="postKey">You have not seen :</span> ${post.title} - <br> <span class="postKey">Rating.</span>${post.rating}`
})

var div = document.getElementById("animals")
var animalBtn = document.getElementsByClassName("animalButton")
var aDog = document.getElementById("audioDog")
var aWolf = document.getElementById("audioWolf")
var aCow = document.getElementById("audioCow")
var aCat = document.getElementById("audioCat")
var animalSound = {
    dog: function(){
        div.innerHTML='Woof'
        aDog.play()
    },
    
    cat: function(){
        div.innerHTML='Meow'
        aCat.play()
    },
    
    cow: function(){
        div.innerHTML='Moo'
        aCow.play()
    },

    wolf: function(){
        div.innerHTML='Auoo'
        aWolf.play()
    },
}

for(var i = 0; i < animalBtn.length; i++){
    animalBtn[i].addEventListener("click", function(){
        switch (this.innerHTML){
            case 'Dog':{
                animalSound.dog();
                break;
            }
            case 'Cat':{
                animalSound.cat();
                break;
            }
            case 'Cow':{
                animalSound.cow();
                break;
            }
            case 'Wolf':{
                animalSound.wolf();
                break;
            }
        }
    })
}


// var animalSounds = document.getElementById("animalSounds")
// animalSounds.innerHTML = `<br> Dog: ${animalSound.dog} <br> Wolf: ${animalSound.wolf} <br> Cet: ${animalSound.cat} <br> Cow: ${animalSound.cow} `

var friendList=["Adam","Emil"]

var inputFriend = document.getElementById("updateFriend")
inputFriend.addEventListener("keydown", function(e){
    if (e.key === 'Enter') {
        friendList.push(inputFriend.value)
        inputFriend.value=""
    }
})

var btnRemoveFriend = document.getElementById("removeFriend")
btnRemoveFriend.addEventListener("click", () => {
    friendList.pop()
})
