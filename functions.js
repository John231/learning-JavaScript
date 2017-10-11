printTitleToConsole('FUNCTIONS');

function printTitleToConsole(titleText){
    // print the title in the console
    var titleBorder = '';
    for(let i=0; i<titleText.length;i++){
        titleBorder += '=';
    }
    console.log(titleBorder + '\n' + titleText + '\n' + titleBorder);
}

/*
 * Standard function expression
 */
console.log('=== Standard function expression ===');
var funcDiv1 = document.createElement('div');
var userInput = prompt('Enter text to appear on screen!');

function addTextToDocument(text){
    let textElement = document.createElement('p');
    textElement.textContent = String(text);
    funcDiv1.appendChild(textElement);
}
addTextToDocument(userInput);

/*
 * Anonymous function expression
 */
console.log('=== Anonymous function ===');
var addText = function(text){
    let textElement = document.createElement('p');
    textElement.textContent = String(text);
    funcDiv1.appendChild(textElement);
}
addText('Hey there, anonymous function usage!');
document.body.appendChild(funcDiv1);

/*
 * Example of a closure
 */
console.log('=== Closures ===')
var createCar = function(manufacturer){
    return {
        setManufacturer: function(newManufacturer) {
            manufacturer = newManufacturer;
        },
        getManufacturer: function() {
            return manufacturer;
        }
    }
}
var newCar = createCar('Aston Martin');
console.log('This car is manufactured by ' + newCar.getManufacturer());
newCar.setManufacturer('Ferrari');
console.log('Manufacturer changed! New manufacturer is: ' + newCar.getManufacturer());

/*
 * Usage of the arguments object
 */
function concatenator(separator) {
   let result = '';
   let i;
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
}
   return result;
}
console.log(concatenator(', ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));

/*
 * Default parameter
 */
function multiply(a,b=1){
    return a*b;
}
console.log('3 x 2 = ' + multiply(3,2));
console.log('5 = '+ multiply(5));

/*
 * Arrow functions
 */

var elementArray = ['Hydrogen','Helium','Lithium','Beryllium'];

// Comparison of closure styles and lambda functions in ES3/5 and ES6
var a2 = elementArray.map(function(s){return s.length;});
// ES6 style (using arrow function expression)
var a3 = elementArray.map(s => s.length);
