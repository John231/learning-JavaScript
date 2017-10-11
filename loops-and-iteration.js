printTitleToConsole('LOOPS & ITERATION');

function printTitleToConsole(titleText){
    // print the title in the console
    var titleBorder = '';
    for(let i=0; i<titleText.length;i++){
        titleBorder += '=';
    }
    console.log(titleBorder + '\n' + titleText + '\n' + titleBorder);
}
/*
 * Example for loop - prints the shopping list array to screen
 */

var einkaufsListe = ['Milch', 'Butter', 'Brot', 'Käse'];

// create a div element to hold the list
var div1 = document.createElement('div');

var para = document.createElement('p');
para.textContent = 'Meine Einkaufsliste: ';
div1.appendChild(para);

var liste = document.createElement('ul');

// loop through the shopping list appending a new item to the end of the list each time
for(var i=0; i<einkaufsListe.length; i++){
    let newListItem = document.createElement('li');
    newListItem.textContent = einkaufsListe[i];
    liste.appendChild(newListItem);
}
div1.appendChild(liste);

// add the div to the screen
document.body.appendChild(div1);

/*
 * Example do-while loop
 */
var div2 = document.createElement('div');
var autoDescription = document.createElement('p');
autoDescription.textContent = 'Hier sind ein paar Automarken: '
div2.appendChild(autoDescription);
var autos = ['Mercedez', 'BMW', 'Audi', 'Porsche'];
var autoListe = document.createElement('ul');
var j=0;
do {
    let newListItem = document.createElement('li');
    newListItem.textContent = autos[j];
    autoListe.appendChild(newListItem);
    j++;

} while (j<autos.length);
div2.appendChild(autoListe);
document.body.appendChild(div2);

/*
 * Example while loop
 */
var x = 1;
var userLimit = Number(prompt('Please enter the maximum for the 2 times table:'));
var timesTable = document.createElement('p');
timesTable.textContent = 'The two times table up to 2x'+userLimit+' is:';

while (x <= userLimit){
    let multiplicationResult = 2*x;
    if ( x === userLimit){
        timesTable.textContent += ' ' + multiplicationResult + '.';
    } else {
        timesTable.textContent += ' ' + multiplicationResult + ',';
    }
    x++;
}
document.body.appendChild(timesTable);

// labelled loops can be used to break out of an inner loop under specific conditions
// The following function skips the inner loop after i=1, j=1
console.log('Example of labelled loops:')
loop1:
for(let i=0;i<3;i++){
    loop2:
    for(let j=0; j<3; j++){
        if(i===1 && j===2){
            continue loop1;
        }
        console.log('i = ' + i + ', j = ' + j);
    }
}

/*
 * example for..in loop
 */

// constructor for a car object
function Car(make,model){
    this.make = make;
    this.model = model;
}
var testCar = new Car('Mercedes', 'A-Klasse');

// for..in loop on object
for (let x in testCar) {
    console.log(x);
}

/*
 * example for..of loop
 */
var numberArray = [1,2,3,4,5,6];
numberArray.foo = 'hello';
for (let i in numberArray){
    // prints the index
    console.log(i)
}
for (let i of numberArray){
    // prints out the property values stored in the array
    console.log(i)
}