const express = require("express");
const router = express.Router();
const countries = require("../cms/countries");
const { journeyFlow } = require("../middleware/disputesJourney.middleware");
const { toGovukSelectItems } = require("../utils/govUkComponentTransformer");

router.use(journeyFlow);

// 01.010
router.get("/start", function (req, res) {
  res.render("disputes/start", {});
});

// 02.030
router.get("/address", function (req, res) {
  res.render("disputes/address", {
    countryItems: toGovukSelectItems(countries[res.locals.language], {
      selected: req.session.data.country,
    }),
  });
});

// 02.050
router.get("/birth-place", function (req, res) {
  res.render("disputes/birth-place", {
    countryItems: toGovukSelectItems(countries[res.locals.language], {
      selected: req.session.data.country,
    }),
  });
});

// 03.043
router.get("/address-manual", function (req, res) {
  let address = {};
  if (req.session.data.populated == "true") {
    address = {
      country: "GB",
      addressLine1: "1 Star Road",
      addressTown: "Star town",
      postcode: "ST41 0PQ",
    };
  }
  res.render("disputes/address-manual", {
    countryItems: toGovukSelectItems(countries[res.locals.language], {
      selected: address.country,
    }),
    ...address,
  });
});

module.exports = router;
