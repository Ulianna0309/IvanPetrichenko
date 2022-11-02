'use strict';

// new RegExp('pattern', 'flags'); i, g, m

const ans = prompt('Введите ваше число');

const reg = /n/ig;
console.log(reg.test(ans))


// console.log(ans.search(reg));
const regNum = /\d/g;
console.log(ans.match(regNum));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g,"*"));

console.log('12-24-56'.replace(/-/g, ':'));

const str = 'My name is G3H5';
console.log(str.match(/\D/ig));

//\d - все числа
//\D - не числа
//\w - все буквы
//\W - не буквы
//\s - все пробелы
//i - и верхний и нижний регистр





