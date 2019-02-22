var crtroleSchema = require("../../models/adminSchema");
var userRegModel = require("./../../models/usrSchema");


module.exports = {
    getUsrDta(request, response)
    {
        userRegModel.find({Usr_Id:request.body.usrid}).exec(function(err,res){        
            if(err)
            {
                console.log("in error");
                response.statusCode = 500;
                response.send({status:response.statusCode,err});    
            }
            else
            {
                console.log(res);
                
                //response.send({status:200})
               // res.send({status:200,data:res});
                response.send({status:200,data:res});
            }
        })
    },      
}