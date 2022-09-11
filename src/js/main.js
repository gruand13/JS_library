import { devel } from 'jshint/src/vars';
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


// $('#first').on('click', ()=>{
//     $('div').eq(1).fadeToggle(800);
// });

// $('[data-count="second"]').on('click', ()=>{
//     $('div').eq(2).fadeToggle(800);
// });

// $('button').eq(2).on('click', ()=>{
//     $('.w-500').fadeToggle(800);
// });

// $('.wrap').html(
//     `<div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdawnMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="dropdawnMenuButton">
//             <a href="#" class="dropdown-item">Action</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>

//         </div>
//     </div>`
// );

// $('.dropdown-toggle').dropdown(); // вызов

$('#trigger').click(()=>$('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem deve  dsgf gh hgf hggh h h gf gjff g j h ae r wqeeret  fdd g  hgh' 
    },
    btns: {
        count: 3,
        settings: [
            [
                'close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'save changes',
                ['btn-success'],
                false,
                ()=>{
                    alert('Данные сохранены');
                }
            ],
            [
                'Another button',
                ['btn-warning', 'ml-10'],
                false,
                ()=>{
                    alert('Hello world');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res=> console.log(res));