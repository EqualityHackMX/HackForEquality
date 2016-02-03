/*
 * Change Navbar color while scrolling
 */

 $(window).scroll(handleTopNavAnimation);
 $(window).load(handleTopNavAnimation);

 function handleTopNavAnimation() {
   var top=$(window).scrollTop();

   if (top>10) {
      $('#site-nav').addClass('navbar-solid'); 
   } else{
      $('#site-nav').removeClass('navbar-solid'); 
  }
}

/*
 * Registration Form
 */

function signup (e){
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