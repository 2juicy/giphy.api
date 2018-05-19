//Global Variables
var topics = ['Overwatch', 'Hearthstone', 'Diablo 3'];
//function for AJAX to populate page
function displayInfo(){
    var search = $(this).attr("data-name");
    console.log(search);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) { 
        var result = response.data;
        console.log(result);
        //added empty to fix spam.
        $('gif').empty();
        //loop to make each image
        for (let i = 0; i < result.length; i++){
            //declaring our variable to create new Div
            var newDiv = $("<div class='g'>");
            //rating
            var rating = result[i].rating;
            var p = $('<p>').text('Rating: ' + rating);
            //image location with animate and still attributes added.
            console.log(result[i].images);
            var sImage = $('<img>').attr('src', result[i].images.fixed_height_still.url);
            sImage.addClass('gif');
            sImage.attr('data-still', result[i].images.fixed_height_still.url);
            sImage.attr('data-animate', result[i].images.fixed_height.url);
            sImage.attr('data-state', 'still');
            //attaching both elemnts image and rating to div
            newDiv.append(p);
            newDiv.append(sImage);
            //attaching newDiv to HTML page showing AJAX call items.
            $('#gif').prepend(newDiv);
        };
        //Function to change state on click
        $('.gif').on('click', function(){
            var state = $(this).attr('data-state');
            if (state == 'still') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            }
        });
    });
}
//Function for appending buttons
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
//on.click to add buttons
$("#addGame").on("click", function(event) {
    event.preventDefault();
    var games = $("#gameInput").val().trim();
    if (games == ''){
        return;
    }
    topics.push(games);
    renderButtons();
    console.log(topics);
});
//On.click for AJAX populating page
$(document).on("click", ".games", displayInfo);
//call once at start
renderButtons();