    document.addEventListener('DOMContentLoaded', function () {
        const returnButton = document.querySelector('.return');
        returnButton.addEventListener('click', function () {
            // Redirect to the desired URL
            window.location.href = 'https://example.com'; // Replace 'https://example.com' with the URL you want to redirect to
        });
        document.getElementById('return').addEventListener('click', function () {
            // Navigate back to the previous page
            window.history.back();
        });
    });