document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`${this.parentElement.querySelector('h3').textContent} added to cart!`);
        });
    });
});
