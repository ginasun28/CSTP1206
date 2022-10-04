// Assignment3

function add() {
    console.log("Adding Info")
    let info = [];

    if (localStorage.getItem('infos')) {
        info = JSON.parse(localStorage.getItem('infos'));
    }

    let infoData2 = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        stuid: document.getElementById('stuid').value
    }
    
    info.push(infoData2);
    localStorage.setItem('infos', JSON.stringify(info));

    
    displayTable();
    clearInput();
    
}

function displayTable() {
    
    // let tableTitle = document.createElement('h3');
    // tableTitle.append("Information Table");
    // tableTitle.id = "tableid";
    // document.getElementById('table').appendChild(tableTitle);
    let btnClear = document.createElement('button');
    btnClear.append("Clear");
    btnClear.id = "clear";


    let tableHeaders = ['Name', 'Email Address', 'Student ID'];

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    tableHeaders.forEach(title => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(title);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    if (localStorage.getItem('infos')) {
        
        JSON.parse(localStorage.getItem('infos')).forEach(item => {
            let row = document.createElement('tr');
            let cell = document.createElement('td');
            let textNode = document.createTextNode(item.name);
            cell.appendChild(textNode);
            row.appendChild(cell);

            cell = document.createElement('td');
            textNode = document.createTextNode(item.email);
            cell.appendChild(textNode);
            row.appendChild(cell);

            cell = document.createElement('td');
            textNode = document.createTextNode(item.stuid);
            cell.appendChild(textNode);
            row.appendChild(cell);

            table.appendChild(row);
            }); 
    }
    document.getElementById("table").appendChild(table);
    // document.getElementById("table").appendChild(btnClear);
    // document.getElementById("clear").onclick = function() {clear()};
}

// function clear()   {
//     console.log("Clear called")
//     localStorage.clear();
// }

function clearInput() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('stuid').value ="";
}

