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

// slider

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const handle = document.getElementById('handle');
    let isDragging = false;

    handle.addEventListener('mousedown', function(e) {
        isDragging = true;
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            let sliderRect = slider.getBoundingClientRect();
            let newTop = e.clientY - sliderRect.top - (handle.offsetHeight / 2);
            if (newTop < 0) newTop = 0;
            if (newTop > slider.offsetHeight - handle.offsetHeight) newTop = slider.offsetHeight - handle.offsetHeight;
            handle.style.top = newTop + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            handle.style.top = '50%';
            handle.style.transform = 'translateY(-50%)';
            isDragging = false;
        }
    });
});
