$('.letter').mouseenter(function(){
    var index = $(this).index()+1; // +1 because the index starts at 0
    $('.content').html('Number: '+index);
   
});