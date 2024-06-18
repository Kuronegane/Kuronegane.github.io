// Function to show the popup and popupmenu
function showPopup() {
    document.querySelector('.popup').style.display = 'block';
    document.querySelector('.popupmenu').style.display = 'block';
}

// Function to hide the popup and popupmenu
function hidePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.querySelector('.popupmenu').style.display = 'none';
}

// Add event listeners to all elements with the class 'misbutton'
document.querySelectorAll('.misbutton').forEach(function (button) {
    button.addEventListener('click', function () {
        // Check if the button has the id 'catfound'
        if (this.id === 'catfound') {
            return; // Do nothing if the id is 'catfound'
        }

        // Show the popup and popupmenu
        showPopup();

        // Reference to the clicked button
        const clickedButton = this;

        // Event listener for the 'findno' button
        document.getElementById('findno').addEventListener('click', function () {
            // Hide the popup and popupmenu
            hidePopup();
        });

        // Event listener for the 'findyes' button
        document.getElementById('findyes').addEventListener('click', function () {
            // Hide the popup and popupmenu
            hidePopup();
            // Set the id of the clicked button to 'catfound'
            clickedButton.id = 'catfound';
        });
    });
});

document.querySelector('.return').addEventListener('click', function () {
    window.history.back();
});

//doingthistogetitongit