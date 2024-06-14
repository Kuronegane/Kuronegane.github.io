window.addEventListener('load', function () {
    // Set the URL to redirect to after 5 seconds
    const redirectUrl = 'https://www.example.com';

    // Set the timer to redirect after 5 seconds (5000 milliseconds)
    setTimeout(function () {
        window.location.href = redirectUrl;
    }, 4500);
});