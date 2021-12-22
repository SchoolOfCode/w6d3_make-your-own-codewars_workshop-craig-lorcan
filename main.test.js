//👉 Write your tests below here:
import {bmiChecker} from "./main.js"


describe("Testing to see if the bmi function returns Underweight", function(){
    test("Basic bmi test to return Underweight", () => {
        const expected = "Your weight is underweight"
        const actual = bmiChecker(50, 1.8)
    
        expect(actual).toEqual(expected)
    })
    test("Basic bmi test to return Underweight", () => {
        const expected = "Your weight is underweight"
        const actual = bmiChecker(45, 1.75)
    
        expect(actual).toEqual(expected)
    })
})


describe("Testing to see if the bmi function returns normal", function(){
    test("Basic bmi test to return Normal", () => {
        const expected = "Your weight is normal"
        const actual = bmiChecker(80, 1.80)
    
        expect(actual).toEqual(expected)
    })
})

describe("Testing to see if the bmi function returns Overweight", function(){
    test("Basic bmi test to return Overweight", () => {
        const expected = "Your weight is overweight"
        const actual = bmiChecker(90, 1.8)
    
        expect(actual).toEqual(expected)
    })
})


describe("Testing to see if the bmi function returns Obese", function(){
    test("Basic bmi test to return Obese", () => {
        const expected = "Your weight is obese"
        const actual = bmiChecker(100, 1.8)
    
        expect(actual).toEqual(expected)
    })
    test("Basic bmi test to return Obese", () => {
        const expected = "Your weight is obese"
        const actual = bmiChecker(120, 1.9)
    
        expect(actual).toEqual(expected)
    })
})


