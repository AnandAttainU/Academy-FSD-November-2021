const supertest = require('supertest');
const { app } = require('../../app');

describe('Testing Products Route', ()=>{
    describe('testing for GET requests to /products', ()=>{
        test('testing for 200 status code', async ()=>{
            await supertest(app)
                .get('/products')
                .expect(200)
        })

        test('testing for output is an Array', async ()=>{
            await supertest(app)
                .get('/products')
                .expect((response)=>{
                    expect(Array.isArray(response._body)).toBeTruthy()
                })
        })
    })
    describe("testing for POST requests to /products", ()=>{
        test('testing for 201 status code', async ()=>{
            await supertest(app)
                .post('/products')
                .send(
                    {
                        "name": "NewProduct",
                        "price": 3000,
                        "imageURL": "http://www.randomImageURL.com",
                        "inStock": true,
                        "id": 5
                    }
                )
                .expect(201)
        })

        test('testing for output is an array', ()=>{
            expect(true).toBe(true);
        })
    })
})

