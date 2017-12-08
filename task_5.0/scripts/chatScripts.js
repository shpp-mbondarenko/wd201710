const baseHref = getBaseHref();

$(document).ready(function () {
  log('Hello');
  if (getCookie('user') == '' && getCookie('password') == '') {
    window.location = baseHref;
  }

  log('cookie user = ' + getCookie('user'));
  log('cookie pswd = ' + getCookie('password'));
  // deleteCookie('user');

  //on enter press - send message
  $("#inputSendMessage").keyup(function (event) {
    log('in enter');
    if (event.keyCode === 13) {
      log('in enter2');
      sendMessage();
    }
  });

  $("#buttonSendMessage").click(function () {
    log('in enter3');
    sendMessage();
  });

  updateScroll();
});

function sendMessage() {
  let msg = $('#inputSendMessage').val();
  if (msg == '') {
    return;
  }
  msg = escapeHtml(msg);
  log('escaped string - ' + msg);
}

//replace html tags
var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

//put data in Cookie
function setCookie(cname, cvalue) {
  document.cookie = cname + '=' + cvalue + ';path=/';
}

//get data from Cookie
function getCookie(cname) {
  let name = cname + '=';
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
  return '';
}

//delete cookie
function deleteCookie(cname) {
  document.cookie = cname + '=; path=/;';
}

//keep sroll at the bottom
function updateScroll() {
  var element = document.getElementById('messagesAreaId');
  element.scrollTop = element.scrollHeight;
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