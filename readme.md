# Griglia Campo Minato

Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

* con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
* con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
* con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Problem-Solving

### Step 1 : Le Funzioni

* Creo una funzione1 con due argomenti. Questi due argomenti serviranno a creare un elemento e a dargli una classe
* Creo una funzione2 con un argomento, che mi servirà (grazie ad un'evento al suo interno) a dare un colore alle celle e a scrivere il loro contenuto in console.

### Step 2 : Creazione Celle

* Creo una variabile1 per selezionare il contenitore delle celle.
* Creo un ciclo che insieme alla funzione1 mi permetteranno di creare 100 celle figlie della variabile1.
* Il testo all'interno delle celle verrà scriito in base al numero di cicli. Ad ogni ciclo viene asssegnato un numero ad una cella.
* Infine uso la funzione2 fuori dal ciclo per raggiungere l'effetto descritto nella consegna.
