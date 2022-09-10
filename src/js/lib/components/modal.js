import $ from '../core';

$.prototype.modal = function(){
    let scroll = calcScroll();
    for(let i=0; i< this.length; i++){
        const target =  this[i].getAttribute('data-target');
        $(this[i]).click((e)=>{
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

        });


    }
    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem =>{
        $(elem).click(()=>{
            $('.modal').fadeOut(500);
            setTimeout(()=>{
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';
            },500);
            

        });
    });
    $('.modal').click(e=>{
        if  (e.target.classList.contains('modal')){
            $('.modal').fadeOut(500);
            setTimeout(()=>{
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';
    
            },500);
           

        }
    });

    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth- div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

$('[data-toggle="modal"]').modal();


