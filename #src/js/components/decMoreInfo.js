import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function decMoreInfo() {
    const infoEl = document.querySelector('.dec-new__form_info');
    const infoBtn = document.querySelector('.dec-new__form_more');
    const infoClose = document.querySelector('.dec-new__form_info_close');

    if(infoBtn) {

        infoBtn.addEventListener('click', () => {
            infoEl.classList.add('active');
            disablePageScroll(document.body);
        });

        infoClose.addEventListener('click', () => {
            infoEl.classList.remove('active');
            enablePageScroll(document.body);
        });

    }
}