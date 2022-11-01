const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static(__dirname + '/images'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', {
        title: 'Assignment Week7',
        name : "Alex",
        email: "alex@gmail.com",

    });
})



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
