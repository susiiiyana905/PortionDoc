const request = require("supertest");
const app = require("../app");
describe('Product testing', () => {
    
    it('user login', async () => {
        const uerDat = {
            email: "susiyanashrestha329@gmail.com",
            password: "susiyana11",
        };
        const res = await request(app)
                    .post('/user/login')
                    .send(uerDat);
        expect(res.statusCode).toEqual(200);
    });
    it('user register', async () => {
        const uerDat = {
            email: "susiyanashrestha448@gmail.com",
            password: "susiyana11",
            firstName: "bkesh",
            lastName: "thapa",
            address: "kapan",
            phone: 980385114       
        };
        const res = await request(app)
                    .post('/signup')
                    .send(uerDat);
        expect(res.statusCode).toEqual(200);
    });

})