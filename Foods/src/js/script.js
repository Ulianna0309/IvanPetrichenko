window.addEventListener('DOMContentLoaded', function() {
   const tabs = require('./modules/tabs');
   const modal = require('./modules/modal');
   const timer = require('./modules/timer');
   const cards = require('./modules/cards');
   const calc = require('./modules/calc');
   const form = require('./modules/form');
   const slider = require('./modules/slider');

   tabs();
   slider();
   modal();
   calc();
   timer();
   cards();
   
   form();
   

});