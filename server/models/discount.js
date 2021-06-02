const {Schema, model} = require('mongoose');

const Discount = new Schema({
    img: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: false
    },
    priceBig: {
        type: String,
        required: true
    },
    priceSmall: {
        type: String,
        required: true
    }
}, { collection : 'Discount' });

module.exports = model('Discount', Discount);