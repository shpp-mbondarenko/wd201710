$(document).ready(function(){
  $(".dispNone").hide();

  $(".dispNone").hover(
    function() {
      $(".greyimg", this).attr("class", "nogreyimg");
    }, function() {
      $(".nogreyimg", this).attr("class", "greyimg");
    }
  );

});

function showOptions() {
  $(".dispNone").slideToggle(500);
}

function outOptions() {
    $(".dispNone").hide();
}

function clearSelection() {
  $('.chosenOption').text("Choose option...");
  $('.clearSelection').css('visibility', 'hidden');
  $('#headImg').attr("src", "img\/pokeball.png");
}

function chooseOptions(str) {
  $('.chosenOption').text(str);
  var u = "img\/"+str.toLowerCase()+".png";
  $('#headImg').attr("src", "img\/"+str.toLowerCase()+".png");
  $('.clearSelection').css('visibility', 'visible');
  $(".dispNone").slideToggle(500);
}
