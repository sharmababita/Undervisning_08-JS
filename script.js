//console referer til inspiser vinduet. log gir en beskjed til console

console.log('Hello!');

// Datatyper:

// string= streng/tekst

// number= tall
// bolean = true/false verdi sant/usant verdi

// variabler:
// let= kan bytte  verdi
// const= ikke bytte verdi

// Erklæer en variabel:
//let ? = ?

let userName ="Babita";
console.log(userName);
userName = "Julius";
console.log(userName);

let userAge= 32;
console.log(userAge);
userAge= 28;
console.log(userAge);

let userPresent= true;
console.log(userPresent);

userPresent= false;
console.log(userPresent);


const firstName= "Babita";
const lastName= "Sharma";
const fullName= firstName +  " " + lastName  + "!"; // variable chaining
const wholeName = `${firstName} ${lastName}!`; // Template litteral
console.log(fullName);

function businessCard() {
 const firstName="Babita";
 const lastName= "Sharma";
 console.log(lastName);
}
 businessCard()


function myCard() {
 const firstName = "Babita";
    const lastName = " Sharma";
    const fullName = `${firstName} ${lastName}!`;
    console.log(fullName);

    //Mer om dette på tirsdag
    
    const body = document.querySelector("h1");
    body.textContent = fullName;
}
myCard()









