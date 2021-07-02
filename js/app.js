const leftitems = document.querySelector('.left-items');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    leftitems.style.display = 'block';
    openMenu.style.display = 'none';
    openMenu.style.width = "250px";
}
function close(){
    leftitems.style.display = 'none';
    closeMenu.style.display = 'none';
}