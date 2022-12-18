'use strict';

let k = 0;

function count(){
    for (let i = 0; i < 9; i++) {
        k++;
    }
    alert('done');
}
count();


setTimeout(() => {
    console.log(1)
}, 0);

console.log('2');



setTimeout(() => {
    console.log('timeout')
}, 0);

queueMicrotask(() => {
    console.log('wow')
});

Promise.resolve()
    .then(() => console.log('promise'));


Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');


//() => {} (макрозадача) -> потом микрозадачи все -> render -> () => {} макрозадача
// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 4000);

// setTimeout(() => {
//     console.log('3');
// }, 4000);

// console.log('4');

