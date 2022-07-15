const { isObjectEqual } = require('./index');

test('testing for isObjectEqual', ()=>{
    expect(isObjectEqual()).toEqual({b:2, a:1})
})