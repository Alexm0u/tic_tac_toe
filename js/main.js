

// //Genero un objeto de JavaScript que va a tener una propiedad para cada player
let players = {
    player1: "",
    player2: ""
}
// //Capturo los input por su className... recordad que los captura en una htmlcollection

let inputs = Array.from(document.getElementsByClassName("namePlayer"));

// //Mapeare el array inputs para darle a todos los elementos el evento addeventlistener input
// //para controlar cuando vayamos escribiendo en ellos

inputs.map(
    elemento => {
        elemento.addEventListener("input", () => {

            //             //Según vamos escribiendo en el input, iremos actualizando el objeto players..
            //             //metiendo los valores en la propiedad correspondiente (player1 si escribo en el input de player1 por ejemplo)

            for (let jugador in players) {
                if (elemento.name == jugador) {
                    //Ahora es cuando meto el valor en el objeto
                    players[jugador] = elemento.value;
                }
            }
        })
    }
)


// //Creo la función cambiaPantalla que guardará en sessionStorage y después cambiará de pantalla

const cambiaPantalla = () => {

    //     //Primero comprobamos que los nombres de los players NO esten vacios....

    if ((players.player1 === '') || (players.player2 === '')) {

        //Si uno de los 2 está vacio...ejecuto un return y así salgo de la función

        return;
    }

    //     //Si llego a este punto es porque los nombres si que tenían algún valor..

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    //     //Después de haber guardado .... cambiamos de página

    console.log("playersInfo")
    setTimeout(() => {

        window.open("../pages/tablero.html", "_self");
    }, 500);


}

let tablero = Array.from(document.getElementsByClassName("celda"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["", "", "", "", "", "", "", "", ""];
// Probaremos con un If Else y 8 combinaciones por cada ficha
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
    
    if ((combinacionGanadora[0].innerHTML == "X") && (combinacionGanadora[1].innerHTML == "X") && (combinacionGanadora[2].innerHTML == "X") ||
    (combinacionGanadora[3].innerHTML == "X") && (combinacionGanadora[4].innerHTML == "X") && (combinacionGanadora[5].innerHTML == "X") ||
    (combinacionGanadora[6].innerHTML == "X") && (combinacionGanadora[7].innerHTML == "X") && (combinacionGanadora[8].innerHTML == "X") ||
    (combinacionGanadora[0].innerHTML == "X") && (combinacionGanadora[3].innerHTML == "X") && (combinacionGanadora[6].innerHTML == "X") ||
    (combinacionGanadora[1].innerHTML == "X") && (combinacionGanadora[4].innerHTML == "X") && (combinacionGanadora[7].innerHTML == "X") ||
    (combinacionGanadora[2].innerHTML == "X") && (combinacionGanadora[5].innerHTML == "X") && (combinacionGanadora[8].innerHTML == "X") ||
    (combinacionGanadora[0].innerHTML == "X") && (combinacionGanadora[4].innerHTML == "X") && (combinacionGanadora[8].innerHTML == "X") ||
    (combinacionGanadora[2].innerHTML == "X") && (combinacionGanadora[4].innerHTML == "X") && (combinacionGanadora[6].innerHTML == "X")) {
    setTimeout(() => { location.href = "looser.html"; }, 300);
    // sessionStorage.setItem("nameWinner", name1);

} else if ((combinacionGanadora[0].innerHTML == "O") && (combinacionGanadora[1].innerHTML == "O") && (combinacionGanadora[2].innerHTML == "O") ||
    (combinacionGanadora[3].innerHTML == "O") && (combinacionGanadora[4].innerHTML == "O") && (combinacionGanadora[5].innerHTML == "O") ||
    (combinacionGanadora[6].innerHTML == "O") && (combinacionGanadora[7].innerHTML == "O") && (combinacionGanadora[8].innerHTML == "O") ||
    (combinacionGanadora[0].innerHTML == "O") && (combinacionGanadora[3].innerHTML == "O") && (combinacionGanadora[6].innerHTML == "O") ||
    (combinacionGanadora[1].innerHTML == "O") && (combinacionGanadora[4].innerHTML == "O") && (combinacionGanadora[7].innerHTML == "O") ||
    (combinacionGanadora[2].innerHTML == "O") && (combinacionGanadora[5].innerHTML == "O") && (combinacionGanadora[8].innerHTML == "O") ||
    (combinacionGanadora[0].innerHTML == "O") && (combinacionGanadora[4].innerHTML == "O") && (combinacionGanadora[8].innerHTML == "O") ||
    (combinacionGanadora[2].innerHTML == "O") && (combinacionGanadora[4].innerHTML == "O") && (combinacionGanadora[6].innerHTML == "O")) {

    setTimeout(() => { location.href = "looser.html"; }, 300);;
    // sessionStorage.setItem("nameWinner", name2)

}



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

