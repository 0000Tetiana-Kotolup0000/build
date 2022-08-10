// var button = document.querySelector('#button');
// var button = document.querySelector('#modal');
// var button = document.querySelector('#close');


// button.addEventListener('click', function(){
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function(){
//     modal.classList.removel('modal_active');
// });


$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
});