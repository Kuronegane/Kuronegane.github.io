document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons and the popup elements
    const emergencybutton = document.getElementById('emergencybutton');
    const locationbutton = document.getElementById('locationbutton');
    const popup = document.querySelector('.popup');
    const emergencymenu = document.getElementById('emergencymenu');
    const locationmenu = document.getElementById('locationmenu');

    // Log elements to verify they are selected correctly
    console.log('emergencybutton:', emergencybutton);
    console.log('locationbutton:', locationbutton);
    console.log('popup:', popup);

    // Function to show the popup with specific menu
    function showpopup(menu) {
        // Hide all menu sections
        emergencymenu.style.display = 'none';
        locationmenu.style.display = 'none';

        // Show the specified menu section and the popup
        menu.style.display = 'block';
        popup.style.display = 'flex';
    }

    // Add click event listener to the emergency button
    emergencybutton.addEventListener('click', function () {
        console.log('emergency button clicked'); // Log to check click event
        showpopup(emergencymenu);
    });

    // Add click event listener to the location button (only present on one page)
    if (locationbutton) {
        locationbutton.addEventListener('click', function () {
            console.log('location button clicked'); // Log to check click event
            showpopup(locationmenu);
        });
    }

    // Add click event listener to the close button within the popup menus
    const closeButtons = document.querySelectorAll('.popupmenu .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Make the popup invisible when any close button is clicked
            popup.style.display = 'none';
        });
    });
});