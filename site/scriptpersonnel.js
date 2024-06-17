document.addEventListener("DOMContentLoaded", function () {
    // Function to show the popup and popupmenu
    function showPopup() {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popupmenu').style.display = 'block';

        // Generate a random 6 symbol line
        const randomLine = generateRandomLine();
        // Display the random line in the element with id 'number'
        document.getElementById('number').innerText = randomLine;
    }

    // Function to hide the popup and popupmenu
    function closePopup() {
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.popupmenu').style.display = 'none';
    }

    // Function to generate a random 6 symbol line
    function generateRandomLine() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Event listener for the generate button
    document.getElementById('generate').addEventListener('click', showPopup);

    // Event listener for the close button
    document.querySelector('.close').addEventListener('click', closePopup);
});

document.querySelector('.return').addEventListener('click', function () {
    window.history.back();
});