const mongoose = require("mongoose");

const Admin = mongoose.model("Admin",{
    FirstName : {
        type : String
    },

    LastName : {
        type : String
    },


    Username : {
        type : String
    },

    Email : {
        type :String
    },

    Password: {
        type : String
    },

    Admin : {
        type: Boolean,
        default : false,
    }
}
)

module.exports = Admin;



