const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    hash: {type: String, required: true},
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    created_at: { type: Date, default: Date.now}
})

userSchema.statics.signup = function({email, password, firstname, lastname}){
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function (err, hash) {
            if(err) return reject(err);
            const user = new User({email, hash, firstname, lastname}); 
            user.save(err => {
                if(err) return reject(err);
                resolve(user);
            });    
        });
    });    
};

userSchema.statics.signin = function({email, password}){
    return new Promise((resolve, reject) => {
       this.findOne({email}, (err, userDoc) => {
           if(err) return reject(err);
           if(userDoc === null) return reject("User not found!");
           bcrypt.compare(password, userDoc.hash, function(err, result) {
               if(err) return reject(err);
               if(!result) return reject("Invalid password");
               resolve(result);
           });
       }); 
    });    
};

const User = mongoose.model("User", userSchema);

module.exports = User;