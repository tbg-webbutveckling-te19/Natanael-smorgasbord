var person1 = ['sid', 35, 'lycksele']
console.log(person1[2])

var person = {
    hometown: 'livelong',
    name: 'Sid',
    age: 35,
    friends: ["bob", "Dylan",'Ai<ee','Deezee'],
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
    }    
];
movie.forEach(function(post){
    postsOutput.innerHTML += `<br> <span class="postKey">Movie:</span> ${post.title} <br> <span class="postKey">Rating.</span>${post.rating} <br> <span class="postKey">Has watched:</span> ${if (post.watched}<br>`
})