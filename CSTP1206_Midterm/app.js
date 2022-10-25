const express = require("express");
const app = express();
const PORT = 4000;  // my macbook cannot use 5000

let employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000
    }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/employees");
});


app.get("/employees", (req, res) => {
    return res.status(200).json({
        message: "Succesfully fetched the employee!",
        data: employeeList
    });
});

// Return the list of employees for given department name (Search / READ)
app.get("/employees/:department", (req, res) => {

    const departemntName = req.params.department;
    const findDepartment = employeeList.find((emp) => emp.department == departemntName ? true : false);
    if (findDepartment) {
        return res.status(200).json( {
            message: "Find the information:",
            data: findDepartment
        });
    } else {
        return res.status(404).json({
            message: "Employees list doesn't exist!!"
        });
    }
});

// Return the employee with the employee ID (Search / READ)
app.get("/employees/id/:employeeID", (req, res) => {

    const empid = req.params.employeeID;
    const findEmpId = employeeList.find((emp) => emp.employeeID == empid ? true : false);
    if (findEmpId) {
        return res.status(200).json({
            message: "Find the information:",
            data: findEmpId
        });
    } else {
        return res.status(404).json({
            message: "Employees list doesn't exist!!"
        });
    }
});

// Creates the Employee (POST)
app.post("/employees", (req, res) => {
    const data = req.body;
    data.id = employeeList.length + 1;
    if (!data.name || !data.email || !data.employeeID || !data.department || !data.Salary) {
        return res.status(500).json({
            message: "Some of the employee's information is missing!"
        });
    }; 
    employeeList.push(data);
    return res.status(201).json({
        message: "Succesfully created the employee",
        data: employeeList
    });
});


// Updates the Employee for given ID (PUT)
app.put("/employees/id/:employeeID", (req, res) => {
    const empid = req.params.employeeID;
    const updateInfo = req.body;
    console.log(updateInfo);
    if (!updateInfo.name || !updateInfo.email || !updateInfo.employeeID || !updateInfo.department || !updateInfo.Salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }


    employeeList = employeeList.map((post) => {
        if (post.employeeID == empid) {
            post = updateInfo;
        }
        return post;
    });

    return res.status(200).json({
        message: "Succesfully updated the emplpoyee infomation!",
        data: employeeList
    });

});

// Deletes the Employee for Given ID (DELETE)
app.delete("/employees/id/:employeeID", (req, res) => {

    const empid = req.params.employeeID;

    const pointer = employeeList.findIndex((emp) => {
        if (emp.employeeID == empid) {
            return true;
        }
    });

    if (pointer !== -1) {
        employeeList.splice(pointer, 1);

        return res.status(200).json({
            message: "Succesfully deleted the employee information",
            data: employeeList
        });
    
    } else {
        return res.status(404).json({
            message: "Information is not found, you cannot to delete does not exist data!"
        });
    };

});

// Return the list of employees in sorted fashion of highest salaries
app.get("/employees/salaries/highest", (req, res) => {
    
    employeeList.sort(function compareFn(a, b) { 
        return b.Salary - a.Salary;
    });

    return res.status(200).json({
        message: "As following is highest salaries employee list",
        data: employeeList
    });

});


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

