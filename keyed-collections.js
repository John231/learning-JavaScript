// print the title in the console
printTitleToConsole('KEYED COLLECTIONS');

/*
 * Map object example
 */

var capitalCities = new Map();
capitalCities.set('England', 'London');
capitalCities.set('Scotland', 'Edinburgh');
capitalCities.set('Republic of Ireland', 'Dublin');
capitalCities.set('Northern Ireland', 'Belfast');
capitalCities.set('Wales','Cardiff');

for([country,capital] of capitalCities){
    console.log('The capital of ' + country + ' is ' + capital);
}
console.log('The size of the capital cities Map is: ' + capitalCities.size);

// helper function for printing the title to the console
function printTitleToConsole(titleText){
    // print the title in the console
    var titleBorder = '';
    for(let i=0; i<titleText.length;i++){
        titleBorder += '=';
    }
    console.log(titleBorder + '\n' + titleText + '\n' + titleBorder);
}