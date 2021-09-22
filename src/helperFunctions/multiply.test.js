import {multiply} from './multiply';
import {makeLowerCase} from './makeLower'; 

test('multiply', () => {
    expect(multiply(2,2)).toBeDefined();
    expect(multiply(2,2)).toEqual(4);
});


test('multiply', () => {
    expect(makeLowerCase('YeS')).toBeDefined();
    expect(makeLowerCase('HELLo')).toEqual('hello');
});



