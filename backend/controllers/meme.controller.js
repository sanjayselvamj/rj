const Meme = require('../models/meam');

exports.getMemes = (req, res) => {
    Meme.getMemes((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createMeme = (req, res) => {
    const data = req.body;
    Meme.createMeme(data, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: 'Meme created!', id: result.insertId });
    });
};
