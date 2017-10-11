printTitleToConsole('GRAMMAR & TYPES');

function printTitleToConsole(titleText){
    // print the title in the console
    var titleBorder = '';
    for(let i=0; i<titleText.length;i++){
        titleBorder += '=';
    }
    console.log(titleBorder + '\n' + titleText + '\n' + titleBorder);
}

function greetMe(name){
    alert('Hello ' + name);
}
greetMe('world!');

/* Declaration types:
 * var - variable with global or local scope
 * let - block-scoped, local variable
 * const - block-scoped, read-only named constant
 */


// variable declaration:
var myString = 'hagrid';

// undefined is used to determine whether a variable has been assigned a value
var input;
if (input === undefined){
    alert('input was not assigned!');
}

// variable scope - var is local to function scope:
if(true){
    var y = 5;
}
console.log(y);

if(true){
    // cannot be reached outside of if statement
    var num = 6;
    console.log(num)
}

// hoisting means that variables are hoisted to top of a function statement (only applicable to vars and not lets or consts)
console.log('My hoisted variable is: ' + hoistedVar);
var hoistedVar = 7;

// take care with the namespace, functions and global variables MUST NOT have the same name

// parsing strings into number data type
var base = 10; // radix or number system to be used!
var myStringNumber = "6";
var numberFromString = Number.parseInt(myStringNumber, base);
console.log('My number parsed from string is: ' + numberFromString);

var myStringDecimal = '1.2';
var decimalFromString = Number.parseFloat(myStringDecimal, base);
console.log('My decimal parsed from String is: ' + decimalFromString);

// alternative method for retrieving a number from string:
var unaryPlusFun = (+myStringDecimal);
console.log('Unary plus operator returns type ' + unaryPlusFun.type);

// Array literals
var coffees = ['French roast', 'Java', 'Kona'];
console.log('The first element of the coffee array is: ' + coffees[0]);

// if array elements are empty, they will be evaluated as undefined
var fish = ['Trout', , 'Salmon', 'Sole'];
console.log('The second element of the fish array is: ' + fish[1]);
// note this will not work for trailing commas!! eg. fish = ['x','y',];
// best practice is to define empty elements as undefined! eg.
var improvedFish = ['Trout', undefined, 'Salmon', 'Sole'];

//floating point literals
var anInt = 3;
var aFloat = 3.2;
var aFloatExp = -2.45e+2;

// object literals
var carObject = {make:'ferrari', color: getColor('ferrari'), interiorOptions: {basic: 'uncomfortable seats', racing: 'bucket seats', deluxe: 'leather seats'}};

function getColor(car){
    switch (car) {
        case 'ferrari':
            return 'red'
            break;
        default:
            console.log('not found');
            return undefined;
    }
};

console.log('This car was manufactured by ' + carObject['make'] + ' and is ' + carObject.color);
console.log('The racing package for this car comes fitted with ' + carObject.interiorOptions['racing']);

// string literals
var newLineString = 'I\'m on the line above \n I\'m on the line below';