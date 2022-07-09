const Meal = require('../models/mealsModel');
const mongoose = require('mongoose');

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

describe('Meals Schema test anything',() =>{
    // add meal
    it('Add meal test anything', () =>{
        const test_meal = {
            'mealImage':"c1.png",
            'mealName':"Tofu Salad",
            "mealPrice" : "Rs.1200",
            "mealDescription": "This is a salad. This salad is made from tofu",
            "time": "45min",
            "mealCategory":"Vegetarian",
            "calory":"650kcal",
            "difficulty": "Medium"
        };
        return Meal.create(test_meal)
        .then((mealData) => {
                expect(mealData.mealImage).toEqual("c1.png")
                expect(mealData.mealName).toEqual("Tofu Salad"),
                expect(mealData.mealPrice).toEqual("Rs.1200"),
                expect(mealData.mealDescription).toEqual("This is a salad. This salad is made from tofu")
                expect(mealData.time).toEqual("45min"),
                expect(mealData.mealCategory).toEqual("Vegetarian"),
                expect(mealData.calory).toEqual("650kcal"),
                expect(mealData.difficulty).toEqual("Medium")
            });
    
    });

    //update meal
    it('to test the update', async() =>{
        return Meal.findOneAndUpdate({_id :Object("62c9aa9160b2e7ae5d82618d")},
        {$set : {mealCategory:"Non-Vegetarian"}})
        .then(()=>{
            return(Meal.findOne({_id : Object('62c9aa9160b2e7ae5d82618d')}))
            .then((un)=>{
                expect(un.mealCategory).toEqual('Non-Vegetarian')
            })
        })
    });
    
    //delete meal
    it('to test the delete meal is working or not', async () => {
        const status = await Meal.deleteMany();
        expect(status.ok);
    });
})