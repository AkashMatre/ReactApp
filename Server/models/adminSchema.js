var mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    Role: String,
    Name: String,
    MobNum: String,
    Email: String 
  });

  const crtroleSchema =  mongoose.model("Usr_Role", roleSchema, "Usr_Role");
  module.exports = crtroleSchema;





  
  