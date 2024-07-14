document.addEventListener('DOMContentLoaded', function() {
    fetch('example.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching HTML:', error);
        });
});
