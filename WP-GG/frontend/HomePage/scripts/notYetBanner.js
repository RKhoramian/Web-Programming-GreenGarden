let countdown;
let timeLeft = 3; // زمان تایمر به ثانیه

function startTimer() {
    timeLeft = 3; // مقدار اولیه تایمر
    document.getElementById('time').textContent = timeLeft;

    countdown = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = "#"; // لینک صفحه مقصد
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}
