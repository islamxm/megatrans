export function searchResults() {
    const results = document.querySelectorAll('.partner-add__result_item');
    if(results.length > 0) {
        results.forEach(result => {
            result.addEventListener('click', (e) => {
                results.forEach(i => {
                    i.classList.remove('active');
                });
    
                result.classList.add('active');
            });
        });
    }
    
}