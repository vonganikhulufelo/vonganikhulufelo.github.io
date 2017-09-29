
function myFunction(){
document.getElementById("drop").classList.toggle("show");
}
function myFunction1(){
document.getElementById("drop").classList.toggle("show");
}

$(document).ready(function() {
  $(".link").on('click', function( e ){

e.preventDefault();

   $("html, body").animate( {
   scrollTop: $( $(this).attr('href') ).offset().top }, 2000);
});
});

$(document).ready(function(){
	$(".formbut").click(function(){
		$("#form-page").slideToggle();		
	});
});



$(document).ready(function(){
	$(".close").click(function(){
		$("#form-page").slideUp();
	});
});

$(window).resize(function(){
	if($(window).width() <= 700){
		
	}
	else
	{
		
	}
		
});


