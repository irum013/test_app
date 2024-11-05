// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import './stylesheets/application.css';

$(document).ready(function() {
    console.log('JavaScript is working!');

    const img = new Image();
    img.src = '/assets/image.png';
    img.onload = () => console.log('Image loaded successfully!');
    img.onerror = () => console.log('Error loading image');
});