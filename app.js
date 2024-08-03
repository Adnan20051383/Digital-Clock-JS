function updateClock() {
    const container = document.getElementById("container");
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    const partOfDay = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    if ((hours >= 6 && partOfDay === "PM") || hours < 6 && partOfDay === "AM") {
        container.classList.remove("dayPic")
        container.classList.add("nightPic");
    }
    else {
        container.classList.remove("nightPic");
        container.classList.add("dayPic");
    }
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    clock.textContent = `${hours}:${minutes}:${seconds}  ${partOfDay}`;
}
updateClock();
setInterval(updateClock, 1000);