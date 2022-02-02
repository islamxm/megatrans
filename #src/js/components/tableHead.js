export function tableHead() {
    const tableHeads = document.querySelectorAll('.table__headrow_item');

    if(tableHeads.length > 0) {
        tableHeads.forEach(item => {
            item.addEventListener('click', (e) => {
                tableHeads.forEach(i => {
                    i.classList.remove('active');
                });

                item.classList.add('active');
            });
        });
    }
}