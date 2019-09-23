$.getJSON("/scrape");

$.getJSON("/articles", function (data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append("<div class='card' data-id='" + data[i]._id + "'>" + "<div id='card-title'>" + "<h4><a id='articleTitle' href='https://www.cinemablend.com" + data[i].link + "'>" + data[i].title + "</a></h4><div class='card-body'>" + data[i].summary + "</div>" + "</div>");
    }
});