const albumImages = document.getElementById('album-images');

// Replace with the actual JSONPlaceholder API URL for albums
const apiUrl = 'https://jsonplaceholder.typicode.com/albums';

// Fetch data from the API
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((photo) => {
            const image = document.createElement('img');
            image.src = photo.url;
            image.alt = photo.title;
            albumImages.appendChild(image);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
