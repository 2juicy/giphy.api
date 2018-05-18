


$("#addGame").on("click", function(event) {
    event.preventDefault();
    var games = $("#gameInput").val().trim();
    
});


$(".container").on("click", ".button", function() {
    var search = $(this).attr("data-name")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=3611d9cf34bfa2ebd8b48cda1b886101&limit=10";

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#gif").text(JSON.stringify(response));
    });
});