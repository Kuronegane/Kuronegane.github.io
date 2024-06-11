document.addEventListener('DOMContentLoaded', function () {
    const missingButton = document.getElementById('missing');
    const foundButton = document.getElementById('found');

    missingButton.addEventListener('click', function () {
        missingButton.style.display = 'none';
        foundButton.style.display = 'flex';
    });

    foundButton.addEventListener('click', function () {
        foundButton.style.display = 'none';
        missingButton.style.display = 'flex';
    });
});