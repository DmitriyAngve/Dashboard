import express from "express";

const router = express.Router();

router.get("/kpi", async (req, res) => {
  try {
    const kpis = await KPI.find(); // grap kpis data from my database! For this I use "mongoose" - object document mapping (odm), is equvialent for noSQL DB
  } catch {
    res.status(404).json({ message: error.message }); // if we haven't status of an error I can just sya 404
  }
}); // this is the actual route what we set up,  the entry point for specific routes

export default router;
