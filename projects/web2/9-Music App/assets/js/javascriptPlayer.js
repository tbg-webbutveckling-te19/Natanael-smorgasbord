// var btn1 = document.getElementsByClassName("btn1")[0]

var timer=document.querySelector(".timerr")
var a=0
var b=0
var c=0


var sound = new Howl({
    src: ['../assets/music/metallicaOne.mp3'],
    autoplay: true
})
musicId=sound.play()

var timer1
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var saveSeek
var havePlayed=false
var value1

$( function() {
    $("#progressBar").progressbar({
      value: 0
    });
  } );

btn1.addEventListener("click", function(){
    if (havePlayed===true){
        sound.play()
        timer1=setInterval(function () {
            a+=1
            if (a===10){
                b+=1
                a=0
            }
            if (b===6){
                c=1
                b=0
            }
            value1=(((c*60)+(b*10)+a)/447)*100
            timer.innerHTML = (`${c}:${b}${a}`)
            $( function() {
                $("#progressBar").progressbar({
                  value: value1
                });
              } );
        }, 1000);
        $(".btn2").toggleClass("btn2Show")
        $(".btn1").toggleClass("btn1Hide")
    }
    else if (havePlayed===false){
        sound.play()
        timer1=setInterval(function () {
            a+=1
            if (a===10){
                b+=1
                a=0
            }
            if (b===6){
                c=1
                b=0
            }
            timer.innerHTML = (`${c}:${b}${a}`)
            value1=((c*60+(b*10)+a)/447)*100
            $( function() {
                $("#progressBar").progressbar({
                  value: value1
                });
              } );
        }, 1000);
        havePlayed=true
        $(".btn2").toggleClass("btn2Show")
        $(".btn1").toggleClass("btn1Hide")
    }
})






btn2.addEventListener("click", function(){
    sound.pause()
    clearInterval(timer1)
    saveSeek=sound.seek(musicId)
    btnToggled=false
    $(".btn2").toggleClass("btn2Show")
    $(".btn1").toggleClass("btn1Hide")
})
