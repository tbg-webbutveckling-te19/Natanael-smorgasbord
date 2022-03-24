
scoreGoal=-1

var player1 = document.querySelector("#isClickedP1")

var player2 = document.querySelector("#isClickedP2")

var score = document.querySelector("#score")

var inputScoreGoal= document.querySelector("#scoreGoal")

var playingTo = document.querySelector("#playingTo")

var result = document.querySelector("#result")

var resetBtn = document.querySelector("#resetBtn")



inputScoreGoal.addEventListener("keydown", function(e){
    if (e.key==='Enter'){
        scoreGoal=inputScoreGoal.value
        playingTo.innerHTML=(`Playing to ${scoreGoal}`)
        inputScoreGoal.value=""
    }
})

var score1 = 0
var score2 = 0
var scoreX=0


player1.addEventListener("click", function(){
    score1+=1
    score.innerHTML=(`Score: ${score1} - ${score2}`)
    if (score1>scoreGoal){
        score1=scoreX
    }
    if (score1 == scoreGoal){
        result.innerHTML=("Player 1 Won")
        score.innerHTML=(`Score: <span style="color: Green">${score1}</span> - <span style="color: Red">${score2}</span)`)
        scoreX=score1
    }
    
    if (scoreGoal ==-1){
        score.innerHTML=(`Score: 0-0`)
        result.innerHTML=""
    }
})

player2.addEventListener("click", function(){
    score2+=1
    score.innerHTML=(`Score: ${score1} - ${score2}`)
    if (score2>scoreGoal){
        score2=scoreX
    }
    if (score2 == scoreGoal || score2>scoreGoal){
        result.innerHTML=("Player 2 Won!")
        score.innerHTML=(`Score: <span style="color: Red">${score1}</span> - <span style="color: Green">${score2}</span)`)
        scoreX=score2
    }
    if (scoreGoal ==-1){
        score.innerHTML=(`Score: 0-0`)
        result.innerHTML=""
    }
})

resetBtn.addEventListener("click", function(){
    score1=0
    score2=0
    scoreGoal=-1
    scoreX=0
    score.innerHTML=(`Score: 0-0`)
    result.innerHTML=""
    playingTo.innerHTML="Playing to:"

})