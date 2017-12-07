const baseHref = getBaseHref();

$(document).ready(function () {
  if (getCookie('user') == '' && getCookie('password') == '') {
    window.location = baseHref;
  }


  log("cookie user = " + getCookie('user'));
  log("cookie pswd = " + getCookie('password'));
  // deleteCookie('user');
  // log("cookie user2 = " + getCookie('user'));
  // log("cookie pswd3 = " + getCookie('password'));
});

//put data in Cookie
function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

//get data from Cookie
function getCookie(cname) {
  let name = cname + "=";
  let cookiesArray = document.cookie.split(';');
  for (let i = 0, len = cookiesArray.length; i < len; i++) {
    let c = cookiesArray[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//delete cookie
function deleteCookie(cname) {
  document.cookie = cname + "=; path=/;";
}

//show user notifications
function showHint(msg) {
  $('#hint').text(msg);
  setTimeout(() => {
    $('#hint').text('').fadeIn();
  }, 3000);
  $('#hint').delay(2000).fadeOut();
}

function getBaseHref() {
  let str = window.location + '';
  let len = str.length;
  for (let i = len - 1; i > 0; i--) {
    if (str.charAt(i) == '/') {
      return str.slice(0, i + 1 - len);
    }
  }
  return '';
};


function log(str) {
  console.log(str);
}