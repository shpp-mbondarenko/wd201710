document.addEventListener('DOMContentLoaded', function(){

});

function countSum() {
  var startNum = -1000;
  var finalSum = 0;
  while (startNum <= 1000) {
    finalSum += startNum;
    startNum++;
  }
  document.getElementById("result_1").innerText = "Сумма = " + finalSum;
}

// function t2() {
//   var t0 = performance.now();
//   var a = -1000;
//   var s = 0;
//     while (a < 1000) {
//       if (Math.abs(a%10) == 2 || Math.abs(a%10) == 3 || Math.abs(a%10) == 7) {
//         s += a;
//         // console.log("a="+a);
//         a++;
//       } else {
//         a++;
//       }
//     }
//     document.getElementById("result_2").innerText = "Сумма чисел зак. на 2,3,7 = " + s;
//     var t1 = performance.now();
//     console.log("Call to t2 took " + (t1 - t0) + " milliseconds.")
// }

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

function convertSeconds() {
  var hou = 0, min = 0, sec = 0, remainder = 0;
  //get val from input
  var i = document.getElementById("sec_to_format_4").value;
  if (i.length > 10) {
      document.getElementById("result_4").innerText = "Слишком большое число";
    return;
  }
  if(!isNaN(+(i))){
    // ask question about "78dfkjgh" !!!!
    i = Math.abs(i);
    if (i >= 60) {
      remainder = i % 60;
      min = (i - remainder) / 60;
      sec = remainder;
      if (min >= 60) {
        remainder = min % 60;
        hou = (min - remainder) / 60;
        min = remainder;
      }
    } else {
      sec = i;
    }
    if (hou < 10) { hou = "0" + hou.toString();    }
    if (min < 10) { min = "0" + min.toString();    }
    if (sec < 10) { sec = "0" + sec.toString();    }
    document.getElementById("result_4").innerText =
    "Результат: " + hou + ":"+ min + ":" + sec;
  } else {
    document.getElementById("result_4").innerText = "Неверные данные введены";
    return;
  }
}

function showYears() {
  //get val from input
  var i = document.getElementById("years5").value;
  var word = "";
  var y = i;
  if (i.length > 3) {
      document.getElementById("result_5").innerText = "Слишком большое число";
    return;
  }
  if(!isNaN(+(i))){
    i = Math.abs(i);
    if (i >= 5 && i <= 21) {
      word = "лет!";
        document.getElementById("result_5").innerText = "Результат: Вам " + y + " " + word;
        return;
    }
    i %= 10;
    if (i == 2 || i == 3 || i == 4) {
      word = "года!";
    } else {
      word = "лет!";
    }
    document.getElementById("result_5").innerText = "Результат: Вам " + y + " " + word;
  } else {
    document.getElementById("result_5").innerText = "Неверные данные";
    return;
  }
}

function calculatePeriod() {
  var startDate, startTime, endTime, endDate;
  startDate = new Date(document.getElementById("startDate6").value);
  startTime = document.getElementById("startTime6").value;
  endTime = document.getElementById("endTime6").value;
  endDate = new Date(document.getElementById("endDate6").value);
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

function showMyZodiac() {
  var date = new Date(document.getElementById("zodiac7").value);
  var img = "";
  var zodiacName = "";
  var z = ['Козерог', 'Водолей', 'Рыбы', 'Овен', 'Телец',
            'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец'];
  var d = [19, 19, 20, 20, 21, 21, 22, 23, 23, 22, 22, 21];
  var mo = +date.getMonth();
  var day = +date.getDate();
  var dat = new Date();
  dat.setDate(+day);
  dat.setFullYear(2020);
  dat.setMonth(+mo);
  date = dat;
  if ( dat == "Invalid Date") {
    document.getElementById("result_7").innerText = "Такой даты не существует!";
    console.log("HI");
    return;
  }
  zodiacName = z[mo];
  img = mo.toString();
  if (day > d[mo]) {
    zodiacName = z[mo + 1];
    img = (mo + 1).toString();
  }
  document.getElementById("result_7").innerHTML =
   "<img height='42' width='42' src='img\/" + img + ".png' alt='justtext'><p>" + zodiacName + "</p>";
}

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

function findEntranceAndFlor() {
  var resultEntrance = 0; resultFlor = 0;
  var f = document.getElementById("numOfFlat").value;
  var p = document.getElementById("numOfP").value;
  var e = document.getElementById("numOfE").value;
  var k = document.getElementById("numOfK").value;
  if (isNaN(+f) || isNaN(+p) || isNaN(+e) || isNaN(+k)) {
    document.getElementById("result_9").innerText =
            "Вы ввели неправильные данные";
    return;
  }
  if ((p * k * e) < f) {
    document.getElementById("result_9").innerText =
    "Этой квартиры не существует, введите меньшее число";
    return;
  }
  for (var i = 1; i <= p; i++) {
    if ((f <= (e * k * i)) && (f > (e * k * (i - 1)))) {
      resultEntrance = i;
      for (var j = 1; j <= e; j++) {
        var pp = e * k * (resultEntrance - 1);
        if (f <= pp + (k * j) && f > pp + (k * (j - 1))) {
          resultFlor = j;
        }
      }
    }
  }
  document.getElementById("result_9").innerText =
  "Вы живёте в подьезде по номером " + resultEntrance + ", на " + resultFlor + " этаже!";
}

function sumOfNums() {
  var s = 0;
  if (isNaN(+document.getElementById("num10").value)) {
    document.getElementById("result_10").innerText =
            "Вы ввели неправильные данные";
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
