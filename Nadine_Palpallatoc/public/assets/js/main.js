console.log('try');

// This is the "Get Photo" button
const getPhotoButton = document.getElementById('getPhotoButton');
getPhotoButton.addEventListener('click', () => {
    const date = document.getElementById('dateInput').value;
    fetchAPOD(date);
});

// This is to define the function to fetch data from the NASA APOD API
async function fetchAPOD(date) {
    try {
        // My NASA API key
        const apiKey = 'S1gh39gdmF1e2G0HP0rMqEnad4NtkSWI0xJcLR0f';

        // API URL with the date + API key
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

        // Send request to the API
        const response = await fetch(apiUrl);

        // Parse the response as JSON
        const data = await response.json();

        // This is to extract the image URL and explanation from the response data
        const imageUrl = data.url;
        const explanation = data.explanation;

        // This is to display the image and explanation
        const apodImage = document.getElementById('apodImage');
        apodImage.src = imageUrl; // Image source
        apodImage.alt = 'Astronomy Picture of the Day'; 

        const apodExplanation = document.getElementById('apodExplanation');
        apodExplanation.textContent = explanation; // Explanation text
    } catch (error) {

        // Handle errors
        console.error('Error fetching APOD:', error);
    }
}
