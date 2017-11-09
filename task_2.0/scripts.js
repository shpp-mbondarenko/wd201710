document.addEventListener('DOMContentLoaded', function(){

});

function t1 () {
  var a = -1000;
  var s = 0;
  while (a < 1001) {
    s += a;
    a++;
  }
  document.getElementById("result_1").innerHTML = "Сумма = " + s;
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
//     document.getElementById("result_2").innerHTML = "Сумма чисел зак. на 2,3,7 = " + s;
//     var t1 = performance.now();
//     console.log("Call to t2 took " + (t1 - t0) + " milliseconds.")
// }

function t2() {
  var t0 = performance.now();
  var a = -1000, s = 0, tmp = 0;
    for (; a < 1000; a++) {  
      tmp = (a % 10);
      tmp = tmp < 0 ? tmp*(-1) : tmp;
      if (tmp == 2 || tmp == 3 || tmp == 7) {
        s += a;
      } 
    }
  var t1 = performance.now();
  document.getElementById("result_2").innerHTML = "Сумма чисел зак. на 2,3,7 = " + s;
  console.log("Call to t2 took " + (t1 - t0) + " milliseconds.")
}

function t3() {
  var asterisk = "";
  var res = "";
  for (var i = 1; i <= 50; i++) {
    for (var j = 1; j <= i; j++) {
      asterisk += "* ";
    }
    res += "<li>"+asterisk+"</li>";
    asterisk = "";
  }
  document.getElementById("result_3").innerHTML = "<ul>"+res+"</ul>";
}

function t4() {
  var hou = 0, min = 0, sec = 0, remainder = 0;
  //get val from input
  var i = document.getElementById("sec_to_format_4").value;
  if (i.length > 10) {
      document.getElementById("result_4").innerHTML = "Слишком большое число";
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
    document.getElementById("result_4").innerHTML =
    "Результат: " + hou + ":"+ min + ":" + sec;
  } else {
    document.getElementById("result_4").innerHTML = "Неверные данные введены";
    return;
  }
}

function t5() {
  //get val from input
  var i = document.getElementById("years5").value;
  var word = "";
  var y = i;
  if (i.length > 3) {
      document.getElementById("result_5").innerHTML = "Слишком большое число";
    return;
  }
  if(!isNaN(+(i))){
    i = Math.abs(i);
    if (i >= 5 && i <= 21) {
      word = "год!";
        document.getElementById("result_5").innerHTML = "Результат: Вам " + y + " " + word;
        return;
    }
    i %= 10;
    if (i == 2 || i == 3 || i == 4) {
      word = "года!";
    } else {
      word = "год!";
    }
    document.getElementById("result_5").innerHTML = "Результат: Вам " + y + " " + word;
  } else {
    document.getElementById("result_5").innerHTML = "Неверные данные";
    return;
  }
}

function t6() {
  var startDate, startTime, endTime, endDate;
  startDate = new Date(document.getElementById("startDate6").value);
  startTime = document.getElementById("startTime6").value;
  endTime = document.getElementById("endTime6").value;
  endDate = new Date(document.getElementById("endDate6").value);
  var years,mon,day,hou,min,sec;
  if (startDate.getFullYear() > 2200 || 2200 < endDate.getFullYear()) {
    document.getElementById("result_6").innerHTML = "Слишком большой год";
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
  // console.log("разница - " +diff);
  // console.log("ed - " +ed);
  // console.log("sd - " +sd);
  if (ed < sd) {
    diff = sd - ed;
  }
  // mon = Math.floor(diff/1000/60/60/24/30);
  years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
  // console.log("sec = "+sec+" min = " + min + " hou = " + hou + " days = "+ day +
  // " month = "+mon+ " years = "+years);
  diff = diff - years * 1000 * 60 * 60 * 24 * 365;
  // console.log("diff2="+diff);
  mon = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  diff = diff - mon * 1000 * 60 * 60 * 24 * 30;
  // console.log("diff3="+diff);
  day = Math.floor(diff / 1000 / 60 / 60 / 24);
  diff = diff - day * 1000 * 60 * 60 * 24;
  // console.log("diff4="+diff);
  hou = Math.floor(diff / 1000 / 60 / 60);
  diff = diff - hou * 1000 * 60 * 60;
  // console.log("diff5="+diff);
  min = Math.floor(diff / 1000 / 60);
  diff = diff - min * 1000 * 60;
  // console.log("diff6="+diff);
  sec = Math.floor(diff / 1000);
  diff = diff - sec * 1000;
  // console.log("diff7="+diff);
  document.getElementById("result_6").innerHTML = "Разница: Год = " + years
  + ", месяци = " + mon + ", дни = " + day + ", часы = " + hou + ", минуты = " + min + ", секунды = " + sec;
}

function t7() {
  var date = new Date(document.getElementById("zodiac7").value);
  var img = "";
  var zsign = "";
  var z = ['Козерог','Водолей','Рыбы','Овен','Телец',
            'Близнецы','Рак','Лев','Дева','Весы','Скорпион','Стрелец'];
  var d = [19,19,20,20,21,21,22,23,23,22,22,21];
  var mo = +date.getMonth();
  var day = +date.getDate();
  var dat = new Date();
  dat.setDate(+day);
  dat.setFullYear(2020);
  dat.setMonth(+mo);
  date = dat;
  if ( dat == "Invalid Date") {
    document.getElementById("result_7").innerHTML = "Такой даты не существует!";
    console.log("HI");
    return;
  }
  zsign = z[mo];
  img = mo.toString();
  if (day > d[mo]) {
    zsign = z[mo+1];
    img = (mo+1).toString();
  }
  document.getElementById("result_7").innerHTML =
   "<img height='42' width='42' src='img\/"+img+".png' alt='justtext'><p>"+zsign+"</p>";
}

function t8() {
    var res = "";
    var b = true;
    var wh = "<div class='chessW'></div>";
    var bl = "<div class='chessB'></div>";
    var row = document.getElementById("row8").value;
    var col = document.getElementById("col8").value;
    if (isNaN(+row) || isNaN(+col)) {
      document.getElementById("result_8").innerHTML = "Вы ввели не число.";
      return;
    }
    if (row > 100 || col > 100) {
      document.getElementById("result_8").innerHTML = "Слишком большое число.";
      return;
    }
    for (var i = 0; i < row; i++) {
      res += "<div style='display: flex;flex-direction:row;'>";
      if (col%2 == 0) {
        b = !b;
      }
      for (var j = 0; j < col; j++) {
        if (b) {
          res += bl;
          b = !b;
        } else {
          res += wh;
          b = !b;
        }
      }
      res += "</div>";
    }
    document.getElementById("result_8").innerHTML = res;
}

function t9() {
  var resP = 0; resE = 0;
  var f = document.getElementById("numOfFlat").value;
  var p = document.getElementById("numOfP").value;
  var e = document.getElementById("numOfE").value;
  var k = document.getElementById("numOfK").value;
  if (isNaN(+f) || isNaN(+p) || isNaN(+e) || isNaN(+k)) {
    document.getElementById("result_9").innerHTML =
            "Вы ввели неправильные данные";
    return;
  }
  if ((p*k*e) < f) {
    document.getElementById("result_9").innerHTML =
    "Этой квартиры не существует, введите меньшее число";
    return;
  }
  for (var i = 1; i <= p; i++) {
    if ((f <= (e*k*i)) && (f > (e*k*(i-1)))) {
      resP = i;
      for (var j = 1; j <= e; j++) {
        var pp = e*k*(resP-1);
        if (f <= pp+(k*j) && f > pp+(k*(j-1))) {
          resE = j;
        }
      }
    }
  }
  document.getElementById("result_9").innerHTML =
  "Вы живёте в подьезде по номером " + resP + ", на " + resE + " этаже!";
}

function t10() {
  var s = 0;
  if (isNaN(+document.getElementById("num10").value)) {
    document.getElementById("result_10").innerHTML =
            "Вы ввели неправильные данные";
    return;
  }
  var i = document.getElementById("num10").value.toString();
    for (var j = 0; j < i.length; j++) {
      s += (+(i).charAt(j));
    }
    if (!isNaN(s)) {
      document.getElementById("result_10").innerHTML = "Сумма = " + s;
    } else {
      document.getElementById("result_10").innerHTML = "Неверные данные";
    }
}

function t11() {
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
