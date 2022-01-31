import Choices from 'choices.js';

export function select() {

    const selectEls = document.querySelectorAll('.choices');

    if(selectEls) {
        selectEls.forEach(select => {
            const choiceWithSearch = new Choices(select, {
                allowHTML: true,
                itemSelectText: ''
            });
        });
    }
}