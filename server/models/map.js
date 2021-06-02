const {Schema, model} = require('mongoose');

const mapSchem = new Schema({
    links: Object,
    shedule: Object,
    address_name: Number,
    point: Object,
    name_ex: Object,
}, { collection : 'map' });

module.exports = model('MapModel', mapSchem);