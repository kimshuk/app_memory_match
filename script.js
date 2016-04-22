var first_card_clicked = null;
var second_card_clicked = null;
var canClick = true;
var total_possible_matches = 2;
var match_counter = 0;


//function to show back of cards when first and second cards don't match
function showBack(first, second) {
    canClick = false;
    card_flip_timer = setTimeout(function() {
        card_flip_timer = null;
        first.removeClass('flip-card');
        second.removeClass('flip-card');
        canClick = true;
    }, 1250);
}

//function to reset first and second cards after flipped
function reset_card() {
    first_card_clicked = null;
    second_card_clicked = null;
}

function made_match(second_card_clicked) {
    match_counter++;

    //start over
    reset_card();

    //check if all cards are matched. if so, show "you win" message
    if(match_counter == total_possible_matches) {
        alert("you win");
    }
}


function card_clicked() {
    //check if card can be clicked
    //check if the card is already flipped
    //then do nothing if either are true
    if (canClick === false || $(this).hasClass('flip-card')) {
        return;
    } else {

        //card is not clicked. so flip over, show the front side
        // $(this).addClass('flip-card');
        $(this).find('.front').show();
        $(this).find('.back').hide();


        //if first card hasn't been flipped, set this one to first card
        if(first_card_clicked == null) {
            first_card_clicked = this;
            return;
        } else {            //if first card has been set, set this one to second card
            second_card_clicked = this;

            //compares two images' sources are the same
            //if they are the same
            var first_img = first_card_clicked.find('.front img').attr('src');
            var second_img = second_card_clicked.find('.front img').attr('src');

            if(first_img == second_img) {
                match_counter++;

                reset_card();     //reset both cards

                if (match_counter == total_possible_matches) {
                    $('.card').addClass("hide-card");
                    alert("you won!");
                } else {
                    return;
                }
            } else {
                canClick = false;
                card_flip_timer = setTimeout(function() {
                    console.log('test - 1st card = ',first_card, "2nd card = ", second_card);
                    $(first_card).removeClass('flip-card');
                    $(second_card).removeClass('flip-card');
                    card_flip_timer = null;
                    canClick = true;
                    resetCards();
                }, 1500);
            }
        }
        }
}

$(document).ready(function() {
    $(".card").click(card_clicked);
});