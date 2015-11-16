var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);
[]
    $('body').animate({
      left: "0px"
    }, 200);
  });
    $('.article').click(function(){
      $(this).children('.description').show();
       });
    $('.article-close').click(function(){
       $('.description').slideUp();
      });
    $('.article-close2').click(function(){
       $('.description').slideUp();
      });
    $('.article-close3').click(function(){
       $('.description').slideUp();
      });
    }


