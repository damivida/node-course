const mongoose = require('mongoose');
const validator = require('validator');


const MiningPool = mongoose.model('MiningPool', {
        asset: {
            type: String,
            required: true
        },
        poolName: {
            type: String,
            require: true,
            trim: true
        },
        hashRate: {
            type: Number,
            required: true,
        }, 
        coinsPerDay: {
            type: Number,
            required: true
        },
        fee: {
            type: Number,
            required: false
        },
        lastBlock: {
            type: String,
            required: false
        }, 
        method: {
            type: String,
            required: true
        }
})

module.exports = MiningPool;
