export function tableDrop() {
    
    if(window.innerWidth <= 1200) {
        const tableRow = document.querySelectorAll('.table__row_dropdown');


        if(tableRow.length > 0) {

            tableRow.forEach(row => {
                row.addEventListener('click', (e) => {
                    
                    let dropRow = e.currentTarget.querySelectorAll('.table__row_item_mob');
                    let editBtn = e.currentTarget.querySelector('.table__row_item_edit');

                    let dropSmob = e.currentTarget.querySelector('.table__row_item_smob');

                    if(e.target && e.target.hasAttribute('data-table-drop')) {
                        console.log('yes');

                        row.classList.toggle('active');

                        if(row.classList.contains('active')) {

                            dropRow.forEach(i => {
                                i.style.cssText = `height: ${i.scrollHeight}px; padding-top: 20px`;
                            });

                            editBtn.style.cssText = `height: ${editBtn.scrollHeight}px; padding-top: 10px`;

                            if(window.innerWidth <= 600) {
                                dropSmob.style.cssText = `height: ${dropSmob.scrollHeight}px; padding-top: 20px`;
                            }
                        }


                        if(!row.classList.contains('active')) {

                            dropRow.forEach(i => {
                                i.style.cssText = `height: 0px; padding-top: 0px`;
                            });

                            editBtn.style.cssText = `height: 0px; padding-top: 0`;

                            if(window.innerWidth <= 600) {
                                dropSmob.style.cssText = `height: 0px; padding-top: 0px`;
                            }
                        }

                    } else {
                        console.log('no');
                    }
                });
            });
        }
    }
}