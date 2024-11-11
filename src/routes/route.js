const express = require('express');
const userRoutes = require('./user.route');
const groupRoutes = require('./group.route');
const tagRoutes = require('./tag.route');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/group', groupRoutes);
router.use('/tag', tagRoutes);

module.exports = router;