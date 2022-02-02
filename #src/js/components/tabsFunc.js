export function tabsFunc(wrapper, parent, tabs, content) {
    let tabsWrapper = document.querySelectorAll(wrapper);
    

    tabsWrapper.forEach(item => {

        let tabsParent = item.querySelector(parent);
        let tabsEl = item.querySelectorAll(tabs);
        let tabsContent = item.querySelectorAll(content); 

        function hideTabs() {
            tabsEl.forEach(i => {
                i.classList.remove('active');
            });
    
            tabsContent.forEach(i => {
                i.classList.remove('active');
            });
        }
    
    
        function showTabs(index = 0) {
            tabsEl[index].classList.add('active');
            tabsContent[index].classList.add('active');
        }
    
    
        if(tabsContent) {
            hideTabs();
            showTabs();
    
            tabsParent.addEventListener('click', (e) => {
                let tar = e.target;
    
                if(tar && tar.dataset.tab == 'true') {
                    tabsEl.forEach((item, index) => {
                        if(tar == item) {
                            hideTabs();
                            showTabs(index);
                        }
                    });
                    
                }
            });
        }

    });
    

    
}