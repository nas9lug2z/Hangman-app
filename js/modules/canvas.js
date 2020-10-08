const HangmanCanvas = ( _ => {

    let livesUsed;
    let canvas;
    let context;

    const init = _ => {
        canvas = document.querySelector('.hangman__board');
        context = canvas.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = 'white';
        step0();
    }

    const drawLine = (startX, startY, endX, endY) => {
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }

    const drawFullCircle = (centerX, centerY, radius) => {
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.stroke();
    }

    //hanger
    const step0 = _ => {
        //bottom horizontal
        drawLine(30, 140, 130, 140);
        //vertical
        drawLine(80, 15, 80, 140);
        //top horizontal
        drawLine(80, 15, 180, 15);
    }

    //rope
    const step1 = _ => {drawLine(180, 15, 180, 30)}

    //head
    const step2 = _ => {drawFullCircle(180, 40, 10)}

    //body
    const step3 = _ => {drawLine(180, 50, 180, 100)}

    //left arm
    const step4 = _ => {drawLine(180, 60, 160, 80)}

    //right arm
    const step5 = _ => {drawLine(180, 60, 200, 80)}

    //left leg
    const step6 = _ => {drawLine(180, 100, 160, 120)}

    //right leg
    const step7 = _ => {drawLine(180, 100, 200, 120)}

    const steps = [step0, step1, step2, step3, step4, step5, step6, step7];
    //right leg
    const setLives = lives => {
        livesUsed = 7 - lives;
        steps[livesUsed]();
    }


    return {
        init,
        setLives
    }
})();

export default HangmanCanvas;