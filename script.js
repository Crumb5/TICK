// script.js
function generateDiscordTimestamp(date) {
    return `<t:${Math.floor(date.getTime() / 1000)}:f>`;
}


// test
var counter;
var date = new Date();

updateInputFields()

var inputElements = document.querySelectorAll('.slider');

inputElements.forEach(function(slug){
    slug.oninput = function(){
        console.log('Log:', (this.id).replace('Slider', ''));
        slugSlide(this, (this.id).replace('Slider', ''));
    };
    slug.onchange = function(slug){
        this.value = 0;
        console.log("On Changed!");
        clearInterval(counter);
    };
});

function slugSlide(slugSliderElement, slugDatePart){

    if (counter !== null) {
        clearInterval(counter);
    }

    minRate = 700
    maxRate = 50
    currRate = (1 - (Math.abs(slugSliderElement.value) / slugSliderElement.max)) * (minRate - maxRate) + maxRate;

    counter = setInterval(() => {
        if (slugSliderElement.value > 0) {
            slugDisplayUpdate(slugDatePart,1)
        } else if (slugSliderElement.value < 0) {
            slugDisplayUpdate(slugDatePart,-1)
        } else {
            clearInterval(counter);
        }
        updateInputFields()
    }, currRate);
}


function slugDisplayUpdate(slugDatePart, incrementBy) {
    switch (slugDatePart) {
        case 'year':
            date.setFullYear(date.getFullYear() + incrementBy);
            break;
        case 'month':
            date.setMonth(date.getMonth() + incrementBy);
            break;
        case 'day':
            date.setDate(date.getDate() + incrementBy);
            break;
        case 'hour':
            date.setHours(date.getHours() + incrementBy);
            break;
        case 'minute':
            date.setMinutes(date.getMinutes() + incrementBy);
            break;
        case 'second':
            date.setSeconds(date.getSeconds() + incrementBy);
            break;
        default:
            console.log('Invalid date part:', slugDatePart);
    }
}

function updateInputFields() {
    var yearInput = document.getElementById("yearInput");
    var monthInput = document.getElementById("monthInput");
    var dayInput = document.getElementById("dayInput");
    var hourInput = document.getElementById("hourInput");
    var minuteInput = document.getElementById("minuteInput");
    var secondInput = document.getElementById("secondInput");

    yearInput.value = date.getFullYear();
    monthInput.value = date.getMonth() + 1;
    dayInput.value = date.getDate();
    hourInput.value = date.getHours();
    minuteInput.value = date.getMinutes();
    secondInput.value = date.getSeconds();
}

function generateAndShowTimestamp() {
    if (isNaN(date.getTime())) {
        alert('Please enter a valid date and time.');
        return;
    }
    var discordTimestamp = generateDiscordTimestamp(date);
    document.getElementById('timestamp').innerText = discordTimestamp;
}



