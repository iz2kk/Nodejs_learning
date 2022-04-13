import express from "express";
import viewEngineConfig from "./config/viewEngine";

const app = express();
const port = 80;
// engine config

viewEngineConfig(app);
//
app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})