const btn = document.querySelector('.btn');
let timerId,
i = 0;

function myAnimation() {
const elem = document.querySelector('.box');
let pos = 0;
const id = setInterval(frame, 10);

function frame() {
    if(pos == 300){
        clearInterval(id);
    } else{
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener('click', myAnimation);


/*function logger (){
    if(i === 3){
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}

let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);*/


//Дата
const now = new Date();
console.log(now);

const now2 = new Date();
console.log(now2.getFullYear());
console.log(now2.getMonth());
console.log(now2.getDate());
console.log(now2.getDay());
console.log(now2.getUTCHours());

console.log(now2.getTimezoneOffset());
console.log(now2.getTime());
console.log(now2.setHours(18, 40));
console.log(now2);
console.log(now2.setHours(40));
console.log(now2);

let start = new Date();
for(let i = 0; i < 1000000; i++){
    let some = i**3;
}
let end = new Date();
alert(`Цикл отработал зa ${end - start} милисекунд`);



