let canvas = document.querySelector("#canvas")

if (canvas.getContext){
    let con = canvas.getContext("2d")

    // kwadrat
    con.fillRect(10, 10, 100, 100)

    // koło z trójkątami
    con.fillStyle = "#ff0000"
    con.arc(200, 100, 50, 0, 2 * Math.PI)
    con.fill()

    con.beginPath()
    con.moveTo(200, 100)
    con.lineTo(230, 100)
    con.lineTo(230, 120)
    con.closePath()
    con.fillStyle = '#ffffff'
    con.fill()

    con.beginPath()
    con.moveTo(180, 100)
    con.lineTo(180, 90)
    con.lineTo(200, 90)
    con.closePath()
    con.fillStyle = '#ffffff'
    con.fill()

    // trapez
    con.beginPath()
    con.moveTo(100, 300)
    con.lineTo(300, 300)
    con.lineTo(250, 200)
    con.lineTo(150, 200)
    con.closePath()
    con.fillStyle = '#00ff00'
    con.fill()

    // gwiazda
    con.translate(100, 200)
    con.fillStyle = 'yellow'
    con.beginPath()
    con.moveTo(100, 0)
    for (let i = 0; i < 5; i++) {
        con.rotate(Math.PI * 4/5)
        con.lineTo(100, 0)
    }
    con.closePath()
    con.fill()

    con.setTransform(1, 0, 0, 1, 0, 0);
}