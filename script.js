const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hour = document.querySelector('.hour');

function setDate() {
  const now = new Date();

  const secs = now.getSeconds();
  const secondsDegrees = ((secs / 60) * 360) + 90;
  seconds.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((secs/60)*6) + 90;
  minutes.style.transform = `rotate(${minsDegrees}deg)`;

  const hr = now.getHours();
  const hourDegrees = ((hr / 12) * 360) + ((mins/60)*30) + 90;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();