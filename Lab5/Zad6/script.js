let elements = {
    'a': 1,
    'b': 2,
    'c': 3
}
let canvas = document.querySelector("#canvas")

function add(){

}


let con = canvas.getContext("2d")
con.arc(200, 100, 50, 0, 2 * Math.PI)
con.fill()