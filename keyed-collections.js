// print the title in the console
var titleMessage = 'KEYED COLLECTIONS';
var titleBorder = '';
for(let i=0; i<titleMessage.length;i++){
    titleBorder += '=';
}
console.log(titleBorder + '\n' + titleMessage + '\n' + titleBorder);

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