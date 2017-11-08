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
  $('.chosenOption').text("Choose pokemon...");
  $('.clearSelection').css('visibility', 'hidden');
  $('#headImg').attr("src", "img\/pokeball.png");
}

function chooseOptions(str) {
  $('.chosenOption').text(str);
  $('#headImg').attr("src", "img\/"+str.toLowerCase()+".png");
  $('.clearSelection').css('visibility', 'visible');
  $(".dispNone").slideToggle(500);
}

function onDivClick(element) {
  chooseOptions($(element).find(".CSItem").html());
}