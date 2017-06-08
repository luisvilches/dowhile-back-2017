const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let banner = new Schema({
	// schema del modelo
    name: String,
    description: String
})

module.exports = mongoose.model('banner',banner);
