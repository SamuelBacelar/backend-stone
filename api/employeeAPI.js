const express = require('express');
const Employee = require('../models/employee');


var router = express.Router();


router.get('/', async (req, res) => {
    await Employee.find((err, foundEmployee) => {
        if (!err) {
            res.send(foundEmployee)
            console.log(foundEmployee)
        } else {
            res.send(err)
        }
    });

});

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    console.log(id);

    await Employee.findOne({_id: id}, function (err, foundEmployee) {
        console.log(foundEmployee)
        if (!err) {
            res.send(foundEmployee);
        } else {
            res.send(err);
        }
    })


});

router.post('/', async (req, res) => {
    console.log(req.body)
    const newRegister = new Employee({
        name: req.body.name,
        job: req.body.job,
        adress: req.body.adress,
        city: req.body.city,
        state: req.body.state,
        salary: req.body.salary,
        rg: req.body.rg,
        cpf: req.body.cpf,
        allocation: req.body.allocation
    });

    await newRegister.save((err) => {
        if (!err) {
            res.send('Post saved with success')
        }
        else {
            res.send(err)
        }
    })
})

router.put('/:id', async (req, res) => {
    
    const id = req.params.id
    const updatedEmployee = {
        name: req.body.name,
        job: req.body.job,
        adress: req.body.adress,
        city: req.body.city,
        state: req.body.state,
        salary: req.body.salary,
        rg: req.body.rg,
        cpf: req.body.cpf,
        allocation: req.body.allocation
    }
    console.log(id)
    await Employee.updateOne({_id: id}, updatedEmployee, (err) => {
        if (! err) {
            res.send('Successfully updated post')
        } else {
            return res.send('Error updating the post')
        }
        
    })
})

router.delete('/:id', async (req, res) => {

    const id = req.params.id
    console.log(id)
    await Employee.deleteOne({_id: id}, (err) => {
        if (!err) {
            res.send('Successfully deleted post')
        } else {
            res.send(err)
        }
    })
})


module.exports = app => app.use('/employee', router)