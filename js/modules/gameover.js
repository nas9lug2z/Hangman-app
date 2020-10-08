import Home from './home.js';


const GameOver = (guessedWord => {

    //cache the dom
    const $hangman = document.querySelector('.hangman');

    //render win screen
    const renderGameOver = guessedWord => {
        $hangman.innerHTML = `
        <h1 class="hangman__title">GAME OVER!</h1>
        <p class="result">You lost!</p>
        <p class="result">The word is <strong>${guessedWord.toUpperCase()}</strong></p>
        <button class="button return-to-menu" style="margin: 0 auto">Main Menu</button>
        `
    }


    //listeners
    const listeners = _ => {
        document.querySelector('.return-to-menu').addEventListener('click', _ => {
            Home.init();
        })
    }

    const init = guessedWord => {
        renderGameOver(guessedWord);
        listeners();
    }

    return {
        init
    }
})();

export default GameOver;