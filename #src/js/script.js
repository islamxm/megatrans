import { select } from './components/select';
import { adaptiveSizes } from './components/adaptiveSizes';
import { searchResults } from './components/searchResults';
import { dropFiles } from './components/dropFiles';
import { modals } from './components/modals';

document.addEventListener('DOMContentLoaded', () => {
    modals();
    select();
    adaptiveSizes();
    searchResults();
    dropFiles();
    
});





