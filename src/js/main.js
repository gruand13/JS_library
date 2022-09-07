import './lib/lib';

$('button').on('click', function(){
    $('div').eq(2).toggleClass('active');

});

$('div').click(function(){
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findme'));


$('.findme').fadeIn(1800);


// console.log($('button').html('hello '));


