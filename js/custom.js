
  $(document).ready(function(){
    $("#header-top").sticky({topSpacing:0});
  });


//Smooth Scroll   
     $('.vertical-menu li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeOutSine');
        event.preventDefault();
    });
//End Smooth Scroll
     
     
     
//Menu Toggle Script -->
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
}

    




//GO Button JS
var success = document.getElementById("success")
,		addClass = function (el, cl) { el.className += ' ' + cl }
,		removeClass = function (el, cl) { var regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)'); el.className = el.className.replace(regex, ' ') }
		
success.addEventListener("click",function(){
	removeClass(success,"act-success")  
	addClass(success,"act-loading")
      
  //emulating delay after ajax request (2 seconds)
  setTimeout(function(){ 
		addClass(success,"act-success")
    removeClass(success,"act-loading")
	}, 2000)

})

//End GO Button JS









//Download Button Effect JS
;(function($){
  
  function clickHandler() {
    $(this).parents('.buton-cover').toggleClass('is_active');
  }

  $('.btn').on('click', clickHandler);

}(jQuery));






















