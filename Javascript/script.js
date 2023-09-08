const daysText = $("#days");
const hoursText = $("hours");
const minutesText = $("#minutes");
const secondsText = $("#seconds");

const countDownDate = new Date("Oct 1, 2023 00:00:00").getTime();
const x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysText.html(days);
  hoursText.html(hours);
  minutesText.html(minutes);
  secondsText.html(seconds);

  if (distance < 0) {
    clearInterval(x);
    daysText.html("00");
    hoursText.html("00");
    minutesText.html("00");
    secondsText.html("00");
  }
}, 1000);
