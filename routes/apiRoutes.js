// CRUD (operation - interacting with the database - Proxy db.json)
const app = require('express').Router();
const { notDeepEqual } = require('assert');
const fs = require('fs');

let notes = require('../db/db.json');

app.get('/api/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log('GEET Route', notes)
    res.json(notes)
});

//New Data - C Create
app.post('/api/notes', (req, res) => {
    notes.push({
        id: Math.floor(Math.random() * 123),
        title: req.body.title,
        text: req.body.text
    })

    fs.writeFileSync('./db/db.json', JSON.stringify(notes), function (error) {
        if (error) throw error;
    })
    console.log('POST Route', notes)
    res.json(notes)
});

app.delete('/api/notes/:id', (req, res) => {

    let noteDelete = [];
    for(let i=0;i<notes.length;i++){
        if(notes[i].id != req.params.id){
            noteDelete.push(notes[i])
        }
    }
//    let notesNotDelted = notes.forEach(element => element.id != req.params.id)

    notes = noteDelete
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), function (error) {
        if (error) throw error;
    })
    console.log('delete', notes)
    res.json(notes)
});