let container = document.querySelector("#container")

for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
        let slot = document.createElement("div")
        slot.className = "slot"
        container.appendChild(slot)
        let tile = document.createElement("div")

        if (i === 3 && j === 3){
            tile.className = "empty"
        } else {
            tile.className = "tile"
            tile.innerText = i + j * 4
        }
    }
}


