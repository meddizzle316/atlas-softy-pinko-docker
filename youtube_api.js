// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'AIzaSyCm7hz_8xjR8jaoQnWowEQ4idywbmX8kyA';
const searchQuery = 'cats'; // The search query
const maxResults = 10; // Maximum number of results to return

// Construct the URL for the search request
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchQuery}&key=${apiKey}`;

const fetch = require("node-fetch"); 

// Fetch the search results from the YouTube Data API
fetch(url)
 .then(response => response.json())
 .then(data => {
    // Log the search results to the console
    console.log(data);
 })
 .catch(error => {
    console.error('Error fetching data:', error);
 });
