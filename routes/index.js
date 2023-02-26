var express = require("express");
var router = express.Router();
const RiskCatalogSchema = require("../model/RiskCatalogSchema");
const RiskSchema = require("../model/RiskSchema");

router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).send({
    result: "data",
  });
});

router.post("/riskCatalog", async function (req, res, next) {
  let riskdata = await new RiskCatalogSchema({
    RiskId: req.body.RiskId,
    RiskGrouping: req.body.RiskGrouping,
    Risk: req.body.Risk,

    CSFFunction: req.body.CSFFunction,

    Description: req.body.Description,
  });
  await riskdata.save();
  res.status(200).send({
    result: riskdata,
  });
});

router.post("/risk", async function (req, res, next) {
  const data = await new RiskSchema({
    ID: req.body.ID,
    title: req.body.title,
    description: req.body.description,
    riskCategory: req.body.riskCategory,// yahan per riskCatalog is id dalni hai 
  });
  await data.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("datasaved");
    }
  });

  res.status(200).send({
    result: data,
  });
});
  router.post("/home", async function (req, res, next) {
    try {
      // const risk = await Risk.findById(req.params.riskId).populate();
      const risk = await RiskSchema.findById("63fb8ba991ad6bf35cd51fc9").populate(
        "riskCategory"
      );
      
      res.status(200).json(risk);
    } catch (err) {
      console.log("Something is Wrong, " + err);
      res.status(400).send("No risk found with the given criteria!");
    }
  })
  


module.exports = router;
