const express = require("express");
const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

//Home Page Router

app.get("/", (req, res) => {
    res.status(201).send("<h1>JAY BHIM</h1>");
});

//InstaGram Profile Router

app.get("/api/v1/instagram", (req, res) => {
    const instaProfileData = {
        userName: "Chirag_Solanki6804",
        Followers: 226,
        Following: 684,
        date: format.asString("dd-MM-yyyy :: hh:mm:ss", new Date()),
    }
    res.status(200).json(instaProfileData);
});

//Facebook Profile Router

app.get("/api/v1/facebook", (req, res) => {
    const fbProfileData = {
        userName: "Chirag_Solanki077",
        Followers: 56,
        Following: 8,
        date: format.asString("dd-MM-yyyy :: hh:mm:ss", new Date())
    }
    res.status(200).json(fbProfileData);
});

//Linkedln Profile Router

app.get("/api/v1/Linkedln", (req, res) => {
    const LinkProfileData = {
        userName: "Chirag Solanki",
        Followers: "500+",
        Following: 300,
        date: format.asString("dd-MM-yyyy :: hh:mm:ss", new Date())
    }
    res.status(200).json(LinkProfileData);
});

//what if Router is not define yet

app.get("/api/v1/:something", (req, res) => {
    console.log(req.params.something);
    res.status(200).send({ param: req.params.something });
});

//Server Running

app.listen(PORT, () => {
    console.log(`Server is Started at ${PORT}`);
})