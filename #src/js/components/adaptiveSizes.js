export function adaptiveSizes() {
    const mainW = document.querySelector('.main-w');
    const headerMenu = document.querySelector('.header__menu');
    const aside = document.querySelector('.aside');
    const modal = document.querySelectorAll('.modal__content');

    const sizes = {
        desktop: 1250,
        tablet: 768,
        mobile: 320
    };

    if(mainW) {
        mainW.style.cssText = `margin-top: ${headerMenu.scrollHeight}px; padding-left: ${aside.scrollWidth}px`;

        window.addEventListener('resize', () => {
            mainW.style.cssText = `margin-top: ${headerMenu.scrollHeight}px; padding-left: ${aside.scrollWidth}px`;
        });
    }

    if(aside) {
        aside.style.cssText = `padding-top: ${headerMenu.scrollHeight + 100}px`;

        window.addEventListener('resize', () => {
            aside.style.cssText = `padding-top: ${headerMenu.scrollHeight + 100}px`;
        });

        
    }
    
    if(modal.length > 0) {
        modal.forEach(modal => {
            modal.style.cssText = `padding-top: ${headerMenu.scrollHeight + 25}px`;
        });
    }



    //media

    
}