// validation-library.js

const validationLibrary = {
    // Validate email address
    validateEmail: function(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
  
    // Validate URL
    validateURL: function(url) {
      const regex = /^(http|https):\/\/[^ "]+$/;
      return regex.test(url);
    },
  
    // Validate credit card number
    validateCreditCard: function(cardNumber) {
      // Luhn algorithm implementation
      const digits = cardNumber.replace(/\D/g, '');
      let sum = 0;
      let even = false;
      for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits.charAt(i), 10);
        if (even) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
        even = !even;
      }
      return sum % 10 === 0;
    }
  };
  
  module.exports = validationLibrary;