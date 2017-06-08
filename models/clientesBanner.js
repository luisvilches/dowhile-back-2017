const mongoose = require('mongoose')
let Schema = mongoose.Schema;

let clientesBanner = new Schema({
	// schema del modelo
    name: String,
    description: String
})

module.exports = mongoose.model('clientesBanner',clientesBanner);
