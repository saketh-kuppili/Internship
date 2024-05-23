document.addEventListener('DOMContentLoaded', function() {
    const downloadItems = document.querySelectorAll('.download-item');

    downloadItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');

            // Animate the max-height for smooth expansion and collapse
            const details = this.querySelector('.download-details');
            if (this.classList.contains('expanded')) {
                details.style.maxHeight = details.scrollHeight + 'px';
            } else {
                details.style.maxHeight = 0;
            }
        });
    });
});
