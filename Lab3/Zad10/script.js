const tab1 = [1, 7, 12, 46, 85]
const tab2 = [10, 26, 75, 34]
const tab3 = [...tab1, ...tab2]
tab3.sort()
console.log(tab3[0])
console.log(tab3[tab3.length-1])