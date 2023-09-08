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

  if (days < 10) {
    daysText.html(`0${days}`);
  } else {
    daysText.html(days);
  }

  if (hours < 10) {
    hoursText.html(`0${hours}`);
  } else {
    hoursText.html(hours);
  }

  if (minutes < 10) {
    minutesText.html(`0${minutes}`);
  } else {
    minutesText.html(minutes);
  }

  if (seconds < 10) {
    secondsText.html(`0${seconds}`);
  } else {
    secondsText.html(seconds);
  }

  if (distance < 0) {
    clearInterval(x);
    daysText.html("00");
    hoursText.html("00");
    minutesText.html("00");
    secondsText.html("00");
  }
}, 1000);
