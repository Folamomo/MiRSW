let container = document.querySelector("#container")
let fields = Array(4)
let from = {x: 0, y: 0}
let empty = {x: 3, y: 3}
for (let i = 0; i < 4; i++) {
    fields[i] = Array(4)
}

function move(fromX, fromY, toX, toY){
    // console.log(fromX, fromY, toX, toY)
    if(fromX === empty.x && fromY === empty.y) return;
    if(toX !== empty.x || toY !== empty.y) return;
    if (Math.abs(fromX - toX) + Math.abs(fromY - toY) > 1) return

    let from = fields[fromX][fromY]
    let to = fields[toX][toY]
    to.appendChild(from.children[0])
    empty.x = fromX
    empty.y = fromY
}

for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        let slot = document.createElement("div")
        slot.className = "slot"
        container.appendChild(slot)


        if (i !== 3 || j !== 3){
            let tile = document.createElement("div")
            tile.draggable = true
            tile.className = "tile"
            tile.innerText = i + j * 4 + 1
            slot.appendChild(tile)
        }


        fields[i][j] = slot

        slot.addEventListener("dragstart", ev=>{
            from.x = i
            from.y = j
        })
        slot.addEventListener("dragover",ev=>ev.preventDefault())
        slot.addEventListener("drop", ev => {
            move(from.x, from.y, i, j)
        })
    }
}

async function randomMove(){
    let r = Math.random() * 4
    if(r < 1 && empty.y !== 0) { //up
        move(empty.x, empty.y - 1, empty.x, empty.y)
    }

    else if(r < 2 && empty.x !== 3) { //right
        move(empty.x + 1, empty.y, empty.x, empty.y)
    }
    else if(r < 3 && empty.y !== 3) { //down
        move(empty.x, empty.y + 1, empty.x, empty.y)
    }

    else if(empty.x !== 0) { //left
        move(empty.x - 1, empty.y, empty.x, empty.y)
    }
    await new Promise(r => setTimeout(r, 10));
}

async function randomize() {
    for (let i = 0; i < 200; i++) {
        await randomMove()
    }
}

randomize()

