const Note = require('../../models/note')

module.exports = {
    create,
    index
}

async function create(req, res) {
    const note = new Note({
        text: req.body.text,
        user: req.body.user,
    });
    try {
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    const userId = req.user._id;
    const notes = await Note.find({ user: userId });
    res.json(notes);
}