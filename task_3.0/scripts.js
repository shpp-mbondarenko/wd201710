$(document).ready(function () {
  var arr = ['item1', 'item2', 'item3', 'item4', 'item5'];
  var container = $('#customSelect');
  createSelect(arr, container);

  $('.hiddenOption').hide();

  //if user clicks out of custom select when cs is visible
  $("body").click(function (event) {
    if (!$(event.target).is('.hiddenOption')
      && !$(event.target).is('.clickable')
      && !$(event.target).is('#headImg')) {
      if ($('.hiddenOption').is(':visible')) {
        $('.hiddenOption').slideToggle(500);
        console.log('in body');
      }
    }
  });

  $('#headImg').click(function (event) {
    showOptions();
  });

  $('.hiddenOption').click(function (event) {
    onOptionClick(event.target);
  })

  $('.hiddenOption').hover(
    function () {
      $('.greyimg', this).toggleClass('nogreyimg');
    }
  );

});

//arr - input data
//parent in which container to put select
function createSelect(arr, parent) {
  //add elements to custom select
  var optionsDiv = $('<div class="options"></div>');
  for (var i = 0, len = arr.length; i < len; i++) {
    var itemDiv = $('<div class="hiddenOption" ></div>');
    itemDiv.append('<img class="greyimg" src="img/pikachu.png">');
    itemDiv.append('<p class="CSItem">' + arr[i] + '</p>');
    optionsDiv.append(itemDiv);
  }
  parent.append(optionsDiv);
  parent.addClass('container');
}

function showOptions() {
  console.log('in func');
  $('.clickable').prop('onclick', null).off('click');
  $('.hiddenOption').slideToggle(500);
  window.setTimeout(function () {
    $('.clickable').click(showOptions);
  }, 500);
}

//if mouse out of list
function outOptions() {
  $('.hiddenOption').hide();
}

function clearSelection() {
  $('.chosenOption').text('Choose item...');
  $('.clearSelection').css('visibility', 'hidden');
  $('#headImg').attr("src", "img\/pokeball.png");
}

//selecting option
function onOptionClick(element) {
  let str = $(element).find('.CSItem').html();
  $('.chosenOption').text(str);
  $('#headImg').attr('src', 'img\/pokeball.png');
  $('.clearSelection').css('visibility', 'visible');
  $('.hiddenOption').slideToggle(500);
}
