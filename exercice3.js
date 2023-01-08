let box = document.getElementById('box')

box.setAttribute("draggable", true);

box.addEventListener('dragstart', function (e){
    
    e.target.style.border = "2px solid black"
   
})

box.addEventListener('dragend', function end(e){
    let x = e.clientX;
    let y = e.clientY;
    console.log(e)
    e.target.style.left = x + "px";
    e.target.style.top = y + "px";
    e.target.style.border = "none"
   // e.target.style.position = "absolute"; 
    
})

let target = document.getElementById('target')

target.addEventListener('dragDrop',function (e){
    e.target.style.backgroundColor = "lightblue"
    
})

target.addEventListener('dragenter',function (e){
    e.target.style.border = "2px dashed #000"
    
})
