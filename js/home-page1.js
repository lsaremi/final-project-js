function updateClock() {
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    clockElement.textContent = `${formattedHours}:${formattedMinutes}`;
  }
}

setInterval(updateClock, 1000);
updateClock();
