const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let servicios = new Schema({
	// schema del modelo
    name: String,
    description: String,
    home: Boolean,
    icon: String
})

module.exports = mongoose.model('servicios',servicios);
