
let txt = "Ez egy példa szöveg, amely legalább húsz karakterből áll.";

// 1. Írasd ki a konzolba az első 5 karaktert
console.log(txt.substring(0, 5)); 

// 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
console.log(txt.substring(2, 8)); 

// 3. Írasd ki a konzolba az 5. karaktertől a végéig
console.log(txt.substring(4)); 
// 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
console.log(txt.substring(4, 10));

// 5. Írasd ki a konzolba a txt-t nagybetűkkel
console.log(txt.toUpperCase()); 

// 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
let everySecondUpper = txt.split('').map((char, index) => {
    return index % 2 === 1 ? char.toUpperCase() : char;
}).join('');
console.log(everySecondUpper);

// 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
let replacedE = txt.replace(/e/g, 'E');
console.log(replacedE);

// 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Írasd ki a tömböt.
let splitArray = txt.split('e');
console.log(splitArray);
