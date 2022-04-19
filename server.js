const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db.json');


app.listen (PORT, () => {
    console.log(`API server is now on ${PORT}`);
});