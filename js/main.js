

let players = {
    player1: "",
    player2: ""
}

let inputs = Array.from(document.getElementsByClassName("namePlayer"));

inputs.map(
    elemento => {
        elemento.addEventListener("input", () => {

            for (let jugador in players) {
                if (elemento.name == jugador) {

                    players[jugador] = elemento.value;
                }
            }
        })
    }
)

const cambiaPantalla = () => {

    if ((players.player1 === '') || (players.player2 === '')) {

        return;
    }

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    console.log("playersInfo")
    setTimeout(() => {
        window.open("../pages/tablero.html", "_self");
    }, 500);
}

let tablero = Array.from(document.getElementsByClassName("celda"));
let turno = true;
let fichaP1 = 3;
let fichaP2 = 3;

const comprueboGanador = () => {

    if ((tablero[0].innerHTML == "X") && (tablero[1].innerHTML == "X") && (tablero[2].innerHTML == "X") ||
        (tablero[3].innerHTML == "X") && (tablero[4].innerHTML == "X") && (tablero[5].innerHTML == "X") ||
        (tablero[6].innerHTML == "X") && (tablero[7].innerHTML == "X") && (tablero[8].innerHTML == "X") ||
        (tablero[0].innerHTML == "X") && (tablero[3].innerHTML == "X") && (tablero[6].innerHTML == "X") ||
        (tablero[1].innerHTML == "X") && (tablero[4].innerHTML == "X") && (tablero[7].innerHTML == "X") ||
        (tablero[2].innerHTML == "X") && (tablero[5].innerHTML == "X") && (tablero[8].innerHTML == "X") ||
        (tablero[0].innerHTML == "X") && (tablero[4].innerHTML == "X") && (tablero[8].innerHTML == "X") ||
        (tablero[2].innerHTML == "X") && (tablero[4].innerHTML == "X") && (tablero[6].innerHTML == "X")) {
        setTimeout(() => { location.href = "looser.html"; }, 300);
        sessionStorage.setItem("nameWinner", datosSesion.player1);
    } else if ((tablero[0].innerHTML == "O") && (tablero[1].innerHTML == "O") && (tablero[2].innerHTML == "O") ||
        (tablero[3].innerHTML == "O") && (tablero[4].innerHTML == "O") && (tablero[5].innerHTML == "O") ||
        (tablero[6].innerHTML == "O") && (tablero[7].innerHTML == "O") && (tablero[8].innerHTML == "O") ||
        (tablero[0].innerHTML == "O") && (tablero[3].innerHTML == "O") && (tablero[6].innerHTML == "O") ||
        (tablero[1].innerHTML == "O") && (tablero[4].innerHTML == "O") && (tablero[7].innerHTML == "O") ||
        (tablero[2].innerHTML == "O") && (tablero[5].innerHTML == "O") && (tablero[8].innerHTML == "O") ||
        (tablero[0].innerHTML == "O") && (tablero[4].innerHTML == "O") && (tablero[8].innerHTML == "O") ||
        (tablero[2].innerHTML == "O") && (tablero[4].innerHTML == "O") && (tablero[6].innerHTML == "O")) {
        setTimeout(() => { location.href = "looser.html"; }, 300);;
        sessionStorage.setItem("nameWinner", datosSesion.player2);
    }
}
tablero.map(
    (celda) => {
        celda.addEventListener('click', () => {
            if ((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)) {
                celda.innerHTML = (turno) ? "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;

                comprueboGanador();
                turno = !turno;
            }
        })
    }
)