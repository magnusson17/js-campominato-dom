/*
1) Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
2) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus
3) Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

/* Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nel range dei numeri della griglia: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- l'utente indica un livello di difficoltà in base al quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Le bombe dovranno essere generate nello stesso range delle caselle di gioco.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento. */

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


