const Category = require('../models/categoryModel');
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

describe('Category Schema test anything',() =>{

    // for inserting testing

    it('Add category testing anything', () => {

        const test_category = {
            categoryName : "Vegan"
        };

    return Category.create(test_category)
    .then((categorydata) => {
        
        expect(categorydata.categoryName).toEqual("Vegan")
      

    });

});

it('to test the delete post is working or not', async () => {
    const status = await Category.deleteMany();
    expect(status.ok);
});
 })
