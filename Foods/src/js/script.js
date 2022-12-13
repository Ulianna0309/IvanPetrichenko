import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import slider from'./modules/slider';
import {openModal} from './modules/modal'
import forms from './modules/forms';



window.addEventListener('DOMContentLoaded', function() {
   const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId), 300000);
   
   tabs();
   slider();
   modal('[data-modal]', '.modal', modalTimerId);
   calc();
   timer();
   cards();
   forms('form', modalTimerId);
   

});