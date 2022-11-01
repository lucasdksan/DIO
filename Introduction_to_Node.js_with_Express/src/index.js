const express = require("express");
const useRoute = require("./routes/useRoute");
const bodyParser = require("body-parser");

const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: false }));

useRoute(app);

app.get("/lucas",(req, res)=>{
    return res.send("Lucas da Silva");
});

app.listen(port, () => console.log("API rodando na porta"));