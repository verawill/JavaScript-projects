const hourE1 = document.querySelector(".hour")
const secondE1 = document.querySelector(".second")
const minuteE1 = document.querySelector(".minute")

function updateClock(){
    const currentDate = new Date();
    setTimeout(updateClock,1000);

    const hour = currentDate.getHours();
    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();

    const hourDegree = (hour / 12) * 360;
    const minuteDegree = (minute / 60) * 360;
    const secondDegree = (second / 60) * 360;
    hourE1.style.transform = `rotate(${hourDegree}deg)`;
    secondE1.style.transform = `rotate(${minuteDegree}deg)`;
    minuteE1.style.transform = `rotate(${secondDegree}deg)`;

}
updateClock();