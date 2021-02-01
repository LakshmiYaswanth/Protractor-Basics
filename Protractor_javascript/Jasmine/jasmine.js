let add = (a,b)=>(a+b);

describe('add all numbers', function() {
    it('add 2 numbers', ()=>{
        console.log(add(5,76));
        expect(add(6,6)).toBe(12);
    });
    it('add 2 numbers', ()=>{
        console.log(add(5,06));
        expect(add(6,6)).toBe(12);
    });
    it('add 2 numbers', ()=>{
        console.log(add(5,706));
        expect(add(6,6)).toBe(12);
    });
  });