export function addFieldGroup() {
    const flGrAadd = document.querySelector('#fsd');
    
    const flGr = `
    <div class="partner-edit__form_wr">
    <div class="partner-edit__form_wr_del" id="formGroupDel">
                                Удалить
                            </div>
    <div class="partner-edit__form_item w-100 input">
        <div class="form__name">
            Контактное лицо
        </div>
        <input type="text" placeholder="Иванов Иван Иванович">
    </div>

    <div class="partner-edit__form_item input">
        <div class="form__name">
            E-mail
        </div>
        <input type="email" placeholder="ivanov@mail.ru">
    </div>

    <div class="partner-edit__form_item input">
        <div class="form__name">
            Телефон
        </div>
        <input type="tel" placeholder="+79990000000">
    </div>
</div>
    `

    function delField() {
        let delBtn = document.querySelectorAll('#formGroupDel');

        delBtn.forEach(i => {
            console.log(i.parentElement);
            i.addEventListener('click', () => {
                i.parentElement.remove();
            });
        });
    }

    delField();

    if(flGrAadd) {
        flGrAadd.addEventListener('click', () => {
            flGrAadd.insertAdjacentHTML('beforebegin', flGr);
            delField();
            
        });
    }

    // delBtn.forEach(i => {
    //     console.log(i.parentElement);
    //     i.addEventListener('click', () => {
    //         i.parentElement.remove();
    //     });
    // });

    


}