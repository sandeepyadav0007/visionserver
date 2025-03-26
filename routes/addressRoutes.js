const express = require('express');
const router = express.Router();
const Address = require('../models/address');

// Save addresses
router.post('/', async (req, res) => {
  try {
    const { startAddress, destinationAddress } = req.body;
    const newAddress = new Address({ startAddress, destinationAddress });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an address
// Delete an address
router.delete('/:id', async (req, res) => {
  try {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);
    if (!deletedAddress) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.json(deletedAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get all addresses
router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find().sort({ createdAt: -1 });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;