// Render KaTeX math typesetting, but only if the <body> has the class
// feature-math
$( function() {
   if ( $( "body.feature-math:not(.feature-nomath)" ).length ) {
      renderMathInElement(document.body);
   }
});

// Render perspective book images, if <body> has the class
// -feature-3dbook-covers
$( function() {
   $( "body.feature-3dbook-covers article a" ).has( "img[src~='3dbook']" ).each(function(i, e) {
      $( this ).addClass("book");
      $( this ).parent().addClass("books");
   });
});

/* Turn images into figures with captions. Several scenarios are handled, in
 * order:
 * If the img is followed by an <em>, then transform the <em> into a caption.
 * If the img has a title, use that as the caption.
 * If the img has an alt, use that.
 * The following features have to be enabled:
 * - feature-figcaption has to be enabled or the whole thing is disabled
 * - feature-figcaption-hidden makes the captions invisible till you hover
 * - feature-fignum adds figure numbering
 * - feature-figlink adds automatic links of text like "Figure 4"
 */
$( function() {
   $("body.feature-figcaption:not(.feature-nofigcaption) article img").each(function(i, e) {
      var $this = $(this);
      // Don't put captions on images that have URL fragment pseudo-classes.
      if ( $this.attr('src').match(/#/) ) return;
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
   if ( $("body.feature-figlink").length ) {
      $("article p, article li").each(function(i, e) {
         var $old = $(this).html();
         var $new = $old.replace(/Figure\s+(\d+)/g, '<a href="#fig-$1">Figure $1</a>');
         if ( $old !== $new ) {
            $(this).html($new);
         }
      });
   }
});

/* Add captions to tables.
 * If the table is followed by a <p><em>, then transform the <em> into a caption.
 * The following features have to be enabled:
 * - feature-tablecaption has to be enabled or the whole thing is disabled
 * - feature-fignum adds table numbering
 * - feature-figlink adds automatic links of text like "Table 4"
 */
$( function() {
   $("body.feature-tablecaption article table").each(function(i, e) {
      var $this = $(this);
      var $txt = false;
      if ( $this.next().is("p") ) {
			if ( $this.next().children().first().is("em:only-child") ) {
				$txt = $this.next().children().first().html();
				$this.next().remove();
			}
      }
      if ( $txt ) {
         $this.prepend('<caption id="tbl-' + (i+1) + '">' + $txt + '</caption>');
      }
   });
   if ( $("body.feature-figlink").length ) {
      $("article p, article li").each(function(i, e) {
         var $old = $(this).html();
         var $new = $old.replace(/Table\s+(\d+)/g, '<a href="#tbl-$1">Table $1</a>');
         if ( $old !== $new ) {
            $(this).html($new);
         }
      });
   }
});
