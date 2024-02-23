const express = require('express');
//http requests
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

//define a route to fetxh and display a random duck image
app.get('/random-duck', async (req, res) => {
    try {
        //fetch a image from the API
        const response = await axios.get('https://random-d.uk/api/v1/random');

        //extract the image URL from the response
        const imageURL = response.data.url;

        //send the image URL as a JSON response
        res.json({ imageURL, success: true });
    } catch (error) {
        //handle errors and send error response
        console.error(error);
        res.status(500).json({error: 'Internal Server Error', success: false });
    }

});

 // start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


 