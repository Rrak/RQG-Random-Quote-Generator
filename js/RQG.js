function newQuote() {
	$.ajax({
		url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
		success: function(data) {
				var post = data.shift();
					qAuthor = post.title;
						$("#author").text("-"+" "+post.title);
					qContent = post.content.replace(/<p[^>]*>|<\/?p[^>]*>|["']/g, "");
						$("#quote").html(post.content);

					$('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + qContent + '" ' + qAuthor));
      },
		cache: false
	});
}

$(document).ready( function() {
	$(".qBox").addClass("fadeIn animated");
	$(".footNote").addClass("fadeInUp animated");
	$("#newQ").on('click', newQuote);
	 newQuote();
});
