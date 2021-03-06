'use strict';

class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   calcArea(){
      return this.height * this.width;
   }
}

class ColoredRectangleWithText extends Rectangle{
   constructor(height, width, text, bgColor) {
      super(height, width);
      this.text = text;
      this.bgColor = bgColor;
   }
   showMyProps(){
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');
div.showMyProps();
console.log(div.calcArea());

/*const square = new  Rectangle(10, 10);
const long = new  Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());*/


const log = function(a, b, ...rest){
   console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2){
   console.log(number * basis)
}
calcOrDouble(3);


const person = {
   name: 'Alex',
   tel: '+7444444444',
   parents: {
      mum: 'Olga',
      dad: 'Mike'
   }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mum = 'Ann';
console.log(person);
console.log(clone);