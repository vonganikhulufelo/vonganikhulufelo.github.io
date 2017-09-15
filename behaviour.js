
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
