function countDown() {
  const deadline = new Date("January 1, 2022 00:00:00");
  const today = new Date();

  const difference = deadline - today;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let dayValue = Math.floor(difference / day);
  let hourValue = Math.floor((difference % day) / hour);
  let minuteValue = Math.floor((difference % hour) / minute);
  let secondsValue = Math.floor((difference % minute) / second);

  let dayInput = document.getElementById("days");
  let hourInput = document.getElementById("hours");
  let minuteInput = document.getElementById("minutes");
  let secondsInput = document.getElementById("seconds");

  let dayVal = dayInput.textContent;
  let hourVal = hourInput.textContent;
  let minuteVal = minuteInput.textContent;

  dayValue < 10
    ? (dayInput.textContent = `0${dayValue}`)
    : (dayInput.textContent = dayValue);
  hourValue < 10
    ? (hourInput.textContent = `0${hourValue}`)
    : (hourInput.textContent = hourValue);
  minuteValue < 10
    ? (minuteInput.textContent = `0${minuteValue}`)
    : (minuteInput.textContent = minuteValue);
  secondsValue < 10
    ? (secondsInput.textContent = `0${secondsValue}`)
    : (secondsInput.textContent = secondsValue);

  let dayFlip = dayInput.textContent;
  let hourFlip = hourInput.textContent;
  let minuteFlip = minuteInput.textContent;

  dayVal !== dayFlip
    ? dayInput.parentElement.classList.add("flip-leaf")
    : dayInput.parentElement.classList.remove("flip-leaf");
  hourVal !== hourFlip
    ? hourInput.parentElement.classList.add("flip-leaf")
    : hourInput.parentElement.classList.remove("flip-leaf");
  minuteVal !== minuteFlip
    ? minuteInput.parentElement.classList.add("flip-leaf")
    : minuteInput.parentElement.classList.remove("flip-leaf");
}

setInterval(countDown, 1000);
