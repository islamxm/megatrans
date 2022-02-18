import { FineUploader } from "fine-uploader";

export function dropFiles() {

    const ff = document.querySelectorAll("#fine-uploader-gallery");
    if(ff.length >= 0) {
        ff.forEach(i => {
            var galleryUploader = new FineUploader({
                element: i,
                template: 'qq-template-gallery',
                // request: {
                //     endpoint: '/server/uploads'
                // },
                thumbnails: {
                    placeholders: {
                        // waitingPath: '/source/placeholders/waiting-generic.png',
                        // notAvailablePath: '/source/placeholders/not_available-generic.png'
                    }
                },
                validation: {
                    allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf', 'doc']
                },
                messages: {
                    typeError: 'Произошла ошибка!'
                    // other messages can go here as well ...
                },
                
                
                multiple: false,
                deleteFile: {
                    enabled: true,
                    forceConfirm: true,
                    endpoint: 'server/file'
                },
                callbacks: {
                    onComplete: function() {
                        let wr = document.querySelector('.qq-uploader-selector');
                        wr.classList.add('active');
                    },
                    onCancel: function() {
                        let wr = document.querySelector('.qq-uploader-selector');
                        let text = document.querySelector('.qq-uploader-selector');
                        wr.classList.remove('active');
                        // text.style.display = 'block';
                        text.setAttribute('qq-drop-area-text', '+ Перетащите файл или выберите с диска');
                    }
                }
            });
        })
    }

    
    


    
    
}