const {
  userretrieveallagencyController,
  userretrievesingleagencyController,
  user_filter_agency_controller,
  useragencynamesearchController,
} = require("../app/controller/agency");
const { user_filter_asset_controller } = require("../app/controller/asset");
const {
  landingpageController,
  savetransitController,
  retrievetransitController,
  savesubrouteController,
  retrievesubrouteController,
  saveagencyController,
  retrieveagencyController,
  userdashboardController,
} = require("../app/controller/landingpage");
const {
  userretrieveallrouteController,
  userretrievesinglerouteController,
  user_filter_operation_controller,
  userretrieveoperationController,
  userretrievesubrouteController,
} = require("../app/controller/route");
const { usersubrouteratesecurityController, usersubrouteratenetworkController, usersubrouteratehourController, userratetransitController, userrateagencyController } = require("../app/controller/subroute.rate");
const {
  userretrievesingletransitController,
  userretrievealltransitController,
  user_filter_transit_controller,
  usertransitnamesearchController,
} = require("../app/controller/transits");
const { filter_user_transit_model } = require("../app/model/transit");
const { user_check_token } = require("../core/authorization");
const { SavedagencyModel } = require("../core/db/saved_agency");
const {
  userretrievesingleagencyValidation,
  userretrievesinglerouteValidation,
} = require("../core/validation/agency");
const { userValidation } = require("../core/validation/auth");
const { userratesecurityValidation, userrateneworkValidation, userratehourValidation, userratetransitValidation, userrateagencyValidation } = require("../core/validation/rate");
const {
  savetransitValidation,
  savesubrouteValidation,
  saveagencyValidation,
} = require("../core/validation/transit");

const router = require("express").Router();

router.post("/landingpage", landingpageController);
router.post("/dashboard", userdashboardController);

//for transit
router.post("/retrieve/all/transit", userretrievealltransitController);
router.post(
  "/retrieve/single/transit",
  userretrievesingletransitController,
  userretrievesingletransitController
);
router.post("/filter/transit", user_filter_transit_controller);
router.post("/search/transit", usertransitnamesearchController);

// for agency
router.post("/retrieve/all/agency", userretrieveallagencyController);
router.post(
  "/retrieve/single/agency",
  userretrievesingleagencyValidation,
  userretrievesingleagencyController
);
router.post("/filter/agency", user_filter_agency_controller);
router.post("/search/agency", useragencynamesearchController);

//for route
router.post("/retrieve/all/route", userretrieveallrouteController);
router.post(
  "/retrieve/single/route",
  userretrievesinglerouteValidation,
  userretrievesinglerouteController
);
router.post(
  "/retrieve/operation",
  userretrievesinglerouteValidation,
  userretrieveoperationController
);
router.post(
  "/retrieve/subroute",
  userretrievesinglerouteValidation,
  userretrievesubrouteController
);

router.post("/filter/operation", user_filter_operation_controller);
//asset
router.post("/filter/asset", user_filter_asset_controller);

//saved data
router.post(
  "/save/transit",
  user_check_token,
  savetransitValidation,
  savetransitController
);
router.post(
  "/retrieve/save/transit",
  user_check_token,
  userValidation,
  retrievetransitController
);

//for subroute
router.post(
  "/save/subroute",
  user_check_token,
  savesubrouteValidation,
  savesubrouteController
);
router.post(
  "/retrieve/save/subroute",
  user_check_token,
  userValidation,
  retrievesubrouteController
);

// for agency

router.post(
  "/save/agency",
  user_check_token,
  saveagencyValidation,
  saveagencyController
);
router.post(
  "/retrieve/save/agency",
  user_check_token,
  userValidation,
  retrieveagencyController
);

//rating
router.post(
  "/rate/road/security",
  user_check_token,
  userratesecurityValidation,
  usersubrouteratesecurityController
);
router.post(
  "/rate/road/network",
  user_check_token,
  userrateneworkValidation,
  usersubrouteratenetworkController
);
router.post(
  "/rate/road/hour",
  user_check_token,
  userratehourValidation,
  usersubrouteratehourController
);
router.post(
  "/rate/transit",
  user_check_token,
  userratetransitValidation,
  userratetransitController
);
router.post(
  "/rate/agency",
  user_check_token,
  userrateagencyValidation,
  userrateagencyController
);
module.exports = router;
