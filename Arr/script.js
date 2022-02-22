// const names = ['Ivan', 'Ann', 'Кsenia', 'Vova'];


// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);


// let answers = ['Ivan', 'ANna', 'Hallo'];

// answers = answers.map(item => item.toLowerCase());
// console.log(result);

// const some = [4, 'kjhukj', 'kuhiuyi'];
// console.log(some.every(item => typeof(item) === 'number'));

// const arr = [4, 5 , 1 ,3, 6];
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const objName = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(objName);