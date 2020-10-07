const NewGame = (_ => {

    //cache the DOM
    const $hangman = document.querySelector('.hangman');

    //render home page HTML
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    const renderGame = _ => {
        let markup = '';
        markup += `
        <h1 class="hangman__title">Hangman</h1>
        <br>
        <canvas class="hangman__board"></canvas><br>
        <div class="hangman__word">
        </div>
        <p class="hangman__instructions">Pick an alphabet below to guess the whole word.</p>
        <div class="hangman__word"><ul class="hangman__letters">`;
        for (let letter of letters) {
            markup += `<li class="hangman__letter">${letter}</li>`
        }
        markup += `</ul>
        </div>
        <button class="button start" style="margin: 0 auto">New Game</button>`
        $hangman.innerHTML = markup;

    }


    const init = _ => {
        renderGame();
    }
    return {
        init
    }
})();

export default NewGame;