const records = new Map();

records.set('a', 1);
records.set('b', 2);
records.set('c', 3);

let canvas = document.querySelector("#canvas")
let con = canvas.getContext("2d")

function add(){
    let text = document.querySelector("#name").value
    let record = records.get(text)
    let value = record === undefined ? 1 : record + 1
    records.set(text, value)
    redraw()
}

function redraw(){
    console.log(records)
    let all = [...records.values()].reduce((acc, x) => acc + x, 0)
    let start = 0
    let blue = true
    for (const record of records.values()) {
        let angle = record / all * 2 * Math.PI
        con.beginPath()
        con.moveTo(200, 100)
        con.arc(200, 100, 50, start, start + angle)
        con.lineTo(200, 100)
        con.fillStyle = blue ? "blue" : "red"
        con.fill()
        con.stroke()
        con.closePath()
        blue = !blue
        start = start + angle
    }
}

document.querySelector("#add").addEventListener("click", add)

redraw()
