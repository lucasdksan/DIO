const assert = require("assert");
const Math = require("../src/math");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("Math class", function(){
    it("Sum two numbers", function(){
        const math = new Math();

        try {
            expect(math.sum(5,5)).to.equal(25);
        } catch(err){
            console.log(err)
        }
    });

    it("Multiply two numbers", function(){
        const math = new Math();

        try {
            assert.equal(math.multiply(5,5), 25);
        } catch(err){
            console.log(err);
        }
    });

    it("Test object user", function(){
        const obj = {
            name: "Lucas Silva"
        }

        expect(obj).to.have.property("name");
    });

    it.only("Calls req with sum and index values", function(){
        const req = {};
        const res = {
            load: function load(){
                console.log("Called");
            }
        }

        sinon.spy(res, "load");

        const math = new Math();

        math.printSum(req, res, 4 ,5);

        expect(res.load.args[0][0]).to.equal("index");
    });
});

describe("Math class timer", function(){
    it("Sum two numbers timer", function(done){
        this.timeout(10000);
        const math = new Math();

        try {
            math.timerSum(5,5, (value)=>{
                assert.equal(value, 10);
                done();
            });
        } catch(err){
            console.log(err)
        }
    });
});