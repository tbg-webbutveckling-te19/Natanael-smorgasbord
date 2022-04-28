
var day = document.getElementsByClassName("day")[0]
var month = document.getElementsByClassName("month")[0]
var year = document.getElementsByClassName("year")[0]
var time = document.getElementById("time");
var btn1 = document.getElementsByClassName("btnDesign")[0]
var btn2 = document.getElementsByClassName("btnDesign")[1]
var btn3 = document.getElementsByClassName("btnDesign")[2]
var btn4 = document.getElementsByClassName("btnDesign")[3]
var bodyS = document.getElementById("body")

var today = new Date();
var date1 =today.getDate();
day.innerHTML=date1+"-"
var date2= today.getMonth()
month.innerHTML="-"+date2+1
var date3= today.getFullYear()
year.innerHTML="-"+date3


function dateTimer(){
    var d = new Date()
    time.innerHTML = d.toLocaleTimeString();    
    setInterval(dateTimer,1000)
}

dateTimer()
bodyS.addEventListener("keydown", function(event) {
    if (event.key=="D" || event.key=="d") {
        if (btn1.classList.contains("btnDesignPressed")){
            btn1.classList.remove("btnDesignPressed")
            day.classList.remove("addVis")
        }
        else if (btn1.classList.contains("btnDesignPressed")==false){
            btn1.classList.add("btnDesignPressed")
            day.classList.add("addVis")
            day.innerHTML=date1
        }
    }
    if (event.key=="M" || event.key=="m") {
        if (btn2.classList.contains("btnDesignPressed")){
            btn2.classList.remove("btnDesignPressed")
            month.classList.remove("addVis")
        }
        else if (btn2.classList.contains("btnDesignPressed")==false){
            btn2.classList.add("btnDesignPressed")
            month.classList.add("addVis")
        }
    }
    if (event.key=="Y" || event.key=="y") {
        if (btn3.classList.contains("btnDesignPressed")){
            btn3.classList.remove("btnDesignPressed")
            year.classList.remove("addVis")
        }
        else if (btn3.classList.contains("btnDesignPressed")==false){
            btn3.classList.add("btnDesignPressed")
            year.classList.add("addVis")
        }
    }
    if (event.key=="W" || event.key=="w") {
        if (btn4.classList.contains("btnDesignPressed")){
            btn4.classList.remove("btnDesignPressed")
        }
        else if (btn4.classList.contains("btnDesignPressed")==false){
            btn4.classList.add("btnDesignPressed")
        }
    }
})