const express = require('express');
const Task = require('../models/task');
const MiningPool = require('../models/mining-pool');
const router = new express.Router();

//----Mining pools

router.post('/miningPools/:asset/:method', async(req, res) => {

    const pool = new MiningPool(req.body);

    try {
        await pool.save();
        res.send(pool);

    } catch (e) {
        res.status(400).send(e);
    }

})

router.get('/miningPools/:asset/:poolName', async(req, res) => {

    const asset = req.params.asset;
    const poolName = req.params.poolName;

    try {
        const pool = await MiningPool.find({asset, poolName});
        if(!pool) {
            return res.status(404).send();
        }
        res.send(pool);
    } catch(e) {

    }
})

module.exports = router;