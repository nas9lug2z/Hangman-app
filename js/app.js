import Home from './modules/home.js';
import Api from './modules/API.js';

// const renderAll = async _ => {
//     const fetchWord = await Api.getInfo();
//     console.log(fetchWord);
//     const startGame = await Home.init(fetchWord);
// }

Home.init();