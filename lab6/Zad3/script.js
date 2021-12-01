function dropHandler(ev) {
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
          var div = document.createElement("div");
        var img = document.createElement("img");
        img.src="https://cdn.icon-icons.com/icons2/1471/PNG/512/12-file_101194.png"
      
        div.innerText=ev.dataTransfer.files[i].name;
        div.appendChild(img);
        document.getElementById("list").appendChild(div);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {

        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src="https://cdn.icon-icons.com/icons2/1471/PNG/512/12-file_101194.png"


        div.innerText=ev.dataTransfer.files[i].name;
        div.appendChild(img);
        document.getElementById("list").appendChild(div);
    }
    }
}

document.querySelector("#drop_zone").addEventListener("drop", dropHandler)
document.querySelector("#drop_zone").addEventListener("dragover", ev=>ev.preventDefault())

