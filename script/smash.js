const imageElement = document.querySelector('.js-image');
const addImageButton = document.querySelector('.js-add-image');

// click add image
addImageButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageElement.classList.remove('border', 'border-dashed', 'border-indigo-400');
                imageElement.innerHTML = `<img class="rounded-xl h-[400px] object-contain" src="${e.target.result}" alt="">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    fileInput.click();
});


// drag&drop add image
imageElement.addEventListener('dragover', (event) => {
    event.preventDefault(); 
});

imageElement.addEventListener('drop', (event) => {
    event.preventDefault();
    imageElement.classList.remove('border', 'border-dashed', 'border-indigo-400');
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imageElement.innerHTML = `<img class="rounded-xl h-[400px] object-contain" src="${e.target.result}" alt="">`;
        };
        reader.readAsDataURL(file);
    }
});


// download image
const downloadButton = document.querySelector('.js-download');

downloadButton.addEventListener('click', () => {
    downloadButton.href = imageElement.querySelector('img').src;
});
