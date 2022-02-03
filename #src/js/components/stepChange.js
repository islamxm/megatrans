export function stepChange() {
    const radioBtns = document.querySelectorAll('.legacyType');
    const formNames = document.querySelectorAll('.legacyName');
    radioBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            if(index == 0) {
                if(btn.checked) {

                    formNames.forEach((i, index) =>  {
                        if(index == 0) {
                            i.innerHTML = 'ИНН';
                        }

                        if(index == 1) {
                            i.innerHTML = 'КПП';
                        }
                    });
                }
            }
            if(index == 1) {
                if(btn.checked) {

                    formNames.forEach((i, index) =>  {
                        if(index == 0) {
                            i.innerHTML = 'Серия паспорта';
                        }

                        if(index == 1) {
                            i.innerHTML = 'Номер паспорта';
                        }
                    });
                }
            }
        });
        
    });
}