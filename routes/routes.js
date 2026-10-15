const express = require('express');
const router = express.Router();
const {allEmployees,
    getEmployees,
    newEmployee,
    updateEmployee,
    deleteEmployee} = require('../controller/employee.js');


const logger =require('../middleware/logger.js');

router.get('/employees', logger, allEmployees);
router.get('/employees/:id', logger, getEmployees);
router.post('/employees', logger, newEmployee);
router.put('/employees/:id', logger, updateEmployee);
router.delete('/employees/:id', logger, deleteEmployee);

module.exports = router;