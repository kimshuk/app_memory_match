var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;

//Flipped card function
// function flipCard() {
//     $(this).find(".front").hide();
// }

//Clicked card function
function card_clicked () {
    $(this).find(".front").hide();

    $(this).find('.front').show();          //show the card face
    $(this).find('.back').show();

    // if (first_card_clicked == null) {       //check if first card is not clicked
    //     first_card_clicked = $(this);       //first card not clicked
    //     return;
    // } else {                                //first card is clicked
    //     second_card_clicked = $(this);
    //
    //     if (first_card_clicked == second_card_clicked) {    //check if both first and second cards are clicked
    //         match_counter++;                    //match count + 1
    //         first_card_clicked = null;          //reset cards to back
    //         second_card_clicked = null;
    //
    //         if (match_counter == total_possible_matches) {
    //             alert("You won!");
    //         }
    //     } else {
    //         setTimeout(function () {        //wait 2 second
    //             flipCard(first_card_clicked);
    //             flipCard(second_card_clicked);
    //             first_card_clicked = null;
    //             second_card_clicked = null;
    //         }, 2000);
    //
    //     }
    // }
}

$(document).ready( function () {
    $("card").click(card_clicked());
    // $("card").click(flipCard(x));
});