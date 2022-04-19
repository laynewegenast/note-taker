const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended:true})),
app.use(express.json())
app.use(express.static("public"))

var apiRoutes = require("./routes/apiRoutes")
app.use(apiRoutes);

var htmlRoutes = require("./routes/htmlRoutes")
app.use(htmlRoutes);

app.listen (PORT, () => {
    console.log(`API server is now on ${PORT}`);
});