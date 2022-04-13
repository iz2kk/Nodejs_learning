import express from "express";
import viewEngineConfig from "./config/viewEngine";
import dotenv from 'dotenv'
dotenv.config();

// server config

const app = express();
const port = process.env.PORT;
// engine config

viewEngineConfig(app);
//
app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`First learning app running at port: ${port}`)
})