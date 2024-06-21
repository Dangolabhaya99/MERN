document.addEventListener('DOMContentLoaded', function () {
    const modeButton = document.getElementById('mode-button');

    modeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
