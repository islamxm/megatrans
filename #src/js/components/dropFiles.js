import Dropzone from "dropzone";

export function dropFiles() {

    let dropEl = document.querySelector('.partner-add__form_drop');
    
    if(dropEl) {
        let myDrop = new Dropzone(dropEl, {
            url: '#',
            addRemoveLinks: true,
            dictDefaultMessage: '+ Перетащите файл или выберите с диска',
            dictRemoveFile: "Удалить",
            acceptedFiles: 'image/jpg, image/jpeg, image/png, application/pdf'
        });
    }
}