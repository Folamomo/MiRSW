let canvas = document.querySelector("#canvas")
let con = canvas.getContext("2d")
let r = 50

let x = r
let y = r
let v = 3
let color = 0
function rysuj(r, x, y){
    con.beginPath()
    con.arc(x, y, r, 0, Math.PI * 2)
    con.closePath()
    con.fill()

}

function ruszaj(){
    x += v
    if(x + r >= canvas.width) {v = -v}
    if(x <= r) {v = -v}

    color += Math.PI / 1000.777
    let red = (1 + Math.sin(7 * color))/2.0 * 255.0
    let green = (1 + Math.sin(11 * color))/2.0 * 255.0
    let blue = (1 + Math.sin(13 * color))/2.0 * 255.0
    con.fillStyle = `rgb(${red},${green},${blue})`
}

function redraw(){
    con.clearRect(0, 0, canvas.width, canvas.height);
    ruszaj()
    rysuj(r, x, y)
}

let started = true
let id = setInterval(redraw, 10)

document.querySelector("#start").onclick = ()=> {
    if (!started) {
        id = setInterval(redraw, 10)
        started = true
    }
}
document.querySelector("#stop").onclick = ()=> {
    if(started) {
        started = false
        clearInterval(id)
    }

}
