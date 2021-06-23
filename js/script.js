$(document).ready(function(){
    $('.burger_btn').click(function(event){
        $('.burger_btn').toggleClass('active');
        $('.menu').toggleClass('menu--active');
        $('.body').toggleClass('lock');
    });
});
$(document).ready(function(){
    $('.burger_a').click(function(event){
        $('.burger_btn').toggleClass('active');
        $('.menu').toggleClass('menu--active');
        $('.body').toggleClass('lock');
    });
});
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }