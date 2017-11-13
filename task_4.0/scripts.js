function sendData() {
  //отправляю POST запрос и получаю ответ
  console.log("in send data");
  var radioValue;
  var radios = document.getElementsByName('choosePokemon');
  for (var i = 0, length = radios.length; i < length; i++) {
   if (radios[i].checked) {
    radioValue = radios[i].value;
    break;
   }
  }
  console.log("in2 send data", radioValue);
  var response = document.getElementById("info");
  // AJAX Code To Submit Form.
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      response.innerText = this.responseText;
      window.setTimeout(clearText, 4000);
    }
  };
  xhttp.open("GET", "voteHandler.php?pokemon=" + radioValue, true);
  xhttp.send();
}

function clearText() {
  document.getElementById("info").innerText = "";
}