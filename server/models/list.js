import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	// Relations
	
	boardId: { type: ObjectId, ref: models.board, required: true },
	cards: {type: ObjectId, ref: 'Card'}
});

module.exports = mongoose.model(models.list.name, schema);
