const express = require('express');;;;;;;;;
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Helloasdsadsa');
})

app.listen(port);

console.log(`Losten on port ${port}`);
