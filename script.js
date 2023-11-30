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

