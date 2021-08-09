const router = require('express').Router();
const db = require("../config/db.config");
const Organization = db.organization;

router.post('/', async (req, res) => {
    
    // validation

    Organization.create(req.body).then(r => {
        res.json(r);
    }).catch(e => {
        res.status(500).json({message: e.message});
    });    
   
});

module.exports = router;
