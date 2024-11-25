const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    background-color: purple;
                    font-style: italic;
                    font-family: 'Arial', sans-serif;
                    color: white;
                    text-align: center;
                    padding: 50px;
                }
            </style>
            <title>Welcome to Cloud Cloud CPworld , Thank you Aseem sir for your support</title>
        </head>
        <body>
            <h1>Welcome to Cloud CPworld ,Sharing is caring  , Thank you very much for your love and affectoons , keep loving , thankyou <3 </h1>
            <p>Do judge yourself before judging others</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
