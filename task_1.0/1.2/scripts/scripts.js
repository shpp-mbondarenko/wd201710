document.addEventListener('DOMContentLoaded', function(){
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   $("html, body").animate({ scrollTop: 0 }, 600);
}

function scrollToAnchor(anchor_id){
  var windowHeight = $(window).height();
  var cont = $("#"+anchor_id);
  var contHeight = cont.height();
  var contOffset = cont.offset().top;
  var offset;
  if (contOffset < (windowHeight / 2)) {
    offset = contOffset;
    console.log("offset = contOffset;");
  } else {
    if (contHeight < windowHeight) {
      offset = contOffset - ((windowHeight / 2) - (contHeight / 2));
      console.log("contHeight < windowHeight");
    }
    else {
      offset = contOffset - (windowHeight / 4);
      console.log("contOffset - (windowHeight / 4);");
    }
  }
  $('html,body').animate({scrollTop: offset},'slow');
}
