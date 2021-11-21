let canvas = document.querySelector("#canvas")

let con = canvas.getContext("2d")
let userStroke = con.strokeStyle
let userFill = con.fillStyle
let shape = 0

let colors = ["black", "gray", "red", "yellow", "green", "blue", "navy","orange", "white"]
let shapes = [
    function () {
        con.moveTo(0, 50)
        con.lineTo(0, 0)
        con.lineTo(50, 0)
    },
    function () {
        con.rect(5 ,20, 40, 30)
        con.moveTo(0, 20)
        con.lineTo(50, 20)
        con.lineTo(25, 0)
    },
    function () {
        con.moveTo(30, 20)
        con.lineTo(30, 50)
        con.lineTo(50, 70)
        con.stroke()
        con.beginPath()
        con.moveTo(30, 50)
        con.lineTo(10, 70)
        con.moveTo(30, 20)
        con.lineTo(10, 40)
        con.moveTo(30, 20)
        con.lineTo(50, 40)
        con.moveTo(30, 20)
        con.stroke()
        con.beginPath()
        con.arc(30, 10, 10, 0, Math.PI * 2)

    },
    function () {
        con.arc(20, 40, 10, 0, Math.PI * 2)
        con.stroke()
        con.beginPath()

        con.arc(60, 40, 10, 0, Math.PI * 2)
        con.stroke()
        con.beginPath()

        con.moveTo(0, 40)
        con.lineTo(80, 40)
        con.lineTo(80, 25)
        con.lineTo(60, 5)
        con.lineTo(35, 5)
        con.lineTo(25, 20)
        con.lineTo(0, 25)
    },
]

function drawLeftMenu(){
    con.strokeStyle = "black"
    con.clearRect(0, 0, 100, 100 * shapes.length)

    for (const fun of shapes) {
        con.strokeRect(0, 0, 100, 100)
        con.translate(10, 10)
        con.beginPath()
        fun()
        con.closePath()
        con.stroke()
        con.translate(-10, -10)
        con.translate(0, 100)
    }
    con.setTransform(1, 0, 0, 1, 0, 0)
}

function drawStrokePicker(){
    for (const i in colors) {
        con.fillStyle = colors[i]
        con.fillRect(i * 20, 600-20, 20, 20)
    }
    con.strokeStyle = "black"
    con.strokeRect(0, 600-20, colors.length * 20, 20)
}

function drawFillPicker(){
    for (const i in colors) {
        con.fillStyle = colors[i]
        con.fillRect(i * 20, 600-40, 20, 20)
    }
    con.strokeStyle = "black"
    con.strokeRect(0, 600-40, colors.length * 20, 20)
}

function drawSelectedStyle(){
    con.strokeStyle = userStroke
    con.fillStyle = userFill
    con.fillRect(5, 600-40-40-5, 40, 40)
    con.strokeRect(5, 600-40-40-5, 40, 40)

}

function isInLeft(x, y){
    return x <= 100 & y <= 400
}
function isInStroke(x, y) {
    return y >= 600 - 20 && x <= 20 * colors.length
}

function isInFill(x, y) {
    return y < 600 - 20 && y >= 600 - 40 && x <= 20 * colors.length
}

function redrawMenus(){
    drawLeftMenu()
    drawStrokePicker()
    drawFillPicker()
    drawSelectedStyle()
}


function drawShape(x, y){
    con.translate(x, y)
    con.beginPath()
    shapes[shape]()
    con.closePath()
    con.fill()
    con.stroke()
    con.translate(-x, -y)
}

canvas.addEventListener('mousedown', evt => {
    [x, y] = [evt.offsetX, evt.offsetY]
    if(isInLeft(x, y)) shape = Math.floor(y/100)
    else if(isInStroke(x, y)) userStroke = colors[Math.floor(x/20)]
    else if(isInFill(x, y)) userFill = colors[Math.floor(x/20)]
    redrawMenus()
})

canvas.addEventListener('dblclick', evt => {
    [x, y] = [evt.offsetX, evt.offsetY]
    drawShape(x, y)
    redrawMenus()
})

redrawMenus()
