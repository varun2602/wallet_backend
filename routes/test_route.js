const express = require("express")
const router = express.Router() 
const Address = require("../models/wallet_model")

router.get("/address", function(req, res){
    
    address = Address(req.body)
    address.save()
    res.send(req.body)
})
module.exports = router