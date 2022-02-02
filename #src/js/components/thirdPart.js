export function thirdPart() {

    const hiddenBlock = document.querySelector('.third__part');
    const toggleRadioBtns = document.querySelectorAll('.hiddenBlockToggler');

    toggleRadioBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            if(index == 2) {
                hiddenBlock.style.display = 'block';
            } else {
                hiddenBlock.style.display = 'none'; 
            }
        });
    });

}