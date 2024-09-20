const decreasebutton = document.getElementById('buttonminus');
const resetbutton = document.getElementById('buttonreset');
const increasebutton = document.getElementById('buttonplus');
const counter = document.getElementById('counter');

let count = 0;

increasebutton.onclick = function() {
    count++;
    counter.textContent = count;
}

resetbutton.onclick = function() {
    count = 0;
    counter.textContent = count;
}

decreasebutton.onclick = function() {
    count--;
    counter.textContent = count;
}
