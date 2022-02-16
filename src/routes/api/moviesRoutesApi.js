const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');


router.get('/', moviesAPIController.list);
router.get('/detail/:id', moviesAPIController.detail);
router.post('/create', moviesAPIController.create);
router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;