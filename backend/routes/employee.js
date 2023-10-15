const express  =require('express');
const { GetEmployee, AddEmployee, UpdateEmployee, DeleteEmployee } = require('../controllers/employee.js');
const router = express.Router();
// All the Employee Endpoints
router.get('/allemployee',GetEmployee)
// Add the Employee Endpoints
router.post('/addemployee',AddEmployee)
// Delete the Employee Endpoints
router.delete('/deleteemployee',DeleteEmployee)
// Delete the Employee Endpoints
router.put('/updateemployee',UpdateEmployee)
module.exports = router;