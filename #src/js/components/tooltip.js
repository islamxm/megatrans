import tippy from 'tippy.js';


export function tooltip() {

    const wr = document.querySelector('.dec-new__form_body_part_checklist');

    if(wr) {
        tippy('#tt1', {
            content: document.querySelector('#tt1').dataset.content,
            placement: 'right',
            arrow: true,
        });
    
        
        tippy('#tt2', {
            content: document.querySelector('#tt2').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt3', {
            content: document.querySelector('#tt3').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt4', {
            content: document.querySelector('#tt4').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt5', {
            content: document.querySelector('#tt5').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt6', {
            content: document.querySelector('#tt6').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt7', {
            content: document.querySelector('#tt7').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt8', {
            content: document.querySelector('#tt8').dataset.content,
            placement: 'right',
            arrow: true,
        });
        tippy('#tt9', {
            content: document.querySelector('#tt9').dataset.content,
            placement: 'right',
            arrow: true,
        });
    }


    

}