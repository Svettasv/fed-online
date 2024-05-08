window.onload = function () {
  let startBtn = document.querySelector(".start");
  let resetBtn = document.querySelector(".reset");
  let secondsId = document.querySelector(".seconds");
  let minutesId = document.querySelector(".minutes");
  let counterSeconds = 60;
  let counterMinutes = 25;
  let intervalID;
  let intervalMinId;

  function countSec() {
    counterSeconds--;
    secondsId.innerHTML =
      counterSeconds < 10 ? "0" + counterSeconds : counterSeconds;
    if (counterSeconds === 0) {
      clearInterval(intervalID);
      secondsId.innerHTML = "00";
      counterSeconds = 60;
      intervalID = setInterval(countSec, 1000);
    }
  }

  function countMin() {
    counterMinutes--;
    minutesId.innerHTML =
      counterMinutes < 10 ? "0" + counterMinutes : counterMinutes;
    if (counterMinutes < 0) {
      clearInterval(intervalID);
      clearInterval(intervalMinId);
      secondsId.innerHTML = "00";
      minutesId.innerHTML = "00";
    }
  }

  startBtn.addEventListener("click", function () {
    intervalID = setInterval(countSec, 1000);
    intervalMinId = setInterval(countMin, 60000);
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(intervalID);
    clearInterval(intervalMinId);
    secondsId.innerHTML = "00";
    minutesId.innerHTML = "25";
    counterSeconds = 60;
    counterMinutes = 25;
  });
};
