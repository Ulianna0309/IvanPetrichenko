const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);


const circles = document.getElementsByClassName('circle');
console.log(circles);



const hearts = document.querySelectorAll('.heart');
console.log(hearts);

const wrapper = document.querySelector('.wrapper');

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
div.classList.add('black');

wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[1]);
wrapper.removeChild(hearts[1]);
wrapper.replaceWith(div, hearts[0]);
/*hearts[1].before(div);
hearts[1].after(div);*/


/*circles[2].remove();
hearts[0].replaceWith(circles[0]);*/


//div.textContent = "hgfhg";
div.innerHTML = "<h1>hftfytf</h1>";
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');



