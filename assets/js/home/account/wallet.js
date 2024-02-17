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
      dropArea.appendChild(img);
    } else {
      const p = document.createElement('p');
      p.textContent = `File: ${file.name}, Type: ${file.type}`;
      dropArea.appendChild(p);
    }
}

// modals
// Quick Demo JS
function openModal() {
  document.getElementById('card-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('card-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close the modal if the overlay is clicked
window.onclick = function (event) {
  if (event.target === document.getElementById('card-modal')) {
    closeModal();
  }
};

$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});