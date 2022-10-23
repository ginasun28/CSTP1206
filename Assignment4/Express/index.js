// Question3
// Write a Express server where you will keep records of Employees
// Write get and post api’s for getting all the employees and adding employee to the list
// The object of Employee should look like

const express = require("express");
const app = express();
const PORT = 4000;

const employees = [
    {
      name: "Daniel",
      employeeId: 100,
      email: "daniel@gmail.com",
      department: "IT"
    }
];

 app.use(express.json());

app.get('/', (req, res) => {
    console.info("in the index /");
    res.status(200).send("Welcome to Employee API!");

});

app.get('/employees', (req, res) => {
    // get succeed request give 200
    const data = res.status(200);
    return data.json(employees); // return []
});

app.post('/employees', (req, res) => {
    const employeeData = req.body;
    employees.push(employeeData);
    const data = res.status(201);
    return data.json(employeeData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});