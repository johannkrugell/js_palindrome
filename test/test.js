let assert = require("assert");
const internal = require("stream");
let Phrase = require("../index.js");

describe("Pharse", function () {

  describe("#palindrome", function () {

    it("should return false for a non-palidrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a non-palidrome", function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    }); 

    it("should return true for a mixed-case palindrome", function(){
      let mixedCase = new Phrase("Racecar");
      assert(mixedCase.palindrome());
    });
  
  describe("#letters", function(){
    it("should return true for a palindrome with punctuation", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(),"MadamImAdam");
    });

    it("should return the empty string on no match", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });


  });

  
  });
});