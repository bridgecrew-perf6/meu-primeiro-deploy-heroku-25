const express = require("express");
require("dotenv").config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send(`<h1> Executando na porta ${PORT} </h1>`));

app.listen(PORT, () => console.log(`Online: ${PORT}`));
