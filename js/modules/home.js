import NewGame from './newgame.js';
import Instructions from './instructions.js';



const Home = (_ => {

    //cache the DOM
    const $hangman = document.querySelector('.hangman');

    //render home page HTML
    const runHome = _ => {
        $hangman.innerHTML = `
        <h1 class="hangman__title">Hangman</h1>
        <div class="buttons__box">
            <button class="button start">New Game</button>
            <button class="button instructions">Instructions</button>
        </div>
        `
    }

    //listeners
    const listeners = _ => {
        document.querySelector('.start').addEventListener('click', _ => {
            NewGame.init();
        });
        document.querySelector('.instructions').addEventListener('click', _ => {
            Instructions.init();
        })
    }

    //init all functions
    const init = _ => {
        runHome();
        listeners();
    }

    //main public function
    return {
        init
    }

})();

export default Home;