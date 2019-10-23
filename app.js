// muutujad

// var
// muutujate defineerimine
var nimi = 'Marleen'; // defineerimine
console.log(nimi);
nimi = 'Katrin'; // uue väärtuse omistamine
console.log(nimi);

// muutujate inistialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast!';
console.log(tervitus);

// liitnimetused muutujatel
var eesNimi = 'Marleen'; // Camel style
var ees_nimi = 'Marleen'; // PHP style
var EesNimi = 'Marleen'; // Pascal style
var eesnimi = 'Marleen'; //

// let - muutuja
let pereNimi = 'Kovalik';
console.log(pereNimi);
pereNimi = '???';
console.log(pereNimi);

// const - konstantne ehk pole võimalik muuta aga on võimalik lisada
const minuEesNimi = 'Marleen';
console.log(minuEesNimi);
// minuEesNimi = 'Katrin'; konstanti muuta ei saa

// contant kasutamine
const inimene = { nimi : 'Katrin', vanus : 20};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamine 2
const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);