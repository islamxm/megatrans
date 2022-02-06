import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function decMoreInfo() {
    const infoEl = document.querySelector('.dec-new__form_info');
    const infoBtn = document.querySelector('.dec-new__form_more');
    const infoClose = document.querySelector('.dec-new__form_info_close');

    const wr = document.querySelector('.wrapper');

    if(infoBtn) {

        infoBtn.addEventListener('click', () => {
            infoEl.classList.add('active');
            disablePageScroll(document.body);
            enablePageScroll(infoEl);
        });

        infoClose.addEventListener('click', () => {
            infoEl.classList.remove('active');
            enablePageScroll(document.body);

        });

    }
}