import Home from './home.js';
import Win from './win.js';
import GameOver from './gameover.js';
import HangmanCanvas from './canvas.js';


const NewGame = (_ => {

    //cache the DOM
    const $hangman = document.querySelector('.hangman');


    //create variables
    let wordToGuess;
    let cryptWord = [];
    let lives = 7;
    const words = ['apple', 'cat', 'helicopter', 'elephant', 'joke', 'cookie'];

    //render home page HTML
    const renderGame = _ => {
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");

        let markup = '';
        markup += `
        <span class="hangman__stats">Lives: 7</span>
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
        <button class="button return-to-menu" style="margin: 0 auto">Main Menu</button>`

        //insert into HTMl
        $hangman.innerHTML = markup;
    }


    //pick a random word
    const pickRandomFrom = (wordArray) => {
        return Math.floor(Math.random() * wordArray.length);
    }

    //render a crypt word with corresponding number of dashes into HTML
    const renderRandomWord = (_) => {
        wordToGuess = words[pickRandomFrom(words)];
        cryptWord = [];
        lives = 7;
        for (let letter of wordToGuess) {
            cryptWord.push('_');
        }

        //insert cryptword into the html
        document.querySelector('.hangman__word').innerHTML = cryptWord.join('');
    }

    //guess a letter
    const checkGuess = (e) => {
        //remove letter from options
        e.target.classList.add('hangman__letter--active');
        e.target.style.pointerEvents = 'none';

        const currentGuess = e.target.innerHTML;

        //check if we have that guess
        if (wordToGuess.includes(currentGuess)) {
            //update the guessing word
            wordToGuess.split('').forEach((letter, index) => {
                if (letter === currentGuess) {
                    cryptWord[index] = currentGuess;
                }
            })

            //insert update cryptword into HTML
            document.querySelector('.hangman__word').innerHTML = cryptWord.join('');
        }
        else {
            //update lives situation
            lives--;
            document.querySelector('.hangman__stats').innerHTML = `Lives: ${lives}`;

            //pass lives to the hangman canvas
            HangmanCanvas.setLives(lives);
        };
        checkWinOrLoose();
    }

    const checkWinOrLoose = _ => {
        if (lives === 0) {
            GameOver.init(wordToGuess);
        }
        else if (cryptWord.includes('_') === false) {
            Win.init(wordToGuess);
        }
    }

    //listeners
    const listeners = _ => {
        document.querySelector('.return-to-menu').addEventListener('click', _ => {
            Home.init();
        });
        document.querySelector('.hangman__letters').addEventListener('click', e => {
            if (e.target.classList.contains('hangman__letter')) {
                checkGuess(e);
            }
        })
    }

    const init = _ => {
        renderGame();
        renderRandomWord();
        listeners();
        HangmanCanvas.init();
    }
    return {
        init
    }
})();

export default NewGame;