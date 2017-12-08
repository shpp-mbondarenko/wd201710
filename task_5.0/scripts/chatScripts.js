const baseHref = getBaseHref();
const userLogin = getCookie('user');

$(document).ready(function () {
  log('userLogin ' + userLogin);
  // writeMessageInJSON(userLogin, 'test message');
  initHistory();
  // log('Hello date - ' + date);
  // log('Hello date2 - ' + new Date(date));
  if (getCookie('user') == '' && getCookie('password') == '') {
    window.location = baseHref;
  }

  // log('cookie user = ' + getCookie('user'));
  // log('cookie pswd = ' + getCookie('password'));
  // deleteCookie('user');

  //on enter press - send message
  $("#inputSendMessage").keyup(function (event) {
    if (event.keyCode === 13) {
      let str = $('#inputSendMessage').val();
      sendMessage(str);
    }
  });

  $("#buttonSendMessage").click(function () {
    let str = $('#inputSendMessage').val();
    sendMessage(str);
  });

  updateScroll();
});


function sendMessage(msg = '') {
  var messageDiv = $('<div></div>');
  var messageP = $('<p></p>');
  var messageArea = $('#messagesAreaId');
  if (msg == '') {
    showHint('Message is empty..');
    return;
  }
  msg = escapeHtml(msg);
  $(messageDiv).addClass('myMessage');
  messageP.text(msg);
  messageDiv.append(messageP);
  messageArea.append(messageDiv);
  updateScroll();
}

//initialize history
function initHistory() {
  let user = getCookie('user');
  let messageArea = $('#messagesAreaId');
  $.getJSON('json/chatHistory.json', function (obj) {
    //if JSON empty - add new user
    if (obj.length == 0) {
      showHint('No history!');
      return;
    }
    let now = new Date();
    let msgDate;
    for (let val of obj) {
      let messageDiv = $('<div></div>');
      let messageP = $('<p></p>');
      msgDate = new Date(val['date']);
      log('data difference - ' + (now - msgDate) / 1000 / 60);
      if (((now - msgDate) / 1000 / 60) > 60) {
        log('skip this record');
        continue;
      }
      if (user === val['name']) {
        $(messageDiv).addClass('myMessage');
      } else {
        $(messageDiv).addClass('messageToMe');
      }
      messageP.text(val['msg']);
      messageDiv.append(messageP);
      messageArea.append(messageDiv);
      log('val[name] - ' + val['name']);
      log('val[msg] - ' + val['msg']);
      log('val[date] - ' + val['date']);
    }
    updateScroll();
  });
}

//write into file messsage
function writeMessageInJSON(user, msg) {
  log('IN writeMessageInJSON');
  let date = new Date().toString().substring(4, 21);
  let dataString =
    'user=' + user +
    '&msg=' + msg +
    '&date=' + date;

  // AJAX Code To Submit Form.
  $.ajax({
    type: 'POST',
    url: 'writeInChatJSON.php',
    data: dataString,
    cache: false,
    success: function (result) {
      showHint('History is saved - ' + result + '!');
    }
  });
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
  let d = 30000;
  $('#hint').text(msg);
  setTimeout(() => {
    $('#hint').text('').fadeIn();
  }, d + 1000);
  $('#hint').delay(d).fadeOut();
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