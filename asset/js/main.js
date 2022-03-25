/*
1) Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
2) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus
3) Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

/*
1) Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
2) I numeri nella lista delle bombe non possono essere duplicati.
3) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

4) La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
5) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.
*/

//Manipolazione DOM
let levChoice = document.getElementById("lev-choice");
let selectButtonDiv = document.getElementById("select-button-div");
let refreshBtnDiv = document.getElementById("refresh-btn-div");
let punteggio = document.getElementById("punteggio");

let array = [];
let bombsArray = [];
let sixteenBombsArray = [];

//5) conta ogni punto che fai
let conta = 0;

//prendo il .value di levChoice
function levChoiceFunction() {
    
    let celNumber;

    if (levChoice.value == "easy") {
        celNumber = 100;
        maxConta = 10;
    } else if (levChoice.value == "medium") {
        celNumber = 81;
        maxConta = 9;
    } else if (levChoice.value == "hard") {
        celNumber = 49;
        maxConta = 7;
    } else {
        alert("ERRORE, selezionare un livello");
        refreshPage()
    }
    
    for (z = 1; z < celNumber + 1; z++) {
        array.push(z);
    }
    
    array = shuffle(array);
    console.log(array);

    //1) Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
    for (b = 0; b < celNumber ; b++) {
        bombsArray.push(b);
    }

    bombsArray = shuffle(bombsArray);

    for (bomb = 0; bomb < 16 ; bomb++) {
        sixteenBombsArray.push(bombsArray[bomb]);
    }

    console.log(sixteenBombsArray);
    
    for (let i = 0; i < celNumber; i++) {

        let grid = document.getElementById("grid");
        //assegno ad una variabile la creazione di un elemento
        let box = document.createElement("div");
        
        if (sixteenBombsArray.includes(array[i])) {
            box.classList.add("bomb_class_zero");
        }
        
        //appendo tale ELEMENTO al suo contenitore, in questo caso grid
        grid.appendChild(box);
        
        //allo stesso ELEMENTO gli assegno una specifica class a seconda di quante caselle contiene
        if (celNumber == 100) {
            box.classList.add("box_10per10");
        } else if (celNumber == 81) {
            box.classList.add("box_9per9");
        } else if (celNumber == 49) {
            box.classList.add("box_7per7");
        }

        box.innerHTML += `<span>${array[i]}</span>`
        
        //aggiungo una function() anonima che si attiva al click del ELEMENTO
        box.addEventListener ("click", function() {
            //uso This per targhettizzare il box sul quale clicco, gli aggiungo una tot class
            
            if ( sixteenBombsArray.includes( parseInt(this.innerText) ) ) {
                this.classList.add("bomb_class");
                let queryBombs = document.querySelectorAll(".bomb_class_zero");
                for (let i = 0; i < queryBombs.length; i++) {
                    queryBombs[i].classList.add("bomb_class");
                }
                grid.classList.add("stop_events");
            } else {
                this.classList.add("clicked");
                conta++;
                punteggio.innerHTML = `${conta}`;              
            }
        });
    }
    
    //faccio apparire la griglia e il refresh btn, faccio sparire il select
    grid.classList.remove("d_none");
    punteggio.classList.remove("d_none");
    refreshBtnDiv.classList.remove("d_none");
    selectButtonDiv.classList.add("d_none");
}

/*FUNCTIONS*/ 

//function per generare num random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//function shuffle
function shuffle(tot) {
    return tot.sort( () => Math.random() - 0.5 );
}

//function per refreshare la pagina
function refreshPage() {
    window.location.reload()
}

