const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);


const circles = document.getElementsByClassName('circle');
console.log(circles);



const hearts = document.querySelectorAll('.heart');
console.log(hearts)

hearts.forEach(item => {
   console.log(item)
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);



box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 600px;' 
box.style.cssText = `background-color: green; width: 600px`; 

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
   item.style.backgroundColor = 'green';
});


const div = document.createElement('div');


