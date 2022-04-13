import express from "express";

const viewEngineConfig = (app)=>{
    app.set("view Engine", "ejs");
    app.set("views", "src/views");
}

export default viewEngineConfig;