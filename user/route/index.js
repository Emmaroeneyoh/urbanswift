const { userretrieveallagencyController, userretrievesingleagencyController, user_filter_agency_controller, useragencynamesearchController } = require("../app/controller/agency");
const { landingpageController } = require("../app/controller/landingpage");
const { userretrieveallrouteController, userretrievesinglerouteController, user_filter_operation_controller } = require("../app/controller/route");
const { userretrievesingletransitController ,
  userretrievealltransitController,
  user_filter_transit_controller,
  usertransitnamesearchController,
} = require("../app/controller/transits");
const { filter_user_transit_model } = require("../app/model/transit");
const { userretrievesingleagencyValidation, userretrievesinglerouteValidation } = require("../core/validation/agency");

const router = require("express").Router();

router.post("/landingpage", landingpageController);

//for transit 
router.post("/retrieve/all/transit", userretrievealltransitController);
router.post(
  "/retrieve/single/transit",
  userretrievesingletransitController,
  userretrievesingletransitController
);
router.post(
  "/filter/transit",
  user_filter_transit_controller
);
router.post(
  "/search/transit",
  usertransitnamesearchController
);

// for agency
router.post("/retrieve/all/agency", userretrieveallagencyController);
router.post(
    "/retrieve/single/agency",
    userretrievesingleagencyValidation,
    userretrievesingleagencyController
);
router.post(
    "/filter/agency",
    user_filter_agency_controller
  );
router.post(
  "/search/agency",
  useragencynamesearchController
);

//for route 
router.post("/retrieve/all/route", userretrieveallrouteController);
router.post(
    "/retrieve/single/route",
    userretrievesinglerouteValidation,
    userretrievesinglerouteController
);

router.post(
    "/filter/operation",
    user_filter_operation_controller
  );

module.exports = router;
