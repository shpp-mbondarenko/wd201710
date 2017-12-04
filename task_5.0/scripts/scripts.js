$('#loginButton').click(function() {
  console.log("in func!");
  $.getJSON("json/users.json", function(obj) {
    $.each(obj, function(key,val) {
      $('#hint').append("<p>"+ val.name +"</p>");
    });
  });
});
