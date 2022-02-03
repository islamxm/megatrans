export function addField() {

    const addEmail = document.querySelector('.addEmail');
    const addTel = document.querySelector('.addTel');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('placeholder', 'Укажите E-mail');
    emailInput.style.cssText = 'margin-top: 10px';


    const telInput = document.createElement('input');
    telInput.setAttribute('type', 'text');
    telInput.setAttribute('placeholder', 'Укажите номер телефона');
    telInput.style.cssText = 'margin-top: 10px';


    const addEmailBtn = document.querySelector('#addEmail');
    const addTelBtn = document.querySelector('#addTel');

    let counter = 0;

    if(addEmailBtn) {
        addEmailBtn.addEventListener('click', () => {
            addEmail.append(emailInput);
        });
    }
    

    if(addTelBtn) {
        addTelBtn.addEventListener('click', (e) => {
            addTel.append(telInput);
        });
    }
}