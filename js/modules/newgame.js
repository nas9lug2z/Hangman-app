import Home from './home.js';


const NewGame = (_ => {

    //cache the DOM
    const $hangman = document.querySelector('.hangman');


    //create varibles

    let wordToGuess;
    let guesses = [];
    let lives;
    const words = ['apple', 'cat', 'helicopter', 'elephant', 'joke', 'cookie'];

    //render home page HTML
    const renderGame = _ => {
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");

        let markup = '';
        markup += `
        <span class="hangman__stats"></span>
        <h1 class="hangman__title">Hangman</h1>
        <br>
        <canvas class="hangman__board"></canvas>
        <div class="hangman__word"></div>
        <p class="hangman__instructions">Pick a letter below to guess the whole word.</p>
        <div class="hangman__word"><ul class="hangman__letters">`;
        for (let letter of letters) {
            markup += `<li class="hangman__letter">${letter}</li>`
        }
        markup += `</ul>
        </div><br>
        <button class="button start" style="margin: 0 auto">New Game</button>`

        //insert into HTMl
        $hangman.innerHTML = markup;
    }

    //pick a random word
    const pickRandomFrom = (wordArray) => {
        return Math.floor(Math.random() * wordArray.length);
    }

    //render a crypt word with corresponding number of dashes into HTML
    const renderRandomWord = (_) => {
        let cryptWord = [];
        wordToGuess = words[pickRandomFrom(words)];
        console.log(wordToGuess)
        for (let letter of wordToGuess) {
            cryptWord.push('_');
        }
        console.log(cryptWord)
        //insert cryptword into the html
        document.querySelector('.hangman__word').innerHTML = cryptWord.join("");
    }

    //guess a letter
    const guessClick = (e) => {
        guesses.push(e.target.innerHTML)
        console.log(guesses);
    }


    //listeners
    const listeners = _ => {
        // document.querySelector('.start').addEventListener('click', _ => {
        //     NewGame.init();
        // });
        document.querySelector('.hangman__letters').addEventListener('click', e => {
            if (e.target.classList.contains('hangman__letter')) {
                guessClick(e);
            }
        })
    }

    const init = _ => {
        renderGame();
        renderRandomWord();
        listeners();
    }
    return {
        init
    }
})();

export default NewGame;