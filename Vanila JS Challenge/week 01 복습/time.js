var countDownDate = new Date("dec 25,2020 00:00:00+0900").getTime();

var x = setInterval(function () {
  //currentTime
  var now = new Date().getTime();

  //종료일자에서 현재일자를 뺀 시간
  var distance = countDownDate - now;

  //각 변수에 일,시,분,초 등록
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("d-day").innerHTML =
    `${day}` + " day " + hour + " hour " + min + " min " + sec + " sec";
});
