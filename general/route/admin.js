const { admin_check_token } = require("../../admin/core/authorisation");
const { adminValidation } = require("../../admin/core/validation/auth");
const {
  createAgencyController,
  updateAgencyController,
  retrievesingleAgencyController,
  retrieveallAgencyController,
} = require("../app/controller/agency");
const { createassetController, updateassetController, deleteassetController, retrievesingleassetController, retrieveallassetController } = require("../app/controller/asset");
const { updaterouteController, deleterouteController, createrouteController, retrievesinglerouteController, retrieveallrouteController } = require("../app/controller/route");
const { createoperationController, updateoperationController, deleteoperationController, retrievesingleoperationController, retrievealloperationController } = require("../app/controller/route_operation");
const { createsubrouteController, updatesubrouteController, deletesubrouteController, retrievesinglesubrouteController, retrieveallsubrouteController } = require("../app/controller/sub_route");
const { createTransitController, updatetransitController, retrievesingletransitController, retrievealltransitController, transitaddagencyController, transitremoveagencyController, transitaddimageController, transitremoveimageController } = require("../app/controller/transit");
const {
  createagencyValidation,
  updateagencyValidation,
  retrieveDeleteagencyValidation,
} = require("../core/validation/agency");
const { createassetValidation, updateassetValidation, retrievedeleteassetValidation } = require("../core/validation/asset");
const { createoperationValidation, updateoperationValidation, retrievedeleteoperationValidation } = require("../core/validation/operation");
const { createrouteValidation, updaterouteValidation, retrievedeleterouteValidation } = require("../core/validation/route");
const { createsubrouteValidation, updatesubrouteValidation, retrievedeletesubrouteValidation } = require("../core/validation/subroute");
const { createtransitValidation, updatetransitValidation, retrievedeletetransitValidation, addremovetransitagencyValidation, addtransitimageValidation, removetransitimageValidation } = require("../core/validation/transit");

const router = require("express").Router();


//agency 
router.post(
  "/create/agency",
  createagencyValidation,
  admin_check_token,
  createAgencyController
);
router.post(
  "/update/agency",
  updateagencyValidation,
  admin_check_token,
  updateAgencyController
);
router.post(
  "/retrieve/single/agency",
  retrieveDeleteagencyValidation,
  admin_check_token,
  retrievesingleAgencyController
);
router.post(
  "/retrieve/all/agency",
  adminValidation,
  admin_check_token,
  retrieveallAgencyController
);
//agency 
router.post(
  "/create/transit",
  createtransitValidation,
  admin_check_token,
  createTransitController
);
router.post(
  "/update/transit",
  updatetransitValidation,
  admin_check_token,
  updatetransitController
);
router.post(
  "/retrieve/single/transit",
  retrievedeletetransitValidation,
  admin_check_token,
  retrievesingletransitController
);
router.post(
  "/retrieve/all/transit",
  adminValidation,
  admin_check_token,
  retrievealltransitController
);
router.post(
  "/add/transit/agency",
  addremovetransitagencyValidation,
  admin_check_token,
  transitaddagencyController
);
router.post(
  "/remove/transit/agency",
  addremovetransitagencyValidation,
  admin_check_token,
  transitremoveagencyController
);
router.post(
  "/add/transit/image",
  addtransitimageValidation,
  admin_check_token,
  transitaddimageController
);
router.post(
  "/remove/transit/image",
  removetransitimageValidation,
  admin_check_token,
  transitremoveimageController
);


//route 
router.post(
  "/create/route",
  createrouteValidation,
  admin_check_token,
  createrouteController
);
router.post(
  "/update/route",
  updaterouteValidation,
  admin_check_token,
  updaterouteController
);
router.post(
  "/delete/route",
  retrievedeleterouteValidation,
  admin_check_token,
  deleterouteController
);
router.post(
  "/retrieve/single/route",
  retrievedeleterouteValidation,
  admin_check_token,
  retrievesinglerouteController
);
router.post(
  "/retrieve/all/route",
  adminValidation,
  admin_check_token,
  retrieveallrouteController
);

// subroute 
router.post(
  "/create/subroute",
  createsubrouteValidation,
  admin_check_token,
  createsubrouteController
);
router.post(
  "/update/subroute",
  updatesubrouteValidation,
  admin_check_token,
  updatesubrouteController
);
router.post(
  "/delete/subroute",
  retrievedeletesubrouteValidation,
  admin_check_token,
  deletesubrouteController
);
router.post(
  "/retrieve/single/subroute",
  retrievedeletesubrouteValidation,
  admin_check_token,
  retrievesinglesubrouteController
);
router.post(
  "/retrieve/all/subroute",
  adminValidation,
  admin_check_token,
  retrieveallsubrouteController
);


// asset 
router.post(
  "/create/asset",
  createassetValidation,
  admin_check_token,
  createassetController
);
router.post(
  "/update/asset",
  updateassetValidation,
  admin_check_token,
  updateassetController
);
router.post(
  "/delete/asset",
  retrievedeleteassetValidation,
  admin_check_token,
 deleteassetController
);
router.post(
  "/retrieve/single/asset",
  retrievedeleteassetValidation,
  admin_check_token,
 retrievesingleassetController
);
router.post(
  "/retrieve/all/asset",
  adminValidation,
  admin_check_token,
 retrieveallassetController
);


//operation
router.post(
  "/create/operation",
  createoperationValidation,
  admin_check_token,
  createoperationController
);
router.post(
  "/update/operation",
  updateoperationValidation,
  admin_check_token,
  updateoperationController
);
router.post(
  "/delete/operation",
  retrievedeleteoperationValidation,
  admin_check_token,
  deleteoperationController
);
router.post(
  "/retrieve/single/operation",
  retrievedeleteoperationValidation,
  admin_check_token,
  retrievesingleoperationController
);
router.post(
  "/retrieve/all/operation",
  adminValidation,
  admin_check_token,
  retrievealloperationController
);

module.exports = router;
