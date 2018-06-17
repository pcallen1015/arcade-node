const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WinSchema = new Schema({
    player: { type: String, required: true },
    game: { type: String, required: true },
    playedOn: { type: Date, required: true }
});

mongoose.model('Win', WinSchema);