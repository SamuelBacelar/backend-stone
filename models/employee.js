const mongoose = require('../database');

const employeeSchema = new mongoose.Schema ({
    name: String,
    job: String,
    adress: String,
    city: String,
    state: String,
    salary: String,
    rg: String,
    cpf: String,
    allocation: String
})



const Employee = mongoose.model('Employee', employeeSchema);


module.exports = Employee
