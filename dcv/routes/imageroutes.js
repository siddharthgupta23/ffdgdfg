const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, '..', 'public', 'uploads', filename);
  
    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error('Error serving image:', err);
        res.status(404).send('Image not found');
      }
    });
});

module.exports = router;
