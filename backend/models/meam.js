const db = require('./db');

class Meme {
    static createMeme(data, callback) {
        const query = 'INSERT INTO memes (title, imageUrl) VALUES (?, ?)';
        db.query(query, [data.title, data.imageUrl], callback);
    }

    static getMemes(callback) {
        const query = 'SELECT * FROM memes';
        db.query(query, callback);
    }
}

module.exports = Meme;
