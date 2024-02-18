// Drag And Drop
function handleDragOver(event) {
    event.preventDefault();
    document.getElementById('drop-area').classList.add('highlight');
}

function handleDragLeave(event) {
    event.preventDefault();
    document.getElementById('drop-area').classList.remove('highlight');
}

function handleDrop(event) {
    event.preventDefault();
    document.getElementById('drop-area').classList.remove('highlight');

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      handleFile(files[0]);
    }
}

function handleClick() {
    document.getElementById('file-input').click();
    document.getElementById('file-input').addEventListener('change', handleFileSelect);
}

function handleFileSelect() {
    const files = document.getElementById('file-input').files;

    if (files.length > 0) {
      handleFile(files[0]);
    }
}

function handleFile(file) {
    const dropArea = document.getElementById('drop-area');
    dropArea.innerHTML = '';

    if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = function() {
            URL.revokeObjectURL(this.src); // Free up memory after load
        };
        img.classList = 'w-25'
        dropArea.appendChild(img);
    } else {
        const p = document.createElement('p');
        p.textContent = `File: ${file.name}, Type: ${file.type}`;
        dropArea.appendChild(p);
    }
}


$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});