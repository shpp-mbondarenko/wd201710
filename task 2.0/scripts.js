$( document ).ready(function() {
    console.log( "ready!" );
    //t1();
    //t2();
    //t3();
    //t4();
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
  var hou = 0, min = 0, sec = 0;
  //get val from input
  var i = parseInt($("#sec_to_format_4").val());
  console.log(i + " - value " + typeof(i));
  if(!isNaN(parseFloat(i)) && isFinite(i)){
    hou = i/60;
    i -= hou*60;
    min = i/60;
    i -= min*60;
    sec = i;

    $(".result_4").text("result is: " + hou + ":"
    + min + ":" + sec + "");
  } else {
    $(".result_4").text("Wrong type of input");
    return;
  }
}
