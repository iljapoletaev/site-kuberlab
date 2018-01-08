$(document).ready(function(){
    $(".menu-botton, .menu a").on('click', function(event) {
        $('.menu').toggleClass('open');
    });
});

// // Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {
    $('#deploymentScroll').lightSlider({
        autoWidth:true,
        loop:true,
        adaptiveHeight: true,
        onSliderLoad: function() {
            $('#deploymentScroll').removeClass('cS-hidden');
        }
    });
});

var rec;


function recReset() {
    
}


$('#rDemo').on('show.bs.modal', function (event) {
    res = grecaptcha.render('r-recaptcha', {
        'sitekey' : '6LfNuDEUAAAAAAN8mBZCYZXLz0cNimkefrgOvVfj',
        'callback' : function(res) {
            debugger;
            if(res){
                $('#g-recaptcha-response').val(res);
                $('#rDateSubmit')[0].disabled = false
            }
        }
    });
});
