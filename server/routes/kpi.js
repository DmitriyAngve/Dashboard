import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpi", async (req, res) => {
  try {
    const kpis = await KPI.find();
    // grap kpis data from my database! For this I use "mongoose" - object document mapping (odm), is equvialent for noSQL DB
    res.status(200).json(kpis);
    // we're sending our kpis object that we've grabbed from my database and we're it to the frontend
  } catch {
    res.status(404).json({ message: error.message });
    // if we haven't status of an error I can just sya 404
  }
});
// this is the actual route what we set up,  the entry point for specific routes

export default router;
