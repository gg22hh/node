const express = require("express");
const router = express.Router();
const Building = require("../models/Building");

router.get("/", async (req, res) => {
   try {
      const buildings = await Building.find();
      res.json(buildings);
   } catch (error) {
      res.json({ message: error });
   }
});

router.post("/", async (req, res) => {
   const building = new Building({
      name: req.body.name,
      place: req.body.place,
      building: req.body.building,
      kvartir: req.body.kvartir,
      info: req.body.info,
   });

   try {
      const savedBuilding = await building.save();
      res.json(savedBuilding);
   } catch (error) {
      res.json({ message: error });
   }
});

module.exports = router;
