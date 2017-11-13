$(document).ready(function(){

  var arr = ['item1', 'item2', 'item3', 'item4', 'item5'];
  var container = $('#container');
  createSelect(arr, container);


  $(".dispNone").hide();

  $(".dispNone").hover(
    function() {
      $(".greyimg", this).attr("class", "nogreyimg");
    }, function() {
      $(".nogreyimg", this).attr("class", "greyimg");
    }
  );

});

//arr - input datf
//parent in which container to put select
function createSelect(arr, parent) {
  //create header of select
  var customSelectDiv = $('<div class="customSelect"></div>');
  var cSHeaderDiv = $('<div class="CSHeader"></div>');
  cSHeaderDiv.append('<img id="headImg" src="img/pokeball.png">');
  cSHeaderDiv.append('<p class="chosenOption" onclick="showOptions()">Choose item...</p>');
  cSHeaderDiv.append('<p class="clearSelection" onclick="clearSelection()">&#215;</p>');
  cSHeaderDiv.append('<p onclick="showOptions()">&#9660;</p>');
  customSelectDiv.append(cSHeaderDiv);
  //add elements to custom select
  var optionsDiv = $('<div class="options"></div>');
  for (var i = 0, len = arr.length; i < len; i++) {
    var itemDiv = $('<div class="dispNone" onclick="onOptionClick(this)"></div>');
    itemDiv.append('<img class="greyimg" src="img/pikachu.png">');
    itemDiv.append('<p onclick="" class="CSItem">' + arr[i] +'</p>');
    optionsDiv.append(itemDiv);    
  }  
  customSelectDiv.append(optionsDiv);
  parent.append(customSelectDiv);
  parent.addClass('container');
}

function showOptions() {
  $(".dispNone").slideToggle(500);
}

//if mouse out of list
function outOptions() {
    $(".dispNone").hide();
}

function clearSelection() {
  $('.chosenOption').text("Choose item...");
  $('.clearSelection').css('visibility', 'hidden');
  $('#headImg').attr("src", "img\/pokeball.png");
}

//selecting option
function onOptionClick(element) {
  let str = $(element).find(".CSItem").html();
  $('.chosenOption').text(str);
  // $('#headImg').attr("src", "img\/" + str.toLowerCase() + ".png");
  $('#headImg').attr("src", "img\/pokeball.png");
  $('.clearSelection').css('visibility', 'visible');
  $(".dispNone").slideToggle(500);
}