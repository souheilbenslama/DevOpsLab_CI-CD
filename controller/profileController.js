const { token } = require("morgan");
var User = require("../models/User");
var exports = module.exports = {};

exports.profile = function(req, res, next) {
    User.findById(req.user._id).exec(function(error,user){
        if(error){
            return next(error);
        }else{
            console.log("hello");
            user.password = null;
            res.send(user);
        }
    });
}

exports.getProfile = function(req, ) {
    
    /* User.findById(req.user._id).exec(function(error,user){
        if(error){
            console.log(error);
            return error;
        }else{
            console.log("hello");
            user.password = null;
            return user;
        }
    }); */

    return expected_user={
        "_id": "629c6f3dce77a720b07f23ed",
        "email": "benslamauseuse@gmail.com",
        "name": "useuse",
        "surname": "user2",
        "password": null,
        "adress": "Tunis",
        "phone": "56421565",
        "gender": "male",
        "role": "Pet Owner",
        "birthday": "1999-05-14T00:00:00.000Z",
        "avatar": "default.jpg",
        "createdAt": "2022-06-05T08:54:21.238Z",
        "updatedAt": "2022-06-05T08:54:21.238Z",
        "__v": 0
    }
}

exports.getUsers = function(req,res,next){
    User.find().exec(function(error,users){
        if(error){
            return next(error);
        }else{
            users.forEach(user => {
                user.password=null;
            });
            res.send(users);
        }
    });
}

exports.updateProfile = function(req,res,next){
    User.findById(req.user._id).exec(function(error,user){
        if(error){
            return next(error);
        }else{
            User.find({phone:req.body.phone,_id: {$ne: user._id}},function(err,users){
                if(err){
                    err.message = "phone not saved";
                    return next(err.message);
                }else if(users.length > 0){
                    return res.status(401).send("phone already exists");
                }else{
                    var defaultAvatar = user.avatar;
                    req.body.avatar = (req.file)? req.file.filename:defaultAvatar;
                    User.findOneAndUpdate({_id:req.user._id},{$set:req.body},{
                        new: true
                      },function(err,newUser){
                        if(err){
                            next(err);
                        }else{
                            user.password = null;
                            res.status(200).send(newUser);
                        }
                    });
                }
            });
        }
    });
}