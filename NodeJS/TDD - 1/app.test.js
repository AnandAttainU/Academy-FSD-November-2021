const { isEven, add } = require("./app.js");

describe('testing for add', ()=>{
    test('testing add for 1,2', ()=>{
        expect(add(1,2)).not.toBe(4)
    })
})

describe('testing for isEven', ()=>{
    test('testing isEven for value 2', ()=>{
        expect(isEven(2)).toBeTruthy()
    })
    
    test('testing isEven for value 3', ()=>{
        expect(isEven(3)).toBe(false)
    })
    
    test('testing for isEven with string', ()=>{
        expect(()=>isEven('abc')).toThrow("Invalid input")
    })
    
    test('testing for isEven with array', ()=>{
        expect(()=>isEven([1,2,3])).toThrow("Invalid input")
    })
    
    test('testing for isEven with decimal number', ()=>{
        expect(()=>isEven(-4.122)).toThrow("Decimal number not accepted")
    })
})
