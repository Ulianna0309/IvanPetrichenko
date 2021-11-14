const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?');
const personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





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

      if(personalMovieDB.count<10){
          console.log('Мало')
      } else if (personalMovieDB >= 10 && personalMovieDB < 30){
          console.log('Вы классический зритель');
      } else if (personalMovieDB.count >= 30){
          console.log('Вы кономан')
      }else {
          console.log('Ошибка');
      }
      console.log(personalMovieDB);
}




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

/*while(num2 <= 55){
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
}*/