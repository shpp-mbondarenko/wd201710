$(document).ready(function(){
  console.log("hi!");
  // $('#loginButton').click(login());
});

function login() {
  let user = $('#inputName').val();
  let pswd = $('#inputPassword').val();
  var isFindUser = false;
  console.log("in func! user - " + user+" pswd - "+pswd);
  $.getJSON("json/users.json", function(obj) {
    for (let i = 0, len = obj.length; i < len; i++) {
      console.log("i= "+ i+ "obj="+obj[i].name);
      if (user === obj[i].name && pswd === obj[i].password) {
          $('#hint').append('u are login!');
          isFindUser = true;
          console.log("isFindUser in "+ isFindUser);
          break;
        }
    }
    console.log("isFindUser out "+ isFindUser);
    if (!isFindUser) {
      //add new user
      saveUser(user, pswd);
    }
  });
  // let obj = $.getJSON("json/users.json");
  // console.log("object = "+obj);
  // console.log("object = "+obj.length);
}

function saveUser(user, pswd) {
  var dataString =
    'user='+ user +
    '&pswd='+ pswd;

    // AJAX Code To Submit Form.
  $.ajax({
      type: "POST",
      url: "saveUser.php",
      data: dataString,
      cache: false,
      success: function(result){
        $('#hint').append('<p>user added!'+ result+'</p>');
        setTimeout("$('#hint').text()",1000);
      }
  });
}
