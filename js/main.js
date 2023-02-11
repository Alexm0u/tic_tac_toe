//Capturo los div que mostrarán los nombres

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

//Leo los datos del sessionStorage y los guardo en una variable

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

//Aplico esos datos a los dos divs

nameP1.innerHTML = `${datosSesion.player1}`;
nameP2.innerHTML = `${datosSesion.player2}`;



let tablero = Array.from(document.getElementsByClassName("celda"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["", "", "", "", "", "", "", "", ""];

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const comprueboGanador = () => {
    console.log(miTablero);

}

tablero.map(
    (celda) => {
        celda.addEventListener('click', () => {

            if ((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)) {
                celda.innerHTML = (turno) ? "X" : "O";

                (turno) ? fichaP1-- : fichaP2--;

                miTablero[celda.id] = (turno) ? "X" : "O";

                comprueboGanador();


                turno = !turno;
            }
        })
    }
)




