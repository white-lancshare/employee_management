const express = require('express');
const router = express.Router();
const {allEmployees,
    getEmployees,
    newEmployee,
    updateEmployee,
    deleteEmployee} = require('../controller/employee.js');


const {}=require('../middleware/logger.js');

router.get('/employees', allEmployees);
router.get('/employees/:id', getEmployees);
router.post('/employees', newEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

module.exports = router;