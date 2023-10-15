const EmployeeModel = require("../model/employee.js");


// Getting the Employee.
const GetEmployee = async(req,res)=>{
    try{
        const allemployee = await EmployeeModel.find()
        res.status(200).json({all:allemployee})
    }
    catch(err){
        res.status(505).json({error:err.message})
      }
}

// Add the Employee.
const AddEmployee = async (req, res) => {
    try{
        // take the input 
        const {fullName, email,number,address,department} =req.body;
        // validations...
        if(!fullName || !email || !number || !address || !department){
          return res.status(404).json({message: 'All fields are required'})
        }
        // Checks if user already exist..
        const existingUser = await EmployeeModel.findOne({email})
        if(existingUser){
          return res.status(404).json({
            message:'Employee already registered.'
          })
        }
        
        // Add the employee..
        const employee = await new EmployeeModel({
          fullName,
          email,
          number,
          address,
          department,
        }).save()
        res.status(200).json({
          success:true,
          message:'Employee successfully Added',
          employee
    
        })
      }
      catch(err){
        res.status(505).json({error:err.message})
      }
}

// Delete the Employee.
const DeleteEmployee = async (req, res) => {
    try{
        const {_id}= req.body;
        const result = await EmployeeModel.findByIdAndDelete(_id);
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
      }
      catch(err){
        res.status(505).json({error:err.message})
      }
}

// Update the Employee.
const UpdateEmployee = async (req, res) => {
    try{
        const {_id,fullName,email,number,address,department}= req.body;
        const result = await EmployeeModel.findByIdAndUpdate(_id,{fullName,email,number,address,department});
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully' });
      }
      catch(err){
        res.status(505).json({error:err.message})
      }
}



module.exports = { AddEmployee,GetEmployee,DeleteEmployee,UpdateEmployee};