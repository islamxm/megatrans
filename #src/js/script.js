import { select } from './components/select';
import { adaptiveSizes } from './components/adaptiveSizes';
import { searchResults } from './components/searchResults';
import { dropFiles } from './components/dropFiles';
import { modals } from './components/modals';
import { tableHead } from './components/tableHead';

document.addEventListener('DOMContentLoaded', () => {
    modals();
    select();
    adaptiveSizes();
    searchResults();
    dropFiles();
    tableHead();
    
});





