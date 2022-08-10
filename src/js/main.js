var button = document.querySelector('#button');
var button = document.querySelector('#modal');
var button = document.querySelector('#close');


button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.removel('modal_active');
});