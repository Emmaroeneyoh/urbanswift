const { AssetModel } = require("../../../general/core/db/asset");



const filter_user_asset_model = async (datas, res) => {
    try {
        const { query } = datas;
        if (query.$and.length == 0) {
            const assetdata = await AssetModel.find();
      return assetdata ;
        }
      const assetdata = await AssetModel.find(query);
      return assetdata ;
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  

module.exports = {
    filter_user_asset_model
  }