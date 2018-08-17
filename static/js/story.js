$( function() {
	// Render KaTeX math typesetting.
	renderMathInElement(document.body);
});
$( function() {
	// Render perspective book images.
	$( "a" ).has( "img[src~='3dbook']" ).each(function(i, e) {
		$( this ).addClass("book");
		$( this ).parent().addClass("books");
	});
});
