$('.btn').click(function(){
  $(this).toggleClass('load');
  $(this).find('i').toggleClass('loaded');
	$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    // code to execute after transition ends
    $(this).find('i').removeClass('fa-circle-o-notch');
    $(this).find('i').addClass('fa-check');
    $('button').toggleClass('green');

  });
});