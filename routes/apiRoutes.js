// CRUD (operation - interacting with the database - Proxy db.json)
const app = require('express').Router(); 
const fs = require('fs');

const  notes  = require('../db/db.json');

app.get ('/api/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log('GEET Route',notes)
    res.json(notes)
});


//New Data - C Create
app.post ('/api/notes', (req, res) => {
     notes.push({
         id: Math.floor(Math.random() * 123),
         title: req.body.title,
         text: req.body.text
     })

    fs.writeFileSync('./db/db.json', JSON.stringify(notes),function(error){
        if (error) throw error;
    })
    console.log('POST Route',notes)
    res.json(notes)
});