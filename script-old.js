'use strict'


/*const personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?');
        }
    },
    rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последний фильмов?', '');
            b = prompt('На сколько оцените его?', '');
    
            personalMovieDB.movies[a] = b;
            if(a != null & b != null && a != '' && b !='' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count<10){
            console.log('Мало')
        } else if (personalMovieDB >= 10 && personalMovieDB < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы кономан')
        }else {
            console.log('Ошибка');
        }
    }, 
    
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i < 2; i++) {
            //let genre = prompt(`Ваш люимый жанр под номером ${i}`);
            if (genre === '' || genre == null){
                console.log('Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }//
            let genres = prompt(`Ваш люимый жанр через запятую`);
            if (genres === '' || genres == null){
                console.log('Вы ввели некоректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i+1} это ${item}`)
        });
    }
};









      




const num = 50;
switch(num){
    case 50:
        console.log('Оно');
        break;
    case 100:
        console.log('Не верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


let num2 = 50;

while(num2 <= 55){
    console.log(num2);
    num2++;
}

do{
    console.log(num2);
    num2++;
}

while(num2 < 55);

for (let i = 1; i < 10; i++){

    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}

let num = 20;
function showFitrstMessage(text) {
    console.log(text)
    num = 10;
    console.log(num);
}

showFitrstMessage("hi");
console.log(num);

function calc(a, b) {
    return(a+b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}
const anyMum = ret();
console.log(anyMum);

const logger = function () {
    console.log("Hello");
}
logger();

const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};


const str = 'test';
const arr = [1,2,3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const number = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function first() {
    setTimeout(function () {
       console.log(1); 
    }, 500);
}

function second() {
    console.log(12); 
}

first();
second();

function learnJs(lang,  callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('я прошел этот урок');
}
learnJs('JS', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors : {
        border: 'black',
        bg: 'red'
    }, 
    makeTest: function () {
        console.log("Test");
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);
/*delete options.name;
console.log(options);*/








/*let counter = 0;
for (let key in options) {
    if(typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Cвойство ${i} имееь значание ${options[key][i]}`);
            counter++;
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
   }
}

console.log(Object.keys(options).length);


const arr = [1,2,3,6,8];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}
arr.pop();
arr.push(10);

console.log(arr);
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);

}

for (let value of arr){
    console.log(value);
}
arr[99] = 0;
console.log(arr.length);
console.log(arr);


arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри масива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));

let a = 5,
    b = a;

    b = b + 5;
    console.log(b);
    console.log(a);

    const obj = {
        a: 5, 
        b: 1
    }
const copy = obj;  //ссылка
copy.a = 10;
console.log(obj);

function copy2 (mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}




const numbers = {
    a : 2,
    b: 5, 
    c: {
        x:7,
        y:4
    }
};

const newNumbers = copy2(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);



const add = {
    d: 17,
    e: 20
}
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[2] = 'jgg'
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'video', 'rutube'],
      blogs = ['wp', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const newAray = [...array];
console.log(...newAray);


const q = {
    one: 1,
    two: 2
}

const newObj = {...q};
console.log(newObj);*/


/*let str = "some";
let str_obj = new String(str);

console.log(typeof(str));
console.log(typeof(str_obj));

console.dir([1,2,3]);


const soldier = {
    health : 400,
    armor : 100,
    sayHello: function () {
        console.log("Hello");
    }
}

//jonh.__proto__= soldier;
//console.log(jonh.armor);
//jonh.sayHello();

const jonh = Object.create(soldier);

//Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();*/

//let x = 5; alert( ++x );
//[] + false - null + true;
console.log([] + false - null + true);

/*let y = 1; 
let x = y = 2; 
alert(x);

alert( "1"[0]);*/

console.log(2 && 1 && null && 0 && undefined);
//и запинается на лжи

console.log(!!( 1 && 2 ) === (2 && 1));

alert( null || 2 && 3 || 4 );


const a = [1, 2, 3]; 
const b = [1, 2, 3];


console.log(a == b);

alert( +"Infinity" );

console.log("Ёжик" > "яблоко");
console.log(0 || "" || 2 || undefined || true || falsе)
