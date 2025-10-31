(function () {
    var text = 'LUCKNOW TRADING HOUSE';
    var i = 0;
    var speed = 110; // typing speed in ms
    var loader = document.getElementById('typing-loader');
    var typingText = document.getElementById('typing-text');
    document.body.style.overflow = 'hidden';
    function typeChar() {
        if (i <= text.length) {
            typingText.textContent = text.substring(0, i);
            i++;
            setTimeout(typeChar, speed);
        } else {
            setTimeout(function () {
                loader.style.opacity = 0;
                loader.style.transition = 'opacity 0.5s';
                setTimeout(function () {
                    loader.style.display = 'none';
                    document.body.style.overflow = '';
                }, 500);
            }, 650);
        }
    }
    window.addEventListener('DOMContentLoaded', typeChar);
})();