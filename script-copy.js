function game() {
    $(document).ready(function() {
        //display stats
        display_stats();

        //arrange cards randomly and places in the game area
        randomize_card();
        $('.card').click(function(){
            console.log('this card clicked');
            card_clicked(this);
        });

        $('#about_modal').click(function () {
            console.log("about modal clicked");
            load_about_page();
        });

        $('.reset').click(function () {
            reset();
        });
    });
}