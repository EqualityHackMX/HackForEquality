/*
 * Change Navbar color while scrolling
 */

 $(window).scroll(function(){
   handleTopNavAnimation();
});

 $(window).load(function(){
   handleTopNavAnimation();
});

 function handleTopNavAnimation() {
   var top=$(window).scrollTop();

   if(top>10){
      $('#site-nav').addClass('navbar-solid'); 
  }
  else{
      $('#site-nav').removeClass('navbar-solid'); 
  }
}

/*
 * Registration Form
 */

 var signup = function(e){
    e.preventDefault();
    $.ajax({
        url:'/',
        data:$(this).serialize(),
        method: 'post',
    })
    .done(function () {
        $('#contactForm').addClass('hidden')
        $('#thankYou').removeClass('hidden')
    })
};

$('#contactForm').on('submit', signup);

/*
 * SmoothScroll
 */

 smoothScroll.init();