// Render KaTeX math typesetting.
$( function() {
   renderMathInElement(document.body);
});

// Render perspective book images.
$( function() {
   $( "a" ).has( "img[src~='3dbook']" ).each(function(i, e) {
      $( this ).addClass("book");
      $( this ).parent().addClass("books");
   });
});

/* Turn images into figures with captions. Several scenarios are handled, in
   * order:
   * If the img is followed by an <em>, then transform the <em> into a caption.
   * If the img has a title, use that as the caption.
   * If the img has an alt, use that.
   */
$( function() {
   $("article img").each(function(i, e) {
      var $this = $(this);
      var $txt = false;
      if ( $this.next().is("em") ) {
         $txt = $this.next().html();
         $this.next().remove();
      } else {
         $txt = $this.attr('title')   ? $this.attr('title')
              : $this.attr('alt')     ? $this.attr('alt')
              :                         false;
      }
      if ( $txt ) {
         var $fig = $this.wrap('<figure id="fig-' + (i+1) + '">')
				.after('<figcaption class="f5 lh-copy i ph3">' + $txt + '</figcaption>')
				.parent();
      }
   });
	$("article p, article li").each(function(i, e) {
		var $old = $(this).html();
		var $new = $old.replace(/Figure\s+(\d+)/g, '<a href="#fig-$1">Figure $1</a>');
		if ( $old !== $new ) {
			$(this).html($new);
		}
   });
});
