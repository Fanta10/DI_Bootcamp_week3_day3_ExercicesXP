let position = 0

function myMove(){

  let bouton = document.querySelector('button');
  let div = document.querySelector('#animate');

  let id = setInterval(function() {
    
    if (position == 350) {
        
        clearInterval(id);
    }

    else {
        
        position++;
       div.style.left = position + "px";
       console.log(position);
    }
  }, 1000);

}
