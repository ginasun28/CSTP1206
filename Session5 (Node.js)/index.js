// Importing http module from node.js to our project
const http= require("http");
// const PORT = 4000;
const PORT = 5000;

                                            // sent to the client
const server = http.createServer((request, response) => {
    console.log("Server created");
    if (request.url === "/") {
        // Setting hearders to text and html so the browser knows what
        // kind of response client will receieve
        response.setHeader('Content-typ', "text/html");
        // we are sending a respomnse to the client'/ browser using response
        response.write("<h1>Hello Thank you for contacting me! </h1>");
        // ending the response : the message what i send
        response.end();

        // ＊ why the server is not changingnp, since did not re-run the server


    };

    if (request.url === "/dig") {
        // Setting hearders to text and html so the browser knows what
        // kind of response client will receieve
        response.setHeader('Content-typ', "text/html");
        // we are sending a respomnse to the client'/ browser using response
        response.write("<img>"); // src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"
        // ending the response : the message what i send
        response.end();
    }

});

// Listen a server
// listen(port?: number | undefined, hostname?: string | undefined, backlog?: number | undefined, listeningListener?: (() => void) | undefined): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);    
})