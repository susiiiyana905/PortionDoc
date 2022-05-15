const request = require("supertest");
const app = require("../app");
describe('Product testing', () => {
    
    it('user login', async () => {
        const uerDat = {
            email: "bkesh@gmail.com",
            password: "123@gmm",
        };
        const res = await request(app)
                    .post('/login')
                    .send(uerDat);
        expect(res.statusCode).toEqual(200);
    });
    it('user register', async () => {
        const uerDat = {
            email: "bk435esh@gmail.com",
            password: "123@gmm",
            username: "bkesh",
            address: "kapan",
            phone: 980385114       
        };
        const res = await request(app)
                    .post('/signup')
                    .send(uerDat);
        expect(res.statusCode).toEqual(200);
    });

})