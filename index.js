console.log('bobbyhadz.com');

// ✅ Get all input elements with type = "text"
const elements1 = document.querySelectorAll(
  'input[type="text"]',
);
console.log(elements1); // 👉️ [input#first_name]

// -------------------------------------------------------

// ✅ Get all input elements
const elements2 = document.querySelectorAll('input');
console.log(elements2); // 👉️ [input#first_name, input#age]

// -------------------------------------------------------

// ✅ Get all input elements
const elements3 = document.getElementsByTagName('input');
console.log(elements3); // 👉️ [input#first_name, input#age]
