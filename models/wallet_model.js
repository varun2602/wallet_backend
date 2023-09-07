const mongoose = require("mongoose")
const { Schema } = mongoose;

const WalletSchema = new Schema({
  address:String
});
module.exports = mongoose.model("wallet_address", WalletSchema)