

//Capturo los div que mostrarán los nombres

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

//Leo los datos del sessionStorage y los guardo en una variable

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

//Aplico esos datos a los dos divs

nameP1.innerHTML = `${datosSesion.player1}`;
nameP2.innerHTML = `${datosSesion.player2}`;
