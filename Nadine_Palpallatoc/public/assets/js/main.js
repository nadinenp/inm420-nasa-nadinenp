console.log('try');

// this is to define a function to fetch data from the NASA APOD API
async function fetchAPOD() {
    try {
        // this is to get the user-selected date from the input field
        const date = document.getElementById('dateInput').value;

        // my NASA API key
        const apiKey = 'S1gh39gdmF1e2G0HP0rMqEnad4NtkSWI0xJcLR0f';

        // API URL with the date + API key
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

        // this is to get request to the API
        const response = await fetch(apiUrl);

        // parse the response as JSON
        const data = await response.json();

        // this is to extract the image URL and explanation from the response data
        const imageUrl = data.url;
        const explanation = data.explanation;

        // to display the image and explanation
        const apodImage = document.getElementById('apodImage');
        apodImage.src = imageUrl; // image source
        apodImage.alt = 'Astronomy Picture of the Day'; // Set the image alt text

        const apodExplanation = document.getElementById('apodExplanation');
        apodExplanation.textContent = explanation; // explanation text
    } 
    
    catch (error) {
        // errors
        console.error('Error fetching APOD:', error);
    }
}
