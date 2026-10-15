const database = require('../model/database.json')
const fs = require('fs')

const saveToDb = (data) =>{
    return new Promise((resolve, reject)=>{
         fs.writeFile('./model/database.json', data, (error, data)=>{
            if (error) {
                reject('Error writing to File')
            } else{
                resolve('File Written Successfully')
            }
        })
    })
}

const saveLogsToDb = (data) =>{
    return new Promise((resolve, reject)=>{
         fs.appendFile('./model/logger.txt', data, (error, data)=>{
            if (error) {
                reject('Error writing to File')
            } else{
                resolve('File Written Successfully')
            }
        })
    })
}

const allEmployees = (req, res) =>{
    const user = database;
    res.status(200).json({
        message: "User Read Successfully",
        data:user
    }) 
}

const getEmployees = (req, res) => {
    const id = Number(req.params.id);
    const user = database.find((user) => user.id === id);

    if (!employee) {
        return res.status(404).json({
            message: 'employee not found'
        });
    }

    res.status(200).json({
        message: 'User Read successfully',
        data: user
    });
};

const newEmployee = async() =>{
    const {name, age, gender, email, phoneNo, department, jobRole} = req.body

    const employee = {
        id: database.length + 1,
        name,
        age,
        gender,
        email,
        phoneNo,
        department,
        jobRole
    }
    database.push(employee)
    await  saveToDb(JSON.stringify(database), null, 2)

    res.status(201).json({message: "Employee Created Successfully"})
}

const updateEmployee = async() =>{
    const id = Number(req.params.id);
    const user = database.find((user)=>user.id === id)

    if (!employee) {
        return res.status(404).json({
            message: 'employee not found'
        })
    }
    
    if (req.body.name !== undefined) {
        user.name = req.body.name
    }
    
    if (req.body.age !== undefined) {
        user.age = req.body.age
    }

    if (req.body.gender !== undefined) {
        user.gender = req.body.gender
    }

    if (req.body.email !== undefined) {
        user.email = req.body.email
    }

    if (req.body.phoneNo !== undefined) {
        user.phoneNo = req.body.phoneNo
    }

    if (req.body.department !== undefined) {
        user.department = req.body.department
    }

    if (req.body.jobRole !== undefined) {
        user.jobRole = req.body.jobRole
    }
    
    await  saveToDb(JSON.stringify(database), null, 2)

    res.status(201).json({message: "Employee Updated Successfully",
        data: user
    })
}

const deleteEmployee = async() =>{
    const id = Number(req.params.id);
    const user = database.find((user)=>user.id === id)

    if (!employee) {
        return res.status(404).json({
            message: 'employee not found'
        })
    }
    
    database.splice(database.indexOf(user), 1)
    await  saveToDb(JSON.stringify(database), null, 2)

    res.status(200).json({message: "Employee Deleted Successfully"})
}


module.exports = {
    allEmployees,
    getEmployees,
    newEmployee,
    updateEmployee,
    deleteEmployee,
    saveLogsToDb
}