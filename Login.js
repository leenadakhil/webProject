const pass_fill = document.querySelector('#Pass');
const showButton = document.querySelector('.show');
showButton.addEventListener('click', function () {
    if (pass_fill.type = "password") {
        pass_fill.type = "text";
        showButton.textContent = "Remove";
        showButton.style.color = "#3498db";

    } else {
        pass_fill.type = "password";
        showButton.textContent = "Show";
        showButton.style.color = "#fff";

    }
});