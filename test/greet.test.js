import assert from 'assert';
import greet from '../greet.js';
 
describe('The greet function', function(){
 it('It should return "Hello, lindiwe" when lindiwe is greeted', function(){
        assert.equal('Hello, lindiwe', greet('lindiwe'));
    });

    it('It should return "Hello, lindie" when lindie is greeted', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, lindie', greet('lindie'));
    });

})