export function tableAdaptive() {
    const tb = document.querySelectorAll('.tbr');

    if(tb.length > 0) {

        tb.forEach(i => {
            const tbWrap = i.querySelector('.table-wr');
            const tbItem = i.querySelector('.table');
            const tbGradR = i.querySelector('.grad-r');
            const tbGradL = i.querySelector('.grad-l');
            const fake = i.querySelector('.fake-scroll');
            
            if(tbItem.scrollWidth == i.clientWidth) {
                tbGradR.style.opacity = '0';
                tbGradL.style.opacity = '0';
            }

            if(tbItem.scrollWidth > i.clientWidth) {
                tbGradR.style.opacity = '1';
                if(tbWrap.scrollLeft > 0) {
                    tbGradL.style.opacity = '1';
                }
                
            }

            tbWrap.addEventListener('scroll', () => {
                
            })


            tbWrap.addEventListener('scroll', (e) => {
                if(tbItem.scrollWidth > i.clientWidth) {
                    tbGradR.style.opacity = '1';
                }
                if(tbItem.scrollWidth == i.clientWidth) {
                    tbGradR.style.opacity = '0';
                }    

                if(tbWrap.scrollLeft == 0) {
                    tbGradL.style.opacity = '0';
                }

                if(tbWrap.scrollLeft > 0 && tbWrap.scrollLeft < tbItem.scrollWidth + 15 - tbWrap.clientWidth ) {
                    tbGradL.style.opacity = '1';
                    tbGradR.style.opacity = '1';
                }
        
                if(tbWrap.scrollLeft >= tbItem.scrollWidth + 15 - tbWrap.clientWidth) {
                    tbGradR.style.opacity = '0';
                    
                }
            })
        })
        
    }
    

    
}