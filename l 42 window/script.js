//'use strict';

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


function showThis(a, b){
   console.log(this);

   function sum() {
      console.log(this);
      return a + b;
   }
   console.log(sum());
}
showThis(4, 5);


const obj = {
   a: 20,
   b: 15,
   sum: function() {
      function shout(){
        console.log(this);
      }
      shout();
   }
};
obj.sum();

function sayName(surname) {
   console.log(this);
   console.log(this.name + surname);
}

const user = {
   name: 'John'
};

sayName.call(user, 'Dgfdg');
sayName.apply(user, ['jygyug']);

function count(num){
   return this*num;
}

const double = count.bind(2);
console.log(double(13));
//Обычная ф- this = window, но если use strict - undefined
//контекст у методов обьекта - сам обьект
//this в конструкторрах и классах - это новый экземпляр обьекта
//ручная привязка this: call, apply, bind
//стрелочная функция теряет this

btn.addEventListener('click', function() {
  this.style.backgroundColor = 'red';
});

btn.addEventListener('click', (e) => {
   e.target.style.backgroundColor = 'red';
 });

const obj2 = {
   num: 5,
   sayNumber: function() {
      const say = () => {
         console.log(this);
      };
      say();
   }
};

obj2.sayNumber();


const double2 = a => a * 2;
console.log(double2(4));


