function game() {
    this.total_cards = 18;
    this.total_possible_matches = this.total_cards / 2;
    this.match_counter = 0;
    this.matches = 0;
    this.attempts = 0;
    this.accuracy = 0;
    this.games_played = 0;

    //calculate accuracy percentage
    this.stat_accuracy = function () {
        game.accuracy = Math.round((game.match_counter / game.attempts) * 100);
    };

    //initiate game {randomize cards, card click function}
    this.init = function () {
        card.randomize_card();

        card.card_click();
    };

    //reset button to start fresh
    this.reset = function () {
        $('#victory_modal').fadeOut();
        $('.card').remove();
        game.games_played++;
        card.canClick = true;
        card.card_flip_timer = null;
        game.match_counter = 0;
        card.reset_card();
        game.reset_stats();      //set game stat to 0
        game.init();
    };

    //function to reset stats
    this.reset_stats = function () {
        game.accuracy = 0;
        game.matches = 0;
        game.attempts = 0;
        game.display_stats();
    };

    //function to display all stats (games played, attempts, accuracy)
    this.display_stats = function () {
        $('.games_played .value').text(game.games_played);
        $('.attempts .value').text(game.attempts);
        $('.accuracy .value').text(game.accuracy + "%");
    };

    // when the player wins, victory video modal popup
    this.victory_modal = function () {
        var vicSrc = 'images/win_lost_gif/victory.gif';
        $('#victory_modal').modal('toggle');
        $('#victory_modal img').attr('src', vicSrc);
    };

    this.lost_modal = function () {
        var lostSrc = 'images/win_lost_gif/lost.gif';
        $('#victory_modal').modal('toggle');
        $('#victory_modal img').attr('src', lostSrc);
    };

    // ajax function to call info pages and pop up
    this.load_about_page = function () {
        $.ajax({
            url: 'about.html',
            dataType: 'text',
            success: function (response) {
                console.log('page loaded');
                console.log(response);
                var modal_content =  $('#info_content').html(response);
                var info_modal = $('#info_modal').append(modal_content);
                info_modal.modal('toggle');
            }
        });
    }
}