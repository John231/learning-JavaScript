// an example if statement
function checkIsTrue(testBool){
    if (testBool){
        console.log('Evaluated as true!');
    } else {
        console.log('Evaluated as false!');
    }
}
// Check result of checkIsTrue method with both true and false
checkIsTrue('true');
checkIsTrue('false');

// an example switch statement
function getManufacturerDescription(carManufacturer){
    switch (carManufacturer){
        case 'mercedes' :
            console.log('Mercedes-Benz ist eine eingetragene Handelsmarke für Fahrzeuge der Daimler AG');
            break;
        case 'bmw' :
            console.log('Die Bayerische Motoren Werke Aktiengesellschaft ist die Muttergesellschaft der BMW Group, eines weltweit operierenden deutschen Automobil- und Motorradherstellers mit Sitz in München');
            break;
        default :
            console.log('Autohersteller nicht gefunden');
    }
}
// Check result of getManufacturerDescription method
getManufacturerDescription('mercedes');
getManufacturerDescription('bmw');
getManufacturerDescription('fast-car');

// an example throw statement
function checkForError(testString){
    if (testString === 'error'){
        throw 'example ERROR!';
    } else {
        console.log('no errors found');
    }
}


// an example error handling try-catch (finally) block
function exampleErrorHandler(){
    var userMonth =  Number(prompt('Please enter the number of the desired month'));
    userMonth -= 1; // adjust to match array index location

    try {
        console.log(getMonth(userMonth));
    } catch (e) {
        // print the error to the console
        console.log(e);
    } finally {
        console.log('Finally is executed after try-catch')
    }
}
// function which throws an error if the index is out of range
function getMonth(monthIdx){
    var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']; 
    if (months[monthIdx]){
        // return the corresponding month as a string
        return months[monthIdx];
    } else {
        // throw an error (String)
        throw 'Month Not Found';
    }
}

// run the exampleErrorHandler method
exampleErrorHandler();
// Check result of checkForError method
checkForError('error');