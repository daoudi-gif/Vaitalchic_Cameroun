//screeeeeeen load

$(document).ready(function(){
  $("#loadingScreen").delay(2000).fadeOut(1000,function(){
    $("#deLoadingScreen").css("overflow","auto");
  })
  });
// init Isotope

$(window).on('load', function () {
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid .col-md-4',
  percentPosition: true,
  stagger: 30


  
});

// filter items on button click
$('.filter-button-group button').click( function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
   });

//toggle menu for navbar
$(document).ready(function(){
  $(".menu").click(function(){
    $("ul").toggle("activee");
  });

  //header


  $(function(){
    $('#slideshow h4').hide();
    setInterval(function(){
      $('#slideshow :first-child').fadeOut(2000)
         .next('h4').fadeIn(2000)
         .end().appendTo('#slideshow');}, 
      3500);
});
  //

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

});

//header fade in out
/*
(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;
  
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(1500)
          .delay(1500)
          .fadeOut(1000, showNextQuote);
  }
  
  showNextQuote();
  
})();*/
// start scroll up
$(window).scroll(function(){
let scrollTop=$(window).scrollTop();
if(scrollTop> 600){
  $("#btnUp").fadeIn(500);
}
else{$("#btnUp").fadeOut(500)}
});
$("#btnUp").click(function(){

$("body,html").animate({scrollTop:0},2000);
});


// profile 
/*$(function() {
  $( '.filter-button-group button' ).on( 'click', function() {
        $( this ).removeClass( '.button-active' );
  });
});

$(document).ready(function() {
  $(document).on('click', '.filter-button-group button',function () {
      $('.filter-button-group button').removeClass(".button-active");
      $(this).addClass(".button-active");
  });
});*/

// Add active class to the current button (highlight it)
/*
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("bttnn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(".button-active");
  current[0].className = current[0].className.replace(".button-active", "");
  this.className += ".button-active";
  });
}*/
// togle icon on mobile
function menuFunction(x) {
  x.classList.toggle("fa-times");
}
