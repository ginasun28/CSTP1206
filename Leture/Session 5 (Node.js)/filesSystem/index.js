// importing file systemn= module
const fs = require('fs');
const http = require("http");
const PORT = 4000;

const server = http.createServer(function(request, respone) {

    fs.readFile('index.html', function(error, data) {
        if (error) {
            console.log(error, "This was the error");
        }
        // Just making sure that we will read a text
        respone.writeHead('Content-Type', 'text/html');

        respone.write(data);
        return respone.end();

    });
});

server.listen(PORT, function() {
    console.log(`Server running at port ${PORT}`);


});