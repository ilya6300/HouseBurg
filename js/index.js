const navMenuBtn = document.querySelector('#nav-menu-btn');
const navMenuShow = document.querySelector('#nav-menu-show');
const page = document.querySelector('.page');

// Анимация навигации сверху
navMenuBtn.onclick = () => {
    if (navMenuShow.classList.toggle('nav-menu-show')) {
        navMenuShow.style.display='block';
        navMenuBtn.src = './img/icon/menu active.png';        
        navMenuShow.classList.remove('nav-menu-hidden');
        page.style.overflow='hidden';
    } else {
        navMenuBtn.src = './img/icon/menu.png'; 
        navMenuShow.classList.add('nav-menu-hidden'); 
        setTimeout(() => {
            navMenuShow.style.display='none';
            page.style.overflow='visible';
        }, 720);
    }
}
// Анимация навигации слева
// btnDrink.onclick = () => {
//     menuBurger.style.display='none';
//     menuDrink.style.display='block';
//     menuBurger.classList.remove('menu-show');
//     btnBurger.classList.remove('active');
//     menuDrink.classList.add('menu-show');
//     btnDrink.classList.add('active');
// }
// btnBurger.onclick = () => {
//     menuDrink.style.display='none';
//     menuBurger.style.display='block';
//     menuBurger.classList.add('menu-show');
//     btnBurger.classList.add('active');
//     menuDrink.classList.remove('menu-show');
//     btnDrink.classList.remove('active');
// }