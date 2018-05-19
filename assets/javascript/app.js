//Global Variables
var searches = ['Overwatch', 'League Of Legends', 'Hearthstone'];

//Function copied from activity for displaying search data
function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < searches.length; i++) {
        var a = $("<button>");
        a.addClass("search");
        a.attr("data-name", searches[i]);
        a.text(searches[i]);
        $("#buttons").append(a);
    }
}
//on.click to add buttons copied from activity.
$("#addGame").on("click", function(event) {
    event.preventDefault();
    var games = $("#gameInput").val().trim();
    searches.push(games);
    console.log(games);
    renderButtons();
});
//calling once to start page.
renderButtons();


//On.click for AJAX calling images.
$(".container").on("click", function() {
    var search = $(this).attr("gameInput")
    console.log(search);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=3611d9cf34bfa2ebd8b48cda1b886101&limit=10";
    console.log(queryURL);
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