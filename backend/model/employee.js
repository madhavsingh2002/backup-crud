const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },  
});
const EmployeeModel = mongoose.model("EmployeeModel", employeeSchema);
module.exports = EmployeeModel;