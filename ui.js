document.querySelectorAll('.zoomable').forEach(image => {
    image.addEventListener('click', (e) => {
      window.open(e.target.src, '_blank');  // This will open the image in a new tab
    });
});
