let tab = ["Jeden", "Dwa", "Trzy", "Cztery", "Pięć"]

console.log(tab[0])
console.log(tab[0].length)
console.log(tab[tab.length-1])
console.log(tab[tab.length-1].length)

console.log("for")
for (let i = 0; i < tab.length; i++) {
    console.log(`${tab[i].toUpperCase()} ${tab[i].length} PAW`)
}

console.log("forOf")
for (let el of tab) {
    console.log(`${el.toUpperCase()} ${el.length} PAW`)
}


console.log("forEach")
tab.forEach(el=>console.log(`${el.toUpperCase()} ${el.length} PAW`))

console.log("Map")

tab.map(el=>`${el.toUpperCase()} ${el.length} PAW`).forEach(el=>console.log(el))

tab.unshift("Zero")
tab.push("Sześć")

console.log(tab.length)

console.table(tab)

if (tab.length===3) {
    tab.splice(2, 1)
}

const users = [
    {name : "Grzegorz", age: 102},
    {name : "Ula", age: 20},
    {name : "Ala", age: 19},
    {name : "Ola", age: 18},
    {name : "Ela", age: 17},
    {name : "Celina", age: 16}]

users.filter(user=>user.age>=18).forEach(user=>console.log(user.name))

users.forEach(user=> {if (user.age >= 18) console.log(user.name)})
users.forEach(({age, name})=> {if (age >= 18) console.log(name)})

users.flatMap(({age, name}) => age>=18 ? name : []).forEach(it=>console.log(it))

for (const user of users) {
    if (user.age >= 18) console.log(user.name)
}

for (const i in users) {
    if (users[i].age >= 18) console.log(users[i].name)
}


