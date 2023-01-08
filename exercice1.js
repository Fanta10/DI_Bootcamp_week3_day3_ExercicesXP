/****** Exercice 1 : Minuterie *********/

 let message = document.createElement('span')
message.innerHTML = "Veuillez patienter..."
 let body = document.querySelector('body')
 body.appendChild(message)

//appel d' une fonction qui affiche hello world après 2 secondes avec la fonction setTimeout 

setTimeout( function (){
    alert('Hello World')
}, 2000)


//Ajout d'un nouveau paragraphe dans le div après 2s en utilisant setTimerout()
let div = document.querySelector('#container')
 setTimeout(function (){
     let p = document.createElement('p')
     p.innerHTML = "Hello World"
     div.appendChild(p)

 }, 2000)
//appelez une fonction toutes les 2 secondes. setInterval
//La fonction ajoutera un nouveau paragraphe au fichier .<p>Hello World</p><div id="container">
//L’intervalle sera effacé (c’est-à-dire ), lorsque l’utilisateur cliquera sur le bouton.clearInterval
 let count = 0

 let setIntervalP = setInterval(function (){
    let p = document.createElement('p')
    p.innerHTML = "Hello World"
    div.appendChild(p)
    count++;
     console.log(count);
    //Au lieu de cliquer sur le bouton, l’intervalle sera effacé (c’est-à-dire ) 
    //dès qu’il y aura 5 paragraphes à l’intérieur du fichier .clearInterval<div id="container">

  if( count < 4){
     setIntervalP
 } 
  else{
      clearInterval(setIntervalP) 
  }
     
 }, 2000)

//L’intervalle sera effacé (c’est-à-dire ), lorsque l’utilisateur cliquera sur le bouton.clearInterval
let bouton = document.querySelector('#clear')
bouton.addEventListener('click', clear)
function clear(e){
    e.preventDefault()
    clearInterval(setIntervalP) 
}
//
// let setInterval = setInterval(function (){
//     let p2 = document.createElement('p')
//     p.innerHTML = "Hello World"
//     div.appendChild(p)
//     count++;
//     console.log(count);
//     //4
//  if( count <= 5){
//     setIntervalP
// } 
//  else{
//      clearInterval(setIntervalP) 
//  }

     
//  }, 2000)

