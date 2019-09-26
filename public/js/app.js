$(document).ready(function () {

    $.getJSON("/scrape");

    $.getJSON("/articles", function (data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
            // Display the apropos information on the page
            $("#articles").append("<div class='card' data-id='" + data[i]._id + "'>"
                + "<div id='card-title'>" + "<h4><a id='articleTitle' href='https://www.cinemablend.com"
                + data[i].link + "'>" + data[i].title + "</a></h4><div class='card-body'>" + data[i].summary
                + "<br/><br/><p id='comments'><strong>Comments</strong></p><div class='' id='commentSection'><br><form id='form'><label for='author'><input type='name' id='author' class='form-control' placeholder='Your Name' /><br /><label for='commentbox'>Your Comment</label><textarea class='form-control' id='commentbox'></textarea><br><button id='submit' class='btn btn-primary'>Subtmit</button></div></div>");
        };
    });
    $("#comments").on("click", function() {
        $("#commentSection").removeClass("hidden");
    })

});