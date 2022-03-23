/*1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3) Sommiamo i due numeri
4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
5) Dichiariamo chi ha vinto.*/

//👊✊🔥
//prompt e container user names
let userName = prompt("Inserisci uno user name");
let userNameP = document.getElementById("user-name-p");
//id versus (SE IL PUNTO 6.1 E' COMMENTATO QUESTA MANIPOLAZIONE DEL DOM E' SUPERFLUA)
let versus = document.getElementById("versus")
//container principali, contengono le hands emoji
let myContainer = document.getElementById("my-container");
let pcContainer = document.getElementById("pc-container");
//variabili che mi servono per trasferire al loro interno il .value dei button
let askEvenOdd;
let askNumber;
//gli Id dei container di label, input e button
let containerAskEvenOdd = document.getElementById("container-ask-even-odd");
let containerAskNumber = document.getElementById("container-ask-number");
//gli input dei button
let evenOddInput = document.getElementById("even-odd-input");
let numberChoiceInput = document.getElementById("number-choice-input");
//i div che contengono il risultato
let prova = document.getElementById("prova");
let prova2 = document.getElementById("prova2");
//
let numRandom;
let sum;

//0) metti a video lo user name
userNameP.innerHTML = `${userName}`

//1.1) L’utente sceglie pari o dispari (quindi sblocco con remove(v_hiden) il passaggio successivo).
function avantiOne() {
    containerAskNumber.classList.remove("v_hidden");
    askEvenOdd = evenOddInput.value;
    return askEvenOdd;
}

//1.2) L’utente inserisce un numero da 1 a 5 (poi quando schiaccia avanti fa partire tutte le operazioni).
function avantiTwo() {
    askNumber = parseInt(numberChoiceInput.value);
    if (askNumber === 5) {
        myContainer.innerHTML = `<div>🖐</div>`
    } else if (askNumber === 4) {
        myContainer.innerHTML = `<div><i class="fa-solid fa-hand-fist text_FFC83D contorno mt_30px"></i></div>`
    } else if (askNumber === 3) {
        myContainer.innerHTML = `<div>🤟</div>`
    } else if (askNumber === 2) {
        myContainer.innerHTML = `<div>✌</div>`
    } else if (askNumber === 1) {
        myContainer.innerHTML = `<div>☝</div>`
    }

    //2) Generiamo (QUA LO STO RICHIAMANDO) un numero random (sempre da 1 a 5) per il computer (usando una funzione)
    randomNumber();
    if (numRandom === 5) {
        pcContainer.innerHTML = `<div>🖐</div>`
    } else if (numRandom === 4) {
        pcContainer.innerHTML = `<div><i class="fa-solid fa-hand-fist text_FFC83D contorno mt_30px"></i></div>`
    } else if (numRandom === 3) {
        pcContainer.innerHTML = `<div>🤟</div>`
    } else if (numRandom === 2) {
        pcContainer.innerHTML = `<div>✌</div>`
    } else if (numRandom === 1) {
        pcContainer.innerHTML = `<div>☝</div>`
    }

    //3) Sommiamo i due numeri
    sum = askNumber + numRandom;
    if (sum % 2 === 0) {
        prova.innerHTML = `${askNumber} e ${numRandom} fa ${sum}, <span class="font_style_italic">pari</span>`;
    } else {
        prova.innerHTML = `${askNumber} e ${numRandom} fa ${sum}, <span class="font_style_italic">dispari</span>`;
    }

    //5) Dichiariamo chi ha vinto.
    if (askEvenOdd == isEvenOrOdd(sum)) {
        prova2.innerHTML = `<div class="text_green fs_2em">hai vinto! <i class="fa-solid fa-face-grin-squint"></i></div>`
    } else {
        prova2.innerHTML = `<div class="text_red fs_2em">hai perso <i class="fa-solid fa-face-sad-cry"></i></div>`
    }

    //6.1) Togli l'animazione
    pcContainer.classList.remove("shake_pc_fist");
    myContainer.classList.remove("shake_my_fist");
    //6.2) Togli VS
    // versus.classList.add("d_none");
}

//2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber() {
    numRandom = Math.floor(Math.random() * 5) + 1;
    return numRandom;
}

//4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}