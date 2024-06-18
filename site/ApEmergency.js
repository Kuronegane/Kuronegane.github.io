document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all buttons with the class 'claimbutton'
    document.querySelectorAll('.claimbutton').forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the ID between 'claimable' and 'claimed' for the clicked button
            if (button.id === 'claimable') {
                button.id = 'claimed';
            } else if (button.id === 'claimed') {
                button.id = 'claimable';
            }
        });
    });
});

document.querySelector('.return').addEventListener('click', function () {
    window.history.back();
});