let target

function drag(ev){
    ev.dataTransfer.setData("img", ev.target.id);
    console.log("drag") 
    target = ev.target.id;
}
function over(ev){
    ev.preventDefault();
    console.log("over")
}
function drop(ev){
    console.log("drop")
    
    var children = ev.target.innerHTML;
   
    ev.target.innerHTML = document.getElementById(ev.dataTransfer.getData("img")).innerHTML;
    document.getElementById(ev.dataTransfer.getData("img")).innerHTML = children;
}