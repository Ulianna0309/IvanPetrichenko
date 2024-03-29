require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

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
   
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId);
   calc();
   timer('.timer', '2023-06-11');
   cards();
   forms('form', modalTimerId);
   slider({
      container: '.offer__slider',
      slide: '.offer__slide',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
  });
});