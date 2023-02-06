const Router = require('express');
const { getFilters } = require('../controllers/getFilters');

const router = Router();

router.get('/', getFilters);

module.exports = router;