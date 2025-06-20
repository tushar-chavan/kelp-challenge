import express, { json } from "express";
import 'dotenv/config';
import csvToJson from "../src/csvParser.js";
import fs from "fs";
// const PORT = 3000;
const app = express();


app.use(json());

app.post("/convertCsvToJson", async (req, res) => {
    try {
        const csvFiledata = fs.readFileSync(process.env.CSV_FILE_PATH, "utf-8");
        const users = csvToJson(csvFiledata);
        
        await insertUsers(users);
        await printAgeDistribution();
        res.send("Data uploaded and distribution printed to console.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error occurred.");
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})