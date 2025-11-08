document.addEventListener('DOMContentLoaded', () => {
    // Select all section blocks in the CV body
    const sections = document.querySelectorAll('.section-block');

    sections.forEach(section => {
        // Add highlight class on mouse enter
        section.addEventListener('mouseenter', () => {
            section.classList.add('highlight');
        });

        // Remove highlight class on mouse leave
        section.addEventListener('mouseleave', () => {
            section.classList.remove('highlight');
        });
    });
});