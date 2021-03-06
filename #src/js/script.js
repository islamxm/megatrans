import { select } from './components/select';
import { adaptiveSizes } from './components/adaptiveSizes';
import { searchResults } from './components/searchResults';
import { dropFiles } from './components/dropFiles';
import { modals } from './components/modals';
import { tableHead } from './components/tableHead';
import { tabsFunc } from './components/tabsFunc';
import { thirdPart } from './components/thirdPart';
import { stepChange } from './components/stepChange';
import { addField } from './components/addField';
import { addFieldGroup } from './components/addFieldGroup';
import { decMoreInfo } from './components/decMoreInfo';
import { mobMenu } from './components/mobMenu';
import { tooltip } from './components/tooltip';
import { tableAdaptive } from './components/tableAdaptive';

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
    stepChange();
    addField();
    addFieldGroup();
    decMoreInfo();
    mobMenu();
    tooltip();

    tabsFunc('.cp__content', '.cp__content_head_tabs', '.cp__content_head_tab', '.cp__content_body_item');
    tableAdaptive();

    
    



    
});





