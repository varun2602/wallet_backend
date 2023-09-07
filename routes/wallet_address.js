const express = require('express');
const router = express.Router();
const WalletAddress = require('../models/wallet_model');

// Adress registration 
router.post('/address', async (req, res) => {
    try {
        const { address } = req.body;
        const existingAddress = await WalletAddress.findOne({ address });
        if (existingAddress) {
            return res.status(400).json({ message: 'Address already registered' });
        }
        const walletAddress = new WalletAddress({ address });
        await walletAddress.save();
        res.status(201).json({ message: 'Wallet address created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the wallet address' });
    }
});

// Retrieve user id 
router.get('/address/:address', async (req, res) => {
    try {
        const { address } = req.params;
        const walletAddress = await WalletAddress.findOne({ address });
        if (!walletAddress) {
            return res.status(404).json({ error: 'Wallet address not found' });
        }
        res.json({ user_id: walletAddress.user_id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving the user_id' });
    }
});

// Fetch wallet address 
router.get('/address', async (req, res) => {
    try {
        const address = await WalletAddress.find();
        res.status(200).json(address);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to fetch Wallet Address' });
    }
});
module.exports = router;
