import '../style.css';
import DOM from './modules/DOM';
import gameLogic from './modules/gameLogic';

DOM.init();
gameLogic.populateShipsTemp();
DOM.markShipPos();
