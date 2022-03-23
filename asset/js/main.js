/*
1) Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
2) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus
3) Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

//Manipolazione DOM
let grid = document.getElementById("grid");
let levChoice = document.getElementById("lev-choice");
let selectButtonDiv = document.getElementById("select-button-div");
let refreshBtnDiv = document.getElementById("refresh-btn-div");

//prendo il .value di levChoice
function levChoiceFunction() {
    //quindi a seconda del livello genero tot caselle (100 in questo caso -> 10x10)
    if (levChoice.value == "easy") {
        for (let i = 0; i < 100; i++) {

            //assegno ad una variabile la creazione di un elemento
            let box = document.createElement("div");
            //a questo ELEMENTO inserisco un numero casuale grazie alla function getRandomInt(min, max)
            box.innerHTML += getRandomInt(1, 100);
            //allo stesso ELEMENTO gli assegno una specifica class a seconda di quante caselle contiene
            box.classList.add("box_10per10");
            //appendo tale ELEMENTO al suo contenitore, in questo caso grid
            grid.appendChild(box);

            //aggiungo una function() anonima che si attiva al click del ELEMENTO
            box.addEventListener ("click", function() {
                //uso This per targhettizzare il box sul quale clicco, gli aggiungo una tot class
                this.classList.add("clicked");
                //immagazino il contenuto di This box dento una variabile (number)
                // let number = this.innerHTML;
            })

        }
    } else if (levChoice.value == "medium") {

        for (let i = 0; i < 81; i++) {

            let box = document.createElement("div");
            box.innerHTML += getRandomInt(1, 100);
            box.classList.add("box_9per9");
            grid.appendChild(box);

            box.addEventListener ("click", function() {
                this.classList.add("clicked");
            })

        }
    } else if (levChoice.value == "hard") {

        for (let i = 0; i < 49; i++) {

            let box = document.createElement("div");
            box.innerHTML += getRandomInt(1, 100);
            box.classList.add("box_7per7");
            grid.appendChild(box);

            box.addEventListener ("click", function() {
                this.classList.add("clicked");
            })

        }
    } else {
        alert("ERRORE, selezionare un livello");
        refreshPage()
    }
    //faccio apparire la griglia e il refresh btn, faccio sparire il select
    grid.classList.remove("d_none");
    refreshBtnDiv.classList.remove("d_none");
    selectButtonDiv.classList.add("d_none");

}

//function per generare num random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//function per refreshare la pagina
function refreshPage() {
    window.location.reload()
}


