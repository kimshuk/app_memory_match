/**
 * Created by andrewkim on 8/8/16.
 */
var game = new game();
var card = new card();

$(document).ready(function() {
    //display stats
    game.display_stats();

    //arrange cards randomly and places in the game area
    game.init();

    $('#about_modal').click(function () {
        console.log("about modal clicked");
        game.load_about_page();
    });

    $('.reset_btn').click(function () {
        game.reset();
    });
});