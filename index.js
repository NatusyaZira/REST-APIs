import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(posrt, () => {
    console.log(`Server is running on port ${port}.`);
})