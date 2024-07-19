document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.querySelector('img:nth-child(2)').style.display = 'block';
            item.querySelector('img:nth-child(1)').style.display = 'none';
        });
        item.addEventListener('mouseout', function() {
            item.querySelector('img:nth-child(2)').style.display = 'none';
            item.querySelector('img:nth-child(1)').style.display = 'block';
        });
    });
});
