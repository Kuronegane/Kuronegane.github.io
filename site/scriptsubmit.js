document.addEventListener('DOMContentLoaded', function () {
    // Get the emergency button, submit button, and the popup elements
    const emergencybutton = document.getElementById('emergencybutton');
    const submitButton = document.getElementById('submit');
    const popup = document.querySelector('.popup');
    const emergencymenu = document.getElementById('emergencymenu');
    const submitcat = document.getElementById('submitcat');

    // Log elements to verify they are selected correctly
    console.log('emergencybutton:', emergencybutton);
    console.log('submitButton:', submitButton);
    console.log('popup:', popup);

    // Function to hide all popups
    function hideAllPopups() {
        document.querySelectorAll('.popup').forEach(function (popup) {
            popup.style.display = 'none';
        });
        document.querySelectorAll('.popupmenu').forEach(function (menu) {
            menu.style.display = 'none';
        });
    }

    // Function to show the popup with the specified menu
    function showpopup(menu) {
        hideAllPopups(); // Hide any other popups
        menu.style.display = 'block';
        popup.style.display = 'flex';
    }

    // Add click event listener to the emergency button
    emergencybutton.addEventListener('click', function () {
        console.log('emergency button clicked'); // Log to check click event
        showpopup(emergencymenu);
    });

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function () {
        // Clear radio buttons
        var radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(function (radio) {
            radio.checked = false;
        });

        console.log('submit button clicked'); // Log to check click event
        showpopup(submitcat);
    });

    // Add click event listener to the close button within the emergency menu
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            hideAllPopups();
        });
    });

    document.getElementById('return').addEventListener('click', function () {
        // Navigate back to the previous page
        window.history.back();
    });
});