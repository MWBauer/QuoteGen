 $(document).ready(function() {
    $("#randomQuote").on("click", function() {
        var t = new Date().getTime();
        $.getJSON(
            "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=&" +
                t,
            function(a) {
                $(".message").html(a[0].content);
                $(".twitter-share-button").attr(
                    "href",
                    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(a[0].content)
                );
            }
        );
    });
});