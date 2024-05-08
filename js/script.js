const distance = Number.parseInt(prompt('Inserisci il numero di km che vuoi percorrere'));
const userAge = Number.parseInt(prompt('Inserisci la tua età'));
const ticketFullPrice = distance * 0.276;
let ticketPrice;

if (userAge < 18){
    ticketPrice = ticketFullPrice - ((ticketFullPrice / 100) * 21);
} else if (userAge >= 65) {
    ticketPrice = ticketFullPrice - ((ticketFullPrice / 100) * 42);
} else {
    ticketPrice = ticketFullPrice;
}

console.log(ticketPrice.toFixed(2) + '€');

document.getElementById('distance-km').innerHTML = distance + ' km';
document.getElementById('user-age').innerHTML = userAge + ' anni';

if (userAge < 18 || userAge >= 65){
    document.getElementById('user-discount').innerHTML = 'Sì';
} else {
    document.getElementById('user-discount').innerHTML = 'No';
}

document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed(2) + ' €';