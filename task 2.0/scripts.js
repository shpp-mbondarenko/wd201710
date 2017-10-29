$( document ).ready(function() {
    console.log( "ready!" );
    //t1();
    //t2();
    //t3();
});

function t1 () {
  var a = -1000;
  var s = 0;
  while (a < 1001) {
    s += a;
    a++;
    //console.log("a=" + a);
  }
  $(".result_1").text("Сумма = " + s);
}

function t2 () {
  var a = -1000;
  var s = 0;
  while (a < 0) {
    a += 3;
    s += a;
    console.log("a=" + a);
    a += 4;
    s += a;
    console.log("a=" + a);
    a++;
    s += a;
    console.log("a=" + a);
    a += 2;
    console.log("a=" + a + "--------------");
  }
  while (a < 1000) {
    a += 2;
    s += a;
    console.log("a=" + a);
    a += 1;
    s += a;
    console.log("a=" + a);
    a += 4;
    s += a;
    console.log("a=" + a);
    a += 3;
    console.log("a=" + a + "--------------");
  }
  $(".result_2").text("Сумма чисел зак. на 2,3,7 = " + s);
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
  $(".result_3").html("<ul>"+res+"</ul>");
}

function t4() {
  var hou = 0, min = 0, sec = 0, remainder = 0;
  //get val from input
  var i = parseInt($("#sec_to_format_4").val());
  if(!isNaN(parseFloat(i)) && isFinite(i)){
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
    $(".result_4").text("Result is: " + hou + ":"
    + min + ":" + sec + "");
  } else {
    $(".result_4").text("Wrong type of input");
    $("#sec_to_format_4").value = '';
    return;
  }
}

function t5() {
  //get val from input
  var i = parseInt($("#years5").val());
  var word = "";
  var y = i;
  if(!isNaN(parseFloat(i)) && isFinite(i)){
    // год года
    i = Math.abs(i);
    if (i >= 5 && i <= 21) {
      word = "год!";
        $(".result_5").text("Result: Вам " + y + " " + word);
        return;
    }
    i %= 10;
    if (i == 2 || i == 3 || i == 4) {
      word = "года!";
    } else {
      word = "год!";
    }

    $(".result_5").text("Result: Вам " + y + " " + word);
  } else {
    $(".result_5").text("Wrong type of input");
    return;
  }
}

function t6() {

}

function t10() {
  var s = 0;
  var i = $("#num10").val().toString();
  console.log("i=" + i);
    for (var j = 0; j < i.length; j++) {
      s += (+(i).charAt(j));
    }
    if (!isNaN(s)) {
      $(".result_10").text("Sum is " + s);
    } else {
      $(".result_10").text("Wrong input");
    }

}
