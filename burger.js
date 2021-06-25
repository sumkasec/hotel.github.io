const burger = document.getElementById('burgerToggle');
const burger1 = document.getElementById('burgerToggle1');
const main = document.getElementById('main');

document.addEventListener('click',event =>{
    burger.classList.toggle('active');
    burger1.classList.toggle('active');
    body.classList.toggle('lock');
});   
main.addEventListener('click', event =>{
    event.stopPropagation();
});