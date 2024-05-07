# Validation Library

Validation Library is a simple JavaScript library for validating various types of data, including email addresses, URLs, and credit card numbers.

## Installation

You can install the Validation Library via npm:

```
npm install validation-library
```

## Usage

```javascript
const validationLibrary = require('validation-library');

// Validate email address
const isValidEmail = validationLibrary.validateEmail('example@email.com');
console.log(isValidEmail); // Output: true

// Validate URL
const isValidURL = validationLibrary.validateURL('https://www.example.com');
console.log(isValidURL); // Output: true

// Validate credit card number
const isValidCardNumber = validationLibrary.validateCreditCard('1234567890123456');
console.log(isValidCardNumber); // Output: false
```

## API

### `validateEmail(email: string): boolean`

Validates an email address.

### `validateURL(url: string): boolean`

Validates a URL.

### `validateCreditCard(cardNumber: string): boolean`

Validates a credit card number using the Luhn algorithm.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
