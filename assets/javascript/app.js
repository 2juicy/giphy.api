//Global Variables
var topics = ['Overwatch', 'Hearthstone'];
//function for AJAX
function displayInfo(){
    var search = $(this).attr("data-name");
    console.log(search);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        console.log(response);
        //   $("#gif").text(JSON.stringify(response));       
        //stores image in a var.
        var imageUrl = response.data.image_original_url;
        //setup to create <img> element
        var gameImage = $("<div class='g'>");
        //sets source of image
        gameImage.attr("src", imageUrl);
        //sets an alternative if image does not come on screen
        gameImage.attr("alt", "game image");
        //posts the image in a new <div>
        $("#images").prepend(gameImage);
    });
}
//Function copied from activity for displaying search data
function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("games");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    }
}

//on.click to add buttons copied from activity.
$("#addGame").on("click", function(event) {
    event.preventDefault();
    var games = $("#gameInput").val().trim();
    topics.push(games);
    renderButtons();
    console.log(topics);
});
//On.click for AJAX populating page
$(document).on("click", ".games", displayInfo);
//call once at start
renderButtons();