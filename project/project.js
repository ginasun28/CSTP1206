const http = require("http");
const PORT = 5000;

const server = http.createServer((request, response) => {
    console.log("Server created");
    if (request.url === "/") {

        response.setHeader('Content-type', "text/html");
        response.write("<h1>Hello Thank you for contacting me! </h1>");
        response.end();

    };

    // if (request.url === "/dig") {
        
    //     response.setHeader('Content-type', "text/html");
    //     response.write("<img src= 'http://5b0988e595225.cdn.sohucs.com/images/20180207/124158d65c734f01978dc6880afe016e.jpeg' >"); 
    //     response.end();
    // };

    // if (request.url === "/cat") {
    //     response.setHeader('Content-type', "text/html");
    //     response.write("<img src= 'https://i.pinimg.com/originals/06/ed/16/06ed16be4e898a5f21c7b2b651262c92.jpg' >");
    //     response.end();
    // };

});

// Listen a server
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);    
})