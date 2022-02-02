import { select } from './components/select';
import { adaptiveSizes } from './components/adaptiveSizes';
import { searchResults } from './components/searchResults';
import { dropFiles } from './components/dropFiles';
import { modals } from './components/modals';
import { tableHead } from './components/tableHead';
import { tabsFunc } from './components/tabsFunc';
import { thirdPart } from './components/thirdPart';

document.addEventListener('DOMContentLoaded', () => {
    modals();
    select();
    adaptiveSizes();
    searchResults();
    dropFiles();
    tableHead();
    tabsFunc('.tab-main-wrapper', '.dec-new__content_top', '.dec-new__content_top_item', '.dec-new__content_tab');
    tabsFunc('.tab-wrapper', '.radio-tabs', '.radio-tabs__item', '.radio-content__item');
    thirdPart();
    
});





