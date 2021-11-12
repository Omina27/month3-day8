var natijaP = document.getElementById("timeMan")
var natijaP1 = document.getElementById("timeMan1")
var natijaV = document.getElementById("timeCycle")
var natijaV1 = document.getElementById("timeCycle1")
var natijaM = document.getElementById("timeCar")
var natijaM1 = document.getElementById("timeCar1")
var natijaS = document.getElementById("timePlane")
var natijaS1 = document.getElementById("timePlane1")

var enterNum = document.getElementById("amount")
var submit = document.getElementById("submit")


form.addEventListener("submit", function (e){
    e.preventDefault()

   
    


    var piyoda = Math.round(((((enterNum.value) / 3.6) - (Math.floor((enterNum.value) / 3.6))).toFixed(2)) * 60)
    natijaP.textContent = Math.floor((enterNum.value) / 3.6) + ' soat'
    natijaP1.textContent = piyoda + ' daqiqa';


    var velek = Math.round(((((enterNum.value) / 20.1) - (Math.floor((enterNum.value) / 20.1))).toFixed(2)) * 60)
    natijaV.textContent = Math.floor((enterNum.value) / 20.1) + ' soat'
    natijaV1.textContent = velek + ' daqiqa';
    
    var mashina = Math.round(((((enterNum.value) / 70) - (Math.floor((enterNum.value) / 70))).toFixed(2)) * 60)
    natijaM.textContent = Math.floor((enterNum.value) / 70) + ' soat'
    natijaM1.textContent = mashina + ' daqiqa';

   
    var samalyot = Math.round(((((enterNum.value) / 800) - (Math.floor((enterNum.value) / 800))).toFixed(2)) * 60)
    natijaS.textContent = Math.floor((enterNum.value) / 800) + ' soat'
    natijaS1.textContent = samalyot + ' daqiqa';

   

    
})


