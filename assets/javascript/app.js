


$("#addGame").on("click", function(event) {
    event.preventDefault();
    var games = $("#gameInput").val().trim();
    var newBtn = $("<button>");
    
});


$(".container").on("click", ".button", function() {
    var search = $(this).attr("data-name")
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=3611d9cf34bfa2ebd8b48cda1b886101&limit=5";

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        //   $("#gif").text(JSON.stringify(response));
        
        //stores image in a var.
          var imageUrl = response.data.image_original_url;
          //setup to create <img> element
          var gameImage = $("<img>");
          //sets source of image
          gameImage.attr("src", imageUrl);
          //sets an alternative if image does not come on screen
          gameImage.attr("alt", "game image");
          //posts the image in a new <img>
          $("#images").prepend(catImage);
    });
});