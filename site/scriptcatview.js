document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('like');
    const likedButton = document.getElementById('liked');
    const shelterOptionButton = document.getElementById('shelteroption');
    const reportVideoButton = document.getElementById('reportvideo');
    const confirmReportButton = document.getElementById('confirmreport');
    const closeButtons = document.querySelectorAll('.close');

    const gifs = [
        document.getElementById('gif1'),
        document.getElementById('gif2'),
        document.getElementById('gif3')
    ];

    let currentGifIndex = 0;
    let isAnimating = false;
    const likeStates = [false, false, false]; // Track the like state for each GIF

    // Update like button visibility based on the current GIF's like state
    function updateLikeButton() {
        if (likeStates[currentGifIndex]) {
            likeButton.style.display = 'none';
            likedButton.style.display = 'flex';
        } else {
            likeButton.style.display = 'flex';
            likedButton.style.display = 'none';
        }
    }

    likeButton.addEventListener('click', function () {
        likeStates[currentGifIndex] = true;
        updateLikeButton();
    });

    likedButton.addEventListener('click', function () {
        likeStates[currentGifIndex] = false;
        updateLikeButton();
    });

    shelterOptionButton.addEventListener('click', function () {
        document.querySelector('.popup').style.display = 'block';
        document.getElementById('shelteroptionmenu').style.display = 'block';
        document.getElementById('reportvideomenu').style.display = 'none';
        document.getElementById('reportconfirmmenu').style.display = 'none';
    });

    reportVideoButton.addEventListener('click', function () {
        document.querySelector('.popup').style.display = 'block';
        document.getElementById('reportvideomenu').style.display = 'block';
        document.getElementById('shelteroptionmenu').style.display = 'none';
        document.getElementById('reportconfirmmenu').style.display = 'none';
    });

    confirmReportButton.addEventListener('click', function () {
        document.querySelector('.popup').style.display = 'block';
        document.getElementById('reportvideomenu').style.display = 'none';
        document.getElementById('shelteroptionmenu').style.display = 'none';
        document.getElementById('reportconfirmmenu').style.display = 'block';
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            document.querySelectorAll('.popup').forEach(function (popup) {
                popup.style.display = 'none';
            });
        });
    });

    function swipeUp() {
        if (isAnimating) return;
        isAnimating = true;

        const currentGif = gifs[currentGifIndex];
        const nextGifIndex = (currentGifIndex + 1) % gifs.length;
        const nextGif = gifs[nextGifIndex];

        // Prepare the next GIF
        nextGif.style.transform = 'translateY(100%)'; // Position it at the bottom first
        nextGif.style.zIndex = '3';
        setTimeout(() => {
            nextGif.style.transition = 'transform 0.5s';
            nextGif.style.transform = 'translateY(0)';
        }, 20); // Use a tiny delay to allow the browser to apply the initial position

        // Move the current GIF up and then reset its position
        currentGif.style.transition = 'transform 0.5s';
        currentGif.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            currentGif.style.zIndex = '1';
            currentGif.style.transform = 'translateY(100%)'; // Move it back down for future use
            currentGifIndex = nextGifIndex;
            updateLikeButton(); // Update the like button based on the new current GIF
            isAnimating = false;
        }, 500); // This duration should match the CSS transition duration
    }

    function swipeDown() {
        if (isAnimating) return;
        isAnimating = true;

        const currentGif = gifs[currentGifIndex];
        const previousGifIndex = (currentGifIndex - 1 + gifs.length) % gifs.length;
        const previousGif = gifs[previousGifIndex];

        // Prepare the previous GIF
        previousGif.style.transform = 'translateY(-100%)'; // Position it at the top first
        previousGif.style.zIndex = '3';
        setTimeout(() => {
            previousGif.style.transition = 'transform 0.5s';
            previousGif.style.transform = 'translateY(0)';
        }, 20); // Use a tiny delay to allow the browser to apply the initial position

        // Move the current GIF down and then reset its position
        currentGif.style.transition = 'transform 0.5s';
        currentGif.style.transform = 'translateY(100%)';
        setTimeout(() => {
            currentGif.style.zIndex = '1';
            currentGif.style.transform = 'translateY(-100%)'; // Move it back up for future use
            currentGifIndex = previousGifIndex;
            updateLikeButton(); // Update the like button based on the new current GIF
            isAnimating = false;
        }, 500); // This duration should match the CSS transition duration
    }

    function addSwipeListener() {
        let startY;

        document.addEventListener('touchstart', function (event) {
            startY = event.touches[0].clientY;
        });

        document.addEventListener('touchend', function (event) {
            const deltaY = startY - event.changedTouches[0].clientY;
            if (deltaY > 50) { // Swipe up
                swipeUp();
            } else if (deltaY < -50) { // Swipe down
                swipeDown();
            }
        });
    }

    addSwipeListener();
    updateLikeButton(); // Initialize like button visibility
});