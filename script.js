// script.js
function generateDiscordTimestamp(date) {
    return `<t:${Math.floor(date.getTime() / 1000)}:f>`;
}

function generateAndShowTimestamp() {
    var input = document.getElementById('datetimeInput').value;
    var date = new Date(input);
    if (isNaN(date.getTime())) {
        alert('Please enter a valid date and time.');
        return;
    }
    var discordTimestamp = generateDiscordTimestamp(date);
    document.getElementById('timestamp').innerText = discordTimestamp;
}

// test

var slider = document.getElementById("mySlider");
var sliderValue = document.getElementById("sliderValue");
var resultValue = document.getElementById("resultValue");
var counter;
var date = new Date();

function updateTimeDisplay() {
    var date = new Date();
    resultValue.innerHTML = date.toLocaleString();
}

function populateDateInputs(date) {
    document.getElementById('yearInput').value = date.getFullYear();
    document.getElementById('monthInput').value = date.getMonth() + 1;
    document.getElementById('dayInput').value = date.getDate();
    document.getElementById('hourInput').value = date.getHours();
    document.getElementById('minuteInput').value = date.getMinutes();
    document.getElementById('secondInput').value = date.getSeconds();
}

populateDateInputs(new Date());

updateTimeDisplay();

resultValue.innerHTML = date.toLocaleString();

slider.oninput = function() {

    sliderValue.innerHTML = this.value;

    if (counter !== null) {
        clearInterval(counter);
    }

    minRate = 700
    maxRate = 50
    currRate = (1 - (Math.abs(this.value) / slider.max)) * (minRate - maxRate) + maxRate;

    counter = setInterval(() => {
        if (this.value > 0) {
            date.setMinutes(date.getMinutes() + 1);
        } else if (this.value < 0) {
            date.setMinutes(date.getMinutes() - 1);
        } else {
            clearInterval(counter);
        }
        resultValue.innerHTML = date.toLocaleString();
        console.log("Current Rate:", currRate);
    }, currRate);
};

slider.onchange = function() {
    this.value = 0;
    console.log("On Changed!");
    clearInterval(counter);
    sliderValue.innerHTML = this.value;
};









