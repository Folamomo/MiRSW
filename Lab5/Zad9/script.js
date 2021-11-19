let canvas = document.querySelector("#canvas")
let con = canvas.getContext("2d")
let n = 5
let v = 10
let r = 10

let gwiazdy = []

function nowaGwiazda() {
    return {
        x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
        fi: Math.random() * Math.PI * 2
    }
}

for (let i = 0; i < n; i++) {
    gwiazdy.push(nowaGwiazda())
}

document.querySelector("#n").oninput = (ev)=>{
    newN = Number(ev.currentTarget.value)
    while (newN > n) {
        gwiazdy.push(nowaGwiazda())
        n++
    }
    while (newN < n) {
        gwiazdy.pop()
        n--
    }
}

document.querySelector("#v").oninput = (ev)=>{
    v= Number(ev.currentTarget.value)
}



function rysuj(r, x, y){
    let tr = con.getTransform()
    con.translate(x, y)
    con.fillStyle = 'yellow'
    con.beginPath()
    con.moveTo(0, -r)
    for (let i = 0; i < 5; i++) {
        con.rotate(Math.PI * 4/5)
        con.lineTo(0, -r)
    }
    con.closePath()
    con.fill()

    con.setTransform(tr);
}

function ruszaj(g){
    g.x += v/100 * Math.cos(g.fi)
    g.y += v/100 * Math.sin(g.fi)
    if(g.y < 0 || g.y > canvas.height) {
        g.fi = -g.fi
    }
    if(g.x < 0 || g.x > canvas.width) {
        g.fi = Math.PI - g.fi
    }

}

setInterval(()=>{
    con.clearRect(0, 0, canvas.width, canvas.height);
    for (const g of gwiazdy) {
        ruszaj(g)
        rysuj(r, g.x, g.y)
    }
}, 10)

