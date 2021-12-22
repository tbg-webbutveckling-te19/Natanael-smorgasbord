var count = 10;
console.log("****While loop started****")
while (count < 10 ) {
    console.log(`Count is ${count}`)
    count ++
}
console.log("****While loop ended****")

// do while

var counter = 0;

console.log(`Do while started`)
do {
    console.log(`Counter is ${counter}`)
    counter++;
} while (counter < 5) {
    console.log(`Do while ended`)
}

// While playing card is not equal to Hearts - Continue to draw a new card
var btnDraw = document.getElementById("draw");
var congratsText = document.getElementById("congratsText")
btnDraw.addEventListener("click", function() {
    // Lista ut vilken färg det är
    do {
        var cardSuit = Math.floor(Math.random()*4)
    // Lista ut vilken valör det är
        var cardValue = Math.floor((Math.random()*14)+1)
        if(cardValue === 1) {
            cardValue +=1;
        } else if (cardValue === 11) {
            cardValue = "Jack"
        } else if (cardValue === 12) {
            cardValue = "Queen"
        } else if (cardValue === 13) {
            cardValue = "King"
        } else if (cardValue === 14) {
            cardValue = "Ace"
        }
    
    // Beroende på färg ska något göras
        switch(cardSuit) {
            case 0: 
                console.log(`You drew a ${cardValue} of Hearts`);
                break;
            
            case 1: 
                console.log(`You drew a ${cardValue} of Spades`);
                break;
            
            case 2:
                console.log(`You drew a ${cardValue} of Clubs`);
                break;
            
            case 3: 
                console.log(`You drew a ${cardValue} of Diamonds`);
                break;
            
            default:
                console.log("No such card in this deck")
        }
    } while(cardSuit!=0) // Sålänge som färgen inte är hjärter ska korten fortsätta dras 
    {
        console.log(`Coungratulations! You drew a ${cardValue} of Hearts`)
        congratsText.setAttribute("src", "https://cdn.pixabay.com/photo/2012/04/13/20/38/hearts-33564_1280.png")
    }

})