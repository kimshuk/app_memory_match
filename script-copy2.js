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

    // function to show back of cards when first and second cards don't match
    var showBack = function() {
        canClick = false;
        card_flip_timer = setTimeout(function () {
            // console.log('test - 1st card = ', first_card_clicked, "2nd card = ", second_card_clicked);
            card_flip_timer = null;
            $(first_card_clicked).toggleClass('flip-card');
            $(second_card_clicked).toggleClass('flip-card');
            canClick = true;
            reset_card();
        }, 1500);
    }

}