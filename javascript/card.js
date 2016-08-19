function card() {
    var self = this;
    var first_card_clicked = null;
    var second_card_clicked = null;
    this.canClick = true;
    this.card_flip_timer = null;
    var img_src = [
        'images/pokemon/003Venusaur.png',
        'images/pokemon/006Charizard.png',
        'images/pokemon/009Blastoise.png',
        'images/pokemon/025Pikachu.png',
        'images/pokemon/039Jigglypuff.png',
        'images/pokemon/092Gastly.png',
        'images/pokemon/130Gyarados.png',
        'images/pokemon/143Snorlax.png',
        'images/pokemon/149Dragonite.png'
    ];
    //function to reset first and second cards after flipped
    this.reset_card = function () {
        first_card_clicked = null;
        second_card_clicked = null;
    };

    //function to declare if two cards are the same
    this.card_match = function () {
        //update accuracy
        game.stat_accuracy();

        //start over the card match
        card.reset_card();
    };

    // function to show back of cards when first and second cards don't match
    this.showBack = function() {
        card.canClick = false;
        card.card_flip_timer = setTimeout(function () {
            // console.log('test - 1st card = ', first_card_clicked, "2nd card = ", second_card_clicked);
            card.card_flip_timer = null;
            $(first_card_clicked).toggleClass('flip-card');
            $(second_card_clicked).toggleClass('flip-card');
            card.canClick = true;
            card.reset_card();
        }, 1000);
    };

    //click function for card
    this.card_click = function () {
        $('.card').click(function(){
            console.log('this card clicked');
            card.card_clicked(this);
        });
    };

    //randomly organizes cards
    this.randomize_card = function () {
        console.log('randomizing cards called');
        var card_images = img_src.concat(img_src);
        // console.log("card_images", card_images);

        //put ima srcs into a copy array in random order
        var num_card = card_images.length;
        // console.log("num_card" + num_card);

        var imagesCopy = [];
        for (var i=0; i < num_card; i++) {
            var random_id = Math.floor(Math.random() * card_images.length);
            imagesCopy.push(card_images.splice(random_id, 1));
            // console.log('card array: ' + card_images);

        }

        //append card elements to game area
        for(var j = 0; j < game.total_cards; j++) {
            var card = $('<div>').addClass('card');
            var back  = $('<div>').addClass('back').html('<img src="images/card_back.png">');
            var front = $('<div>').addClass('front').html('<img src="' + imagesCopy[j] + '"></div>');
            card.append(back);
            card.append(front);
            $('.game_area').append(card);
        }

    };



    this.card_clicked = function (the_card) {

        //check if card can be clicked
        //check if the card is already flipped
        //then do nothing if either are true
        if (this.canClick === false || $(the_card).hasClass('flip-card')) {
            console.log("cannotClick");
            return;
        } else {

            //card is not clicked. so flip over, show the front side
            $(the_card).addClass('flip-card');

            //if first card hasn't been flipped, set scope one to first card
            if (first_card_clicked == null) {
                first_card_clicked = the_card;
                return;
            } else {            //if first card has been set, set this one to second card
                second_card_clicked = the_card;
                game.attempts++;

                //compares two images' sources are the same
                //if they are the same
                var first_img = $(first_card_clicked).find('.front img').attr('src');
                var second_img = $(second_card_clicked).find('.front img').attr('src');

                if (first_img == second_img) {
                    game.match_counter++;
                    game.matches++;

                    card.card_match(); //update accuracy

                    if (game.match_counter == game.total_possible_matches) {
                        game.victory_modal();
                        console.log("matched all");
                    }
                } else {
                    //calculate accuracy
                    game.stat_accuracy();
                    //flip back cards
                    card.showBack();
                }
                //refresh stats after every attempt
                game.display_stats();
            }

        }
    };
    
    



}