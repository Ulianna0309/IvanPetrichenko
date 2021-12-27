'use strict';

const box = document.querySelector('.box'),
btn = document.querySelector('button');
//const width = box.clientWidth;
//const height = box.clientHeight;  
//const width = box.offsetWidth;
//const height = box.offsetHeight;  

const width = box.scrollWidth;
const height = box.scrollHeight;  

console.log(width, height);


btn.addEventListener('click', () =>{
   box.style.height = box.scrollHeight + 'px';
   //console.log(box.scrollTop);
});


console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);


//Функции-конструкторы

function User(name, id){
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function(){
      console.log(`Hello ${this.name}`);
   };
}

User.prototype.exit = function(name){
   console.log(`Пользователь ${this.name} ушел`)
};

const ivan = new User('Ivan', 35);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();


console.log(ivan);
console.log(alex);