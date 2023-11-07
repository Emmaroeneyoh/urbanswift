const { handleError } = require("../../core/utils");
const { landingpageModel } = require("../model/landingpage");


const landingpageController = async (req, res, next) => {
    try {
        const data = 'time'
      let trainee = await landingpageModel(data, res);
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "login process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
};
  
module.exports = {
    landingpageController
}