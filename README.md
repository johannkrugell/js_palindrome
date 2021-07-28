$ npm install --global jkrugell-palindrome
$ vim test.js
let Phrase = require("jkrugell-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true