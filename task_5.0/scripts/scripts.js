const baseHref = getBaseHref();

$(document).ready(function () {
  $('#loginButton').click(function () {
    login();
  });
});

function login() {
  // show spining stuff - will come soon
  let user = $('#inputName').val().replace(' ', ''), pswd = $('#inputPassword').val().replace(' ', '');
  var isFindUser = false;
  if (user == '' || pswd == '') {
    showHint('Empty user name or password..');
    return;
  }
  $.getJSON('json/users.json', function (obj) {
    //if JSON empty - add new user
    if (obj.length == 0) {
      saveUser(user, pswd);
      return;
    }
    for (let i = 0, len = obj.length; i < len; i++) {
      log('i= ' + i + 'obj=' + obj[i].name);
      if (user === obj[i].name && pswd === obj[i].password) {
        showHint('You are login!');
        //setting up  cookie
        setCookie('user', user);
        setCookie('password', pswd);
        window.location.href = baseHref + 'chat.html';
        return;
      }
    }
    //if user didnt exist - add new one
    if (!isFindUser && obj.length != 0) {
      saveUser(user, pswd);
      return;
    }
  });
}

function saveUser(user, pswd) {
  var dataString =
    'user=' + user +
    '&pswd=' + pswd;

  // AJAX Code To Submit Form.
  $.ajax({
    type: 'POST',
    url: 'saveUser.php',
    data: dataString,
    cache: false,
    success: function (result) {
      showHint('User added - ' + result + '!');
    }
  });
}

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