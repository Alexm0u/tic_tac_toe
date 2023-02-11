// Funcion al darle click al boton de Confirm (Datos PLAYER 1)
FunctionSavePlayerOne = () => {

    // Guardo el valor del input player 1
    let buttonOne = document.getElementById("inputPlayerOne");
    let saveName = buttonOne.value;
    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 1.
    let namePlayerOne = document.getElementById("namePlayerOne");
    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if (saveName != "") {
        // Guardo el valor del input 1 en sessionStorage
        sessionStorage.setItem("nameOfPlayerOne", saveName);
        // Introduzco en el parrafo el nombre del Player 1
        namePlayerOne.innerHTML = ` Player 1 : ${saveName}`;
        //Vacio el input player 1
        buttonOne.value = "";
    } else {
        alert("Please, write your name")
    }
}
FunctionSaveNameTwo = () => {
    // Guardo el valor del input player 2
    let buttonTwo = document.getElementById("inputPlayerTwo");
    let saveNameTwo = buttonTwo.value;
    // Guardo el parrafo de arriba del input para posteriormente introducirle el nombre del Player 2.
    let namePlayerTwo = document.getElementById("namePlayerTwo");

    // Validacion de que todos los campos(input y radio(Human/CPU) esten rellenos)
    if ((radioHumanTwoValue == true || radioCpuTwoValue == true) && (saveNameTwo != "")) {
        // Guardo el valor del input 2 en sessionStorage
        sessionStorage.setItem("nameOfPlayerTwo", saveNameTwo);
        // Guardo el valor del boton radioHuman2 en sessionStorage
        sessionStorage.setItem("valueOfHuman2", radioHumanTwoValue);
        // Guardo el valor del boton radioCpu2 en sessionStorage
        sessionStorage.setItem("valueOfCpu2", radioCpuTwoValue);
        // Introduzco en el parrafo el nombre del Player 2
        namePlayerTwo.innerHTML = ` Player 2 : ${saveNameTwo}`;
        //Vacio el input player 2
        buttonTwo.value = "";
    } else {
        alert("Please, write your name and select if you are Human o CPU")
    }
}




































// // //Genero un objeto de JavaScript que va a tener una propiedad para cada player
// let players = {
//     player1 : "",
//     player2 : ""
// }
// // //Capturo los input por su className... recordad que los captura en una htmlcollection

// let inputs = Array.from(document.getElementsByClassName("namePlayer"));

// // //Mapeare el array inputs para darle a todos los elementos el evento addeventlistener input
// // //para controlar cuando vayamos escribiendo en ellos

// inputs.map(
//     elemento => {
//         elemento.addEventListener("input", ()=>{

// //             //Según vamos escribiendo en el input, iremos actualizando el objeto players..
// //             //metiendo los valores en la propiedad correspondiente (player1 si escribo en el input de player1 por ejemplo)

//             for(let jugador in players){
//                 if(elemento.name == jugador){
//                     //Ahora es cuando meto el valor en el objeto
//                     players[jugador] = elemento.value;
//                 }
//             }
//         })
//     }
// )


// // //Creo la función cambiaPantalla que guardará en sessionStorage y después cambiará de pantalla

// const cambiaPantalla = () => {

// //     //Primero comprobamos que los nombres de los players NO esten vacios....

//     if( (players.player1 === '') || (players.player2 === '') ){

//         //Si uno de los 2 está vacio...ejecuto un return y así salgo de la función

//         return;
//     }

// //     //Si llego a este punto es porque los nombres si que tenían algún valor..

//     sessionStorage.setItem("playersInfo", JSON.stringify(players));

// //     //Después de haber guardado .... cambiamos de página

// console.log("playersInfo")
//     setTimeout(()=>{

//         window.open("../pages/show.html","_self");
//     },500);


// }