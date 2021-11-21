let canvas = document.querySelector("#canvas")
let con = canvas.getContext("2d")


function rysuj(){
    con.beginPath()
    con.arc(200, 200, 100, 0, Math.PI * 2)
    con.closePath()
    con.fill()

}

function wyczysc(){
    con.clearRect(0, 0, canvas.width, canvas.height);
}



document.querySelector("#start").onclick = rysuj
document.querySelector("#stop").onclick = wyczysc