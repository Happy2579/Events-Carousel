$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item').each(function(){
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });

  document.querySelector(".card-flip").classList.toggle("flip");
  $('.card-flip').bind({
    mouseover: function() {
      $('.card-flip .flip').click(function() {
        $(this).addClass('flip-hover').siblings().removeClass('flip-hover');
      });
    },
  mouseleave: function() {
      $('.card-flip .flip').removeClass('flip-hover');
  }
});

$(".container .back").hover(function() {
  $(this).toggleClass('scale-up').siblings().toggleClass('scale-down')
});