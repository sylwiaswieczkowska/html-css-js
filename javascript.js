// kiedyś uzywało się również  var x

let variable;
console.log(variable, typeof variable);
variable = null;
console.log(typeof variable);
variable = 123;
console.log(typeof variable);
variable = 'abc';
console.log(typeof variable);

const IS_TRUE = true;
//IS_TRUE = false;  << nie zadziałą;

const object = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 39
};
console.log(object, object.name, object["surname"]);
const array = [1, 'abc', true, false, {text: 'Ala ma kota'}];
console.log(array, array[0], array[3]);

function add(x, y) {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

console.log(add(1, 5));
console.log(subtract(15, 9));
