const { admincreatenetworkratingController } = require("../app/controller/adminrate");
const { admin_check_token } = require("../core/authorisation");
const { admincreatenetworkrateValidation } = require("../core/validation/rate");

const router = require("express").Router();

router.post(
  "/rate/network",
  admincreatenetworkrateValidation,
  admin_check_token,
  admincreatenetworkratingController
);

module.exports = router;
