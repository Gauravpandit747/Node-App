const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const testSchema = new Schema({
title:{
    type: String, 
    require: true, 
}, 

name:{
    type: String, 
    require: true, 
}, 
}, {timeStamps: true} );


const Country = mongoose.model('Countries', testSchema);

module.exports = Country;