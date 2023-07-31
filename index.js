require('dotenv').config();
const fetch = require("isomorphic-fetch");

// Print out value of API key stored in .env file
//console.log(process.env.GIPHY_API_KEY)

async function getImages(query){
    try{
        const fetched = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`);
        const parsed = await fetched.json();
        const url = parsed.url;
        console.log(url)
    } catch (error){
        console.log(error)
    }
}

getImages("owl");