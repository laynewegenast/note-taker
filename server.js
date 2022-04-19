const express = require('express');

const port = process.env.PORT || 3001;
const app = express();

app.listen (PORT, () => {
    console.log(`API server is now on ${PORT}`);
});