// Reverse a string



//Add reverse string to the string prototype
String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}


// Palindrome function

// function palindrome(string) { 
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }

// email function that returns the array of username and domain USERNAME@EXAMPLE.COM
// function emailsParts(string) {
//   let processedEmail = string.toLowerCase();
//   return [Array.from(processedEmail.split("@")[0], Array.from(processedEmail.split("@")[1]);
// }

//create new object
function Phrase(content){
  //this.content = phrase object
  this.content = content;

// Returns lowercase content processed for palindrome testing
this.processedContent = function processedContent() {
  return this.content.toLowerCase();
}
  // palindrome function returns true if it is a fucntion
  this.palindrome =  function palindrome() { 
    return this.processedContent() === reverse(this.processedContent());
  }
}

// Defines a translated phrase
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this. translation = translation;

//   // Returns lowercase content processed for palindrome testing
//   this.processedContent = function processedContent() {
//     return this.translation.toLowerCase();
//   }
// }

// TranslatedPhrase.prototype = new Phrase();



// //Exercise 7.1.1
// function Phrase(content) {
//   this.content = content;

//   this.louder = function louder() {
//     return this.content.toUpperCase();
//   }
// }

// Exercise 7.2.1

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}
TranslatedPhrase.prototype = new Phrase();

// Exercise 7.3.1
String.prototype.blank = function blank(){
     return this.match(/^\s+$/g);
}

// Exercise 7.3.2
String.prototype.last = function last(){
  return this.slice(this.length -1);
}
