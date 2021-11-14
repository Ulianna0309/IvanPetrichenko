/*const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?');
const personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последний фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последний фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



console.log(personalMovieDB);

*/
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

/*while(num2 <= 55){
    console.log(num2);
    num2++;
}

do{
    console.log(num2);
    num2++;
}

while(num2 < 55);*/

for (let i = 1; i < 10; i++){

    if(i === 6){
        //break;
        continue;
    }
    console.log(i);
}