// (()=>{
//     const $ = function (selector){
//         const elements = document.querySelectorAll(selector);
//         const obj ={};
        

//         obj.hide = ()=>{
//             elements.forEach(elem =>{
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = ()=>{
//             elements.forEach(elem =>{
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };
//     window.$ = $;
// })();

const $ = function(selector){
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector){
    if(!selector){
        return this; // {} вернет пустой обьект
    }
    // проверка является ли элемент тегом
    if(selector.tagName){
        this[0] = selector;
        this.length =1;
        return this;
    }




    // в существующий обьект добавляем новые свойства
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

// в прототип того обьекта который возвращает функция init мы записываем прототип нашей главной функции
// теперь на обьекте который будет создаваться при помощи функции $ мы можем использовать любые методы которые будут внутри прототипа этой функции
$.prototype.init.prototype = $.prototype;
// записываем чтобы могли глобально использовать
window.$ = $;
//экспортируем чтобы использовать в других файлах
export default $;