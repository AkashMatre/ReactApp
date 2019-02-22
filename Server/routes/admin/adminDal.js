var crtroleSchema = require("./../../models/adminSchema");
var userRegModel = require("./../../models/usrSchema");
var idSchema = require("./../../models/staticids");
var loginModel = require("./../../models/loginSchema");

module.exports = {
    createRole(request, response)
    {
        console.log(request.body.Role+" yy");
        var usrrolecrt = {
            Role:request.body.Role,
            Name:request.body.Name,
            MobNum:request.body.MobNum,
            Email:request.body.Email
        }
        crtroleSchema.create(usrrolecrt,function(error,res){
            if(error)
            {
                response.send({message:"Sorry!....User role creation Details Not Updated...!",statusCode:404,data:res});  
            }
            else
            {
                response.send({message:"User role creation details enter successfully...",statusCode:200,data:res});
            }
        });    

    },

    getUsrDta(request, response)
    {
        userRegModel.find({$or:[{isAuthorized:"E"},{isAuthorized:"R"}]}).exec(function(err,res){        
            if(err)
            {
                response.statusCode = 500;
                response.send({status:response.statusCode,err});    
            }
            else
            {
                response.send({status:200,data:res});
            }
        })
    },

    crjctAprvUsr(request, response){
        var usrid = {'Usr_Id':crntusridincr};
        var cndtn = {'MobileNo': request.body.userObj.MobileNo};
        var Adta = {'isAuthorized':"A",'Usr_Id': crntusrid};
        var Rdta = {'isAuthorized':"R"};

        if(request.body.str === "aprv")
        {
            if(request.body.userObj.Usr_Id == 0)
          {
            console.log("in aprv");
            var crntusrid = 0;
            var crntusridincr = 0;

            idSchema.findOne().exec(function(err,res){
                if(err)
                {
                    response.statusCode = 500;
                    response.send({status:response.statusCode,err});    
                }
                else
                {
                    crntusrid = res.Usr_Id;
                    crntusridincr = crntusrid + 1;
                    idSchema.update({},{'Usr_Id':crntusridincr},function(err,res){if(err){console.log("in error update");}else{console.log("update successful....!");}});
                    userRegModel.findOneAndUpdate(cndtn,{'isAuthorized':"A",'Usr_Id': crntusrid},{upsert:true},function(err, doc){
                        if(err)
                        {
                            console.log(" error occured during Access User Aproval");
                        }
                        else{
                            console.log("Approve Access User Successfuly...!");
                        }
                    });
                    loginModel.findOneAndRemove({'Usr_Id':crntusrid}, function(err){if(err){console.log("error occured during deleting logs..!")}});
                    var UsrRegDtls = {
                        UserName: request.body.userObj.Email,
                        PassWord: request.body.userObj.MobileNo,
                        UserType: "U",
                        FullName: {
                            FirstName:  request.body.userObj.FullName.FirstName,
                            MiddleName: request.body.userObj.FullName.MiddleName,
                            LastName: request.body.userObj.FullName.LastName
                        },
                        Email: request.body.userObj.Email,
                        MobileNo:  request.body.userObj.MobileNo,
                        Usr_Id:crntusrid,
                        isAuthorized:"A"   
                    }
                    loginModel.create(UsrRegDtls,function(error,res){
                        if(error)
                        {
                            console.log(error);
                        }
                        else
                        {
                        console.log("success... in trasfrering data in users_login table");
                        }
                    });    
                    response.send({status:200,data:res});
                    
                }
            });    
          }

        }  
        else if(request.body.str === "rjct")
        {
            console.log("in reject");
            userRegModel.findOneAndUpdate(cndtn,Rdta,{upsert:true},function(err, doc){
                if(err)
                {
                    console.log(" error occured during Access User Rejection");
                }
                else{

                    loginModel.update({'Usr_Id':doc.Usr_Id},Rdta,function(err,res){
                        if(err)
                        {
                            console.log("in error update");
                        }
                        else{
                            console.log("update successful....!");
                        }  
                    });
                    console.log("Reject Access User Successfuly...!");
                }
            }); 
        }  

        
    },
        
        
        
}