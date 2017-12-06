/*
(1) You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
(2) 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

Example:

Given [3, 1, 5, 8]

Return 167

    nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
*/

// work backwards - find max output using each balloon as the last one in the sequence


var maxCoins = function(nums) {
    
// store in an object using index of final balloon and max output for that balloon - {index: total}
var coinTotals = {};

// iterate through array

  // each iteration starts with nums[i] as total

  // then nums[i] * one value in nums

// STORE PRODUCTS OF ALL POSSIBLE COMBINATIONS OF THREE VALUES i.e. {'0,1,2': 15}
var allProducts = {};


};