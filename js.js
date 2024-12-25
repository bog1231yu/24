let timerInterval;

function setCustomTime() {
    const days = parseInt(prompt("Enter days:")) || 0;
    const hours = parseInt(prompt("Enter hours:")) || 0;
    const minutes = parseInt(prompt("Enter minutes:")) || 0;
    const seconds = parseInt(prompt("Enter seconds:")) || 0;

    const targetTime = Date.now() + (days * 24 * 60 * 60 * 1000) +
                        (hours * 60 * 60 * 1000) +
                        (minutes * 60 * 1000) +
                        (seconds * 1000);

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => updateTimer(targetTime), 1000);
}

function updateTimer(targetTime) {
    const currentTime = Date.now();
    const timeRemaining = targetTime - currentTime;

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        alert("Time's up!");
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}
