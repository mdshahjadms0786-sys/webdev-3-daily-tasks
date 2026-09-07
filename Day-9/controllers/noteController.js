const notes = require('../models/data');

const getNotes = (req, res) => {
    res.status(200).json(notes);
};

const getNoteById = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
};

const createNote = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });
    const newNote = { id: notes.length + 1, title, content };
    notes.push(newNote);
    res.status(201).json(newNote);
};

const updateNote = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).json({ error: 'Note not found' });
    const { title, content } = req.body;
    if (title) note.title = title;
    if (content) note.content = content;
    res.status(200).json(note);
};

const deleteNote = (req, res) => {
    const index = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Note not found' });
    const deleted = notes.splice(index, 1);
    res.status(200).json(deleted[0]);
};

module.exports = { getNotes, getNoteById, createNote, updateNote, deleteNote };
