makeFirstSection = function (json) {
    let avgAge = json.reduce(((sum, person)=>sum + person.age), 0) / json.length
    let names = json.map(person=>person.name + person.name.length)
    let result = document.createElement("div")
    let namesDiv = document.createElement("div")
    namesDiv.innerText = names
    let avgDiv = document.createElement("div")
    avgDiv.innerText = `Średnia lat wynosi ${avgAge}`
    result.append(namesDiv, avgDiv)
    return result
}

compareAges = function(a, b){
    return a.age - b.age
}

makeSecondSection = function (json) {
    json.sort(compareAges)
    let erki = json
        .filter(person=>person.name.includes("r") || person.name.includes("R"))
        .map(JSON.stringify)
    let sorted = json.map(JSON.stringify)


    let result = document.createElement("div")
    let namesDiv = document.createElement("div")
    namesDiv.innerText = erki
    let otherDiv = document.createElement("div")
    otherDiv.innerText = `Drugi najstarszy ${sorted[sorted.length-2]},\nTrzeci najmłodszy ${sorted[2]}`
    result.append(namesDiv, otherDiv)
    return result
}

fetch('http://localhost:3000/people')
    .then(response => response.json())
    .then(json=>{
        document.querySelector("body")
             .appendChild(makeFirstSection(json))
        document.querySelector("body")
            .appendChild(makeSecondSection(json))
    })


