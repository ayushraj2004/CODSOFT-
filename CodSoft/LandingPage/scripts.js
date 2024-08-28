// scripts.js

// File upload functionality
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.classList.remove('active');
    const files = event.dataTransfer.files;
    handleFiles(files);
});

dropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    fileList.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('p');
        listItem.textContent = `File: ${file.name}`;
        fileList.appendChild(listItem);
    }
}

// about.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.about-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    images.forEach(image => {
        observer.observe(image);
    });
});


// scripts.js

// Google Maps Initialization
function initMap() {
    const mapOptions = {
        zoom: 10,
        center: { lat: 40.730610, lng: -73.935242 }, // Example: New York City
        styles: [ /* Optional: Custom map styles */ ],
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat: 40.730610, lng: -73.935242 },
        map: map,
        title: 'Our Location',
    });
}

// Form submission with basic validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! We will get back to you shortly.');
    this.reset();
});