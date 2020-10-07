import NewGame from './newgame.js';


const Instructions = (_ => {

    //cache the DOM
    const $hangman = document.querySelector('.hangman');

    //render home page HTML
    const showInstructions = _ => {
        $hangman.innerHTML = `
        <h1 class="hangman__title">Hangman</h1>
        <p class="hangman__instructions">1. Pick an alphabet below to guess the whole word.</p>
        <p class="hangman__instructions">2. You have 7 lives</p>
        <button class="button start" style="margin: 10px auto">New Game</button>
        `
    }

    //listeners
    const listeners = _ => {
        document.querySelector('.start').addEventListener('click', _ => {
            NewGame.init();
        });
    }

    const init = _ => {
        showInstructions();
        listeners();
    }
    return {
        init
    }
})();

export default Instructions;