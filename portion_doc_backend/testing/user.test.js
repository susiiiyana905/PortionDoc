const User = require('../models/userModel')
const mongoose = require('mongoose');

// use the new name of the database
const url = 'mongodb://localhost:27017/Portion_Doc_Test';

beforeAll(async ()=> {
    mongoose.connect(url, {

        useNewUrlParser: true,

        useUnifiedTopology: true

    })

})

afterAll(async ()=> {

    await mongoose.connection.close()

})

describe('User Schema test anythong', () =>{

    it('Register User testing anything', () =>{
        const test_user = {
            email: "shtsadikshya28@gmail.com",
            password: "User@123",
            firstName:"Sadikshyaa",
            lastName:"Shrestha",
          
        };
        return User.create(test_user)
        .then((userData)=>{
            expect(userData.email).toEqual("shtsadikshya28@gmail.com"),
            expect(userData.password).toEqual("User@123"),
            expect(userData.firstName).toEqual("Sadikshyaa"),
            expect(userData.lastName).toEqual("Shrestha")
          
        });
    });

    // it('Login User testing anything', () =>{
    //     const test_user = {
    //         email: "sadikshyasht123@gmail.com",
    //         password: "Portion@123" 
          
    //     };
    //     return User.create(test_user)
    //     .then((userData)=>{
    //         expect(userData.email).toEqual("sadiksshyasht123@gmail.com"),
    //         expect(userData.password).toEqual("Portion@123")
          
    //     });
    // })
})