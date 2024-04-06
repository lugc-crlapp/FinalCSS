let counter = 15;
const interval = setInterval(function() {
    document.getElementById('redirect-counter').textContent = --counter;
    if (counter <= 0) {
        clearInterval(interval);
        window.location.href = 'contact.html';
    }
}, 1000);