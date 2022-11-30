const express = require("express");
const app = express();
const path = require("path");
const PORT = 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/views')));
app.set("view engine", "ejs");


let date = new Date().toISOString().slice(0, 10);

const socialMedia = [
    {name: "Facebook", img: "https://img.icons8.com/color/48/null/facebook.png", href: "https://www.facebook.com/login/"},
    {name: "Instagram", img: "https://img.icons8.com/fluency/48/null/instagram-new.png", href: "https://www.instagram.com/"},
    {name: "Twitter", img: "https://img.icons8.com/color/48/null/twitter--v1.png", href: "https://twitter.com/?lang=zh-Hant"},
    {nmae: "Weibo", img: "https://img.icons8.com/fluency/48/null/weibo.png", href: "https://m.weibo.cn/"},
    {name: "YouTube", img: "https://img.icons8.com/color/48/null/youtube--v1.png", href: "https://www.youtube.com/"}
]

app.get("/", (req, res) => {
    res.render('index', {
        title: 'Assignment Week7',
        name : "Alex",
        email: "alex@gmail.com",
        socialMedia,
        currentDate: date
    });
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
