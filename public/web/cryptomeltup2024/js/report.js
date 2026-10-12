    //In-Line JS goes here
var urlParams;
(window.onpopstate = function () {
	 var match,
			 pl     = /\+/g,  // Regex for replacing addition symbol with a space
			 search = /([^&=]+)=?([^&]*)/g,
			 decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			 query  = window.location.search.substring(1);
	 urlParams = {};
	 while (match = search.exec(query))
			urlParams[decode(match[1])] = decode(match[2]);
})();
$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('click', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});
});
