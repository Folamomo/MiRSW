let licznik = 0
let isPropagation = true

increment = function (i){
    licznik += i
    document.querySelector("#licznik").innerHTML = licznik
    if(licznik>30){
        document.querySelector("#red")
            .removeEventListener("click", red)
    }
    if(licznik>50){
        document.querySelector("#yellow")
            .removeEventListener("click", yellow)
    }
}

blue = function (){
    increment(1)
    alert("nacisnąłeś niebieski o wartości 1")
}

red = function (){
    increment(2)
    alert("nacisnąłeś czerwony o wartości 2")
}

yellow = function (){
    increment(5)
    alert("nacisnąłeś żółty o wartości 5")
}

reset = function () {
    licznik = 0
    increment(0)
    document.querySelector("#blue")
        .addEventListener("click", blue)

    document.querySelector("#yellow")
        .addEventListener("click", yellow)

    document.querySelector("#red")
        .addEventListener("click", red)
}

stopPropagationFun = function (ev){
    ev.stopPropagation()
}

stopStartPropagation = function (){
    isPropagation = !isPropagation
    
    if(!isPropagation){
        document.querySelectorAll(".color")
            .forEach(el=>el.addEventListener("click", stopPropagationFun))
    } else {
        document.querySelectorAll(".color")
            .forEach(el=>el.removeEventListener("click", stopPropagationFun))
    }
}

reset()
document.querySelector("#reset")
    .addEventListener("click", reset)
document.querySelector("#propagation")
    .addEventListener("click", stopStartPropagation)