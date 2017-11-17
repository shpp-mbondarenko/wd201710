//t1
function countSum() {
  var startNum = -1000;
  var finalSum = 0;
  while (startNum <= 1000) {
    finalSum += startNum;
    startNum++;
  }
  document.getElementById("result_1").innerText = "Сумма = " + finalSum;
}

//t2
function countSumEndWith237() {
  var t0 = performance.now();
  var startNum = -1000, finalSum = 0, tmp = 0;
    for (; startNum < 1000; startNum++) {
      tmp = (startNum % 10);
      tmp = tmp < 0 ? tmp * (-1) : tmp;
      if (tmp == 2 || tmp == 3 || tmp == 7) {
        finalSum += startNum;
      }
    }
  var t1 = performance.now();
  document.getElementById("result_2").innerText = "Сумма чисел зак. на 2,3,7 = " + finalSum;
  console.log("Call to t2 took " + (t1 - t0) + " milliseconds.")
}
//t3
function drawStars() {
  var asterisk = "";
  var res = "";
  for (var i = 1; i <= 50; i++) {
    for (var j = 1; j <= i; j++) {
      asterisk += "* ";
    }
    res += "<li>" + asterisk + "</li>";
    asterisk = "";
  }
  document.getElementById("result_3").innerHTML = "<ul>" + res + "</ul>";
}
//t4
function convertSeconds() {
  var hou = 0, min = 0, sec = 0, remainder = 0;
  //get val from input
  var input = document.getElementById("sec_to_format_4").value;
  if (input.length > 10) {
      document.getElementById("result_4").innerText = "Слишком большое число";
    return;
  }
  if(!isNaN(+(input))){
    input = Math.abs(input);
    if (input >= 60) {
      remainder = input % 60;
      min = (input - remainder) / 60;
      sec = remainder;
      if (min >= 60) {
        remainder = min % 60;
        hou = (min - remainder) / 60;
        min = remainder;
      }
    } else {
      sec = input;
    }
    if (hou < 10) {hou = "0" + hou.toString();}
    if (min < 10) {min = "0" + min.toString();}
    if (sec < 10) {sec = "0" + sec.toString();}
    document.getElementById("result_4").innerText =
    "Результат: " + hou + ":"+ min + ":" + sec;
  } else {
    document.getElementById("result_4").innerText = "Неверные данные введены";
    return;
  }
}
//t5
function showYears() {
  //get val from input
  var input = document.getElementById("years5").value;
  var word = "";
  var y = input;
  if (input.length > 3) {
      document.getElementById("result_5").innerText = "Слишком большое число";
    return;
  }
  if(!isNaN(+(input))){
    input = Math.abs(input);
    if (input >= 5 && input <= 21) {
      word = "лет!";
        document.getElementById("result_5").innerText = "Результат: Вам " + y + " " + word;
        return;
    }
    input %= 10;
    if (input == 2 || input == 3 || input == 4) {
      word = "года!";
    } else {
      word = "год!";
    }
    document.getElementById("result_5").innerText = "Результат: Вам " + y + " " + word;
  } else {
    document.getElementById("result_5").innerText = "Неверные данные";
  }
}
//t6
function calculatePeriod() {
  var startDate, startTime, endTime, endDate;
  startDate = new Date(document.getElementById("startDate6").value);
  console.log(document.getElementById("startDate6").value);
  console.log(document.getElementById("startTime6").value);
  startTime = document.getElementById("startTime6").value;
  endTime = document.getElementById("endTime6").value;
  endDate = new Date(document.getElementById("endDate6").value);
  if (!(isValidDate(startDate)) || !(isValidDate(endDate))) {
      document.getElementById("result_7").innerText = "Не верные параметры!";
      return;
  }
  // if (!(isValidTime(startTime)) || !(isValidTime(endTime))) {
  //     document.getElementById("result_7").innerText = "Не верные параметры!";
  //     return;
  // }
  var years,mon,day,hou,min,sec;
  if (startDate.getFullYear() > 2200 || 2200 < endDate.getFullYear()) {
    document.getElementById("result_6").innerText = "Слишком большой год";
    return;
  }
  var startH = new Date("01/01/2007 " + startTime).getHours();
  var endH = new Date("01/01/2007 " + endTime).getHours();
  var startM = new Date("01/01/2007 " + startTime).getMinutes();
  var endM = new Date("01/01/2007 " + endTime).getMinutes();
  var startS = new Date("01/01/2007 " + startTime).getSeconds();
  var endS = new Date("01/01/2007 " + endTime).getSeconds();
  var sd = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(),
                      startH, startM, startS);
  var ed = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(),
                      endH, endM, endS);
  var diff = ed - sd;
  if (ed < sd) {
    diff = sd - ed;
  }
  years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
  diff = diff - years * 1000 * 60 * 60 * 24 * 365;
  mon = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  diff = diff - mon * 1000 * 60 * 60 * 24 * 30;
  day = Math.floor(diff / 1000 / 60 / 60 / 24);
  diff = diff - day * 1000 * 60 * 60 * 24;
  hou = Math.floor(diff / 1000 / 60 / 60);
  diff = diff - hou * 1000 * 60 * 60;
  min = Math.floor(diff / 1000 / 60);
  diff = diff - min * 1000 * 60;
  sec = Math.floor(diff / 1000);
  diff = diff - sec * 1000;
  document.getElementById("result_6").innerText = "Разница: Год = " + years
  + ", месяцы = " + mon + ", дни = " + day + ", часы = " + hou + ", минуты = " + min + ", секунды = " + sec;
}
//t7
function showMyZodiac() {
  var date = new Date(document.getElementById("zodiac7").value);
  if (!(isValidDate(date))) {
      document.getElementById("result_7").innerText = "Такой даты не существует!";
      return;
  }
  console.log("value of date ",document.getElementById("zodiac7").value);
  var img = "";
  var zodiacName = "";
  var zodiacArray = ['Козерог', 'Водолей', 'Рыбы', 'Овен', 'Телец',
            'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец'];
  var dayArray = [19, 19, 20, 20, 21, 21, 22, 23, 23, 22, 22, 21];
  var mo = +date.getMonth();
  var day = +date.getDate();
  var dat = new Date();
  dat.setDate(+day);
  dat.setFullYear(2020);
  dat.setMonth(+mo);
  date = dat;
  if ( dat == "Invalid Date") {
    document.getElementById("result_7").innerText = "Такой даты не существует!";
    return;
  }
  zodiacName = zodiacArray[mo];
  img = mo.toString();
  if (day > dayArray[mo]) {
    zodiacName = zodiacArray[mo + 1];
    img = (mo + 1).toString();
  }
  document.getElementById("result_7").innerHTML =
   "<img height='42' width='42' src='img\/" + img + ".png' alt='justtext'><p>" + zodiacName + "</p>";
}
//t8
function drawChessBoard() {
    var res = "";
    var boolVar = true;
    var wh = "<div class='chessW'></div>";
    var bl = "<div class='chessB'></div>";
    var row = document.getElementById("row8").value;
    var col = document.getElementById("col8").value;
    if (isNaN(+row) || isNaN(+col)) {
      document.getElementById("result_8").innerText = "Вы ввели не число.";
      return;
    }
    if (row > 100 || col > 100) {
      document.getElementById("result_8").innerText = "Слишком большое число.";
      return;
    }
    for (var i = 0; i < row; i++) {
      res += "<div style='display: flex;flex-direction:row;'>";
      if (col % 2 == 0) {
        boolVar = !boolVar;
      }
      for (var j = 0; j < col; j++) {
        if (boolVar) {
          res += bl;
          boolVar = !boolVar;
        } else {
          res += wh;
          boolVar = !boolVar;
        }
      }
      res += "</div>";
    }
    document.getElementById("result_8").innerHTML = res;
}
//t9
function findEntranceAndFlor() {
  var resultEntrance = 0; resultFlor = 0;
  var flat = document.getElementById("numOfFlat").value;
  var entrances = document.getElementById("numOfP").value;
  var flors = document.getElementById("numOfE").value;
  var flatsQuantity = document.getElementById("numOfK").value;
  if (isNaN(+flat) || isNaN(+entrances) || isNaN(+flors) || isNaN(+flatsQuantity)) {
    document.getElementById("result_9").innerText = "Вы ввели неправильные данные";
    return;
  }
  if (flat <= 0) {
    document.getElementById("result_9").innerText = "Вы ввели неправильные данные";
    return;
  }
  if ((entrances * flatsQuantity * flors) < flat) {
    document.getElementById("result_9").innerText =
    "Этой квартиры не существует, введите меньшее число";
    return;
  }
  for (var i = 1; i <= entrances; i++) {
    if ((flat <= (flors * flatsQuantity * i)) && (flat > (flors * flatsQuantity * (i - 1)))) {
      resultEntrance = i;
      for (var j = 1; j <= flors; j++) {
        var oneEntrance = flors * flatsQuantity * (resultEntrance - 1);
        if (flat <= oneEntrance + (flatsQuantity * j) && flat > oneEntrance + (flatsQuantity * (j - 1))) {
          resultFlor = j;
        }
      }
    }
  }
  document.getElementById("result_9").innerText =
  "Вы живёте в подьезде по номером " + resultEntrance + ", на " + resultFlor + " этаже!";
}
//t10
function sumOfNums() {
  var s = 0;
  if (isNaN(+document.getElementById("num10").value)) {
    document.getElementById("result_10").innerText = "Вы ввели неправильные данные";
    return;
  }
  var i = document.getElementById("num10").value.toString();
    for (var j = 0; j < i.length; j++) {
      s += (+(i).charAt(j));
    }
    if (!isNaN(s)) {
      document.getElementById("result_10").innerText = "Сумма = " + s;
    } else {
      document.getElementById("result_10").innerText = "Неверные данные";
    }
}
//t11
function editLinks() {
  var res = document.getElementById("links11").value.toString();
  res = res.replace(" ","");
  res = res.replace(/http(s?)\:\/\//gi, "");
  // res = res.replace(/http\:\/\//gi, "");
  var j = "";
  var str = res.split(",");
  str = str.sort();
  for (var i = 0; i < str.length; i++) {
    j += "<li>" + str[i] + "</li>";
  }
  document.getElementById("result_11").innerHTML = j;
}

function showMe(id) {
  var div = document.getElementById(id);
  div.style.display = div.style.display == "block" ? "none" : "block";
}

function isValidDate(val) {
  val = val + '';
  var val_r = val.split("-");
  var curDate = new Date(val_r[2], val_r[1], val_r[0]);
  return (
    curDate.getFullYear() == val_r[2]
    && curDate.getMonth() == val_r[1]
    && curDate.getDate() == val_r[0]
  );
}

function isValidTime(time) {
  time = time + '';
  var val_r = val.split(":");
  var curDate = new Date(val_r[2], val_r[1], val_r[0]);
  return (
    ((+val_r[2]) <= 23 && (+val_r[2]) >= 0)
    && ((+val_r[2]) <= 59 && (+val_r[1]) >= 0)
    && ((+val_r[2]) <= 59 && (+val_r[1]) >= 0)
  );
}
