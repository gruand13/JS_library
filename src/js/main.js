import './lib/lib';

// $('button').on('click', function(){
//     $('div').eq(2).toggleClass('active');

// });

// $('div').click(function(){
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findme'));


// $('.findme').fadeIn(1800);


// console.log($('button').html('hello '));


$('#first').on('click', ()=>{
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', ()=>{
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).on('click', ()=>{
    $('.w-500').fadeOut(800);
});