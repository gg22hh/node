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

router.get("/:id", async (req, res) => {
   try {
      const singleBuilding = await Building.findById(req.params.id);
      res.json(singleBuilding);
   } catch (error) {
      console.log({ message: error });
   }
});

router.delete("/:id", async (req, res) => {
   try {
      const removeBuilding = await Building.remove({ _id: req.params.id });
      res.json(removeBuilding);
   } catch (error) {
      console.log({ message: error });
   }
});

router.put("/:id", async (req, res) => {
   try {
      const updateBuilding = await Building.updateOne(
         { _id: req.params.id },
         {
            $set: {
               name: req.body.name,
               place: req.body.place,
               building: req.body.building,
               kvartir: req.body.kvartir,
               info: req.body.info,
            },
         }
      );
      res.json(updateBuilding);
   } catch (error) {
      console.log({ message: error });
   }
});

module.exports = router;
