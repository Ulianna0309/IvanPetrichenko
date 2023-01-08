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

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});
  
promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e))



const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log);
two().then(console.log);
three().then(console.log);








 
const combineUrls = (protocol, domain) => {
    combineUrls('https', 'mysite.com');
    return console.log(`${protocol}://${domain}`);
}



