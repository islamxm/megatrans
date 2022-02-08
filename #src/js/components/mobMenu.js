import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function mobMenu() {

    const menu = document.querySelector('.aside');
    const menuContent = document.querySelector('.aside__mob');
    const menuBtn = document.querySelector('.header__menu_burger');


    if(menu && menuBtn) {

        menuBtn.addEventListener('click', () => {
            menu.classList.add('active');
            disablePageScroll(menuContent);
        });

        menu.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('aside')) {
                menu.classList.remove('active');
                enablePageScroll(menuContent);
            }
        })
    }
}