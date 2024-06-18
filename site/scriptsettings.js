document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('.popup');
    const saveSettingsPopup = document.getElementById('savesettings');
    const logoutPopup = document.getElementById('logout');
    const saveButton = document.getElementById('savebutton');
    const logoutButton = document.getElementById('logoutbutton');
    const closeButtons = document.querySelectorAll('.close');
    const logoutNoButton = document.getElementById('logoutno');
    const passwordFields = document.querySelectorAll('input[type="password"]');

    // Function to show a popup
    function showPopup(popupMenu) {
        popup.style.display = 'block';
        saveSettingsPopup.style.display = 'none';
        logoutPopup.style.display = 'none';
        popupMenu.style.display = 'block';
    }

    // Function to hide all popups
    function hidePopups() {
        popup.style.display = 'none';
        saveSettingsPopup.style.display = 'none';
        logoutPopup.style.display = 'none';
    }

    // Function to clear password fields
    function clearPasswordFields() {
        passwordFields.forEach(function (field) {
            field.value = '';
        });
    }

    // Show save settings popup
    saveButton.addEventListener('click', function () {
        showPopup(saveSettingsPopup);
        clearPasswordFields();
    });

    // Show logout popup
    logoutButton.addEventListener('click', function () {
        showPopup(logoutPopup);
    });

    // Close buttons to hide the popups
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            hidePopups();
        });
    });

    // Logout no button to hide the popups
    logoutNoButton.addEventListener('click', function () {
        hidePopups();
    });

    document.getElementById('return').addEventListener('click', function () {
        // Navigate back to the previous page
        window.history.back();
    });
});