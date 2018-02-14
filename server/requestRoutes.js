const router = require('express').Router();
const memeCtrl = require('./memeCtrl');

router.get('/mymemes', memeCtrl.fetch);
router.post('/mymemes', memeCtrl.create);

module.exports = router;