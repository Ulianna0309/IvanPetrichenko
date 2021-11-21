let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');
    }
}
start();



const personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}  
rememberMyFilms();


function detectPersonalLevel() {
    if(personalMovieDB.count<10){
        console.log('Мало')
    } else if (personalMovieDB >= 10 && personalMovieDB < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы кономан')
    }else {
        console.log('Ошибка');
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш люимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();


      




/*const num = 50;
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
console.log(parseFloat(test));*/