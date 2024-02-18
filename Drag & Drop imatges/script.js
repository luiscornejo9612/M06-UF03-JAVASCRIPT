let files = [];
let dropArea = document.querySelector('.drop-area');
let dragDrop = document.querySelector('h2');
let uploadButton = document.querySelector('button');
let input = document.getElementById('input-file');
let preview = document.getElementById('preview');
const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

let events = ['dragover', 'dragleave', 'drop'];
events.forEach(event => {
    dropArea.addEventListener(event, prevDefault);
});

function prevDefault(e) {
    e.preventDefault();
}

dropArea.addEventListener("dragover", function () {
    dropArea.classList.add('active');
    dragDrop.textContent = 'Drop to update files';
});

dropArea.addEventListener("dragleave", function () {
    dropArea.classList.remove('active');
    dragDrop.textContent = 'Drag & Drop files';
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    files = files.concat(newFiles);
    showFiles();
    dropArea.classList.remove('active');
    dragDrop.textContent = 'Drag & Drop files';
});

uploadButton.addEventListener("click", function (e) {
    e.preventDefault();
    input.click();
});

input.addEventListener("change", function (event) {
    const selectedFiles = Array.from(event.target.files);
    files = files.concat(selectedFiles);
    showFiles();
    dropArea.classList.remove('active');
    dragDrop.textContent = 'Drag & Drop files';
});

function processFile(file, index) {
    const fileExtension = file.type;
    if (validExtensions.includes(fileExtension)) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let previewDiv = document.createElement('div');
            previewDiv.classList.add('previewImage');
            previewDiv.innerHTML = `
                        <img src="${event.target.result}" alt="${file.name}" />
                        <span>${file.name}</span>
                        <span onclick="removeBtn(${index})" class="material-symbols-outlined removeBtn">c</span>
                    `;
            preview.appendChild(previewDiv);
        };
        reader.readAsDataURL(file);
    } else {
        console.log(`El archivo "${file.name}" no tiene una extensión válida.`);
        files.splice(index, 1);
    }
}

function removeBtn(index) {
    files.splice(index, 1);
    preview.innerHTML = '';
    showFiles();
}

function showFiles() {
    preview.innerHTML = '';
    if (files.length > 0) {
        files.forEach((file, index) => {
            processFile(file, index);
        });
    } else {
        console.log("No se han seleccionado archivos.");
    }
}

let form = document.getElementById('form');

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const dataTransfer = new DataTransfer();
    files.forEach(file => {
        dataTransfer.items.add(file);
    });
    
    input.files = dataTransfer.files;
    
    // Envía el formulario
    this.submit(); // Se usa 'this' para hacer referencia al formulario actual
});
