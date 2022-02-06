import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function mobMenu() {

    const menu = document.querySelector('.aside');
    const menuBtn = document.querySelector('.header__menu_burger');


    if(menu && menuBtn) {

        menuBtn.addEventListener('click', () => {
            menu.classList.add('active');
            disablePageScroll(menu);
        });

        menu.addEventListener('click', (e) => {
            if(e.target && e.target.classList.contains('aside')) {
                menu.classList.remove('active');
                enablePageScroll(menu);
            }
        })
    }
}