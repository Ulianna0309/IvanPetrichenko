/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');


          addForm.addEventListener('submit', (e) =>{
              e.preventDefault();

              let newFilm = addInput.value;
              const favorite = checkbox.checked;

              if(newFilm){
                  if(newFilm.length > 21){
                      newFilm = `${newFilm.substring(0, 22)}...`;
                  }

                  if(favorite){
                     console.log('Добавляем любимый фильм')
                  }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMoviesList(movieDB.movies, movieList);
              }

              e.target.resest();

          });
    
    
    const deleteAdv = (arr) => {
       arr.forEach(item => {
          item.remove();
       });
    };
   

   
    const makeChanges = () =>{
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
  
    const sortArr = (arr) => {
        arr.sort();
    };
   
    
    
    
    movieDB.movies.sort();

    function createMoviesList(films, parent) {
        parent.innerHTML = ""; 
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
               <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1);
               createMoviesList(movieDB.movies, movieList);
            });
        });
        
    }
    deleteAdv(adv);
    makeChanges();
    createMoviesList(movieDB.movies, movieList);
    
});


window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');
   box.addEventListener('touchstart', (e) => {
       e.preventDefault();
       console.log('start');
       console.log(e.changedTouches[0].pageX);
    });  
    
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
     });

     box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
     });
});






























/*adv.forEach(item => {
        item.remove();
    });
    
    adv.forEach(function (item) {
        item.remove();
    });*/



/*const btn = document.querySelectorAll('.btn'),
      overlay = document.querySelector('.btn__overlay')
let i = 0;
const deleteElement = (e) =>{
    console.log(e.currentTarget);
    console.log(e.type);
    i++;
    if(i == 1){
        btn.removeEventListener('click', deleteElement);
    }
};

btn.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
 
 overlay.addEventListener('click', deleteElement);




 const link = document.querySelector('.link');
 link.addEventListener('click', function (event) {
     event.preventDefault();
     console.log(event.target);
 });

console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.querySelector('.link').parentNode);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);


for (let node of document.body.childNodes) {

    if(node.nodName == '#text'){
        continue;
    }
   console.log(node);    
}*/

 