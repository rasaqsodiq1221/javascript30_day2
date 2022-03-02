
const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hourHand = document.querySelector('.hourHand');
const hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();  //get current date
 
  //get seconds, minute and hr from current date
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hr = now.getHours();

  /*
  convert the time to degree
   60sec = 360deg,
   Xdeg = (currentsec * 360deg) / 60sec = currentsec * 6,
   same goes to hour and minute
   */

  const secondsDegrees = secs * 6;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = mins * 6;
  minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = hr * 30;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(secondsDegrees === 360) {
    hands.forEach(hand => hand.style.transition = 'none');
  } else if (secondsDegrees === 0) {
  hands.forEach(hand => hand.style.transition = 'none')}
  else {
    hands.forEach(hand => hand.style.transition = '')
  }
  

}

setInterval(setDate, 1000);

setDate(); 