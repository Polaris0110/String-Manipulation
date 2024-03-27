const form = document.getElementById("string-form");
const inputString = document.getElementById("input-string");
const reversedString = document.getElementById("reversed-string");
const uppercaseString = document.getElementById("uppercase-string");
const lowercaseString = document.getElementById("lowercase-string");
const sortedString = document.getElementById("sorted-string");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const inputValue = inputString.value;

  // Reverse string
  const reversed = inputValue.split("").reverse().join("");

  // Uppercase string
  const uppercased = inputValue.toUpperCase();

  // Lowercase string
  const lowercased = inputValue.toLowerCase();

  // Sort characters (assumes single-word input)
  const characters = inputValue.split("");
  characters.sort();
  const sorted = characters.join("");

  // Update results
  reversedString.value = reversed;
  uppercaseString.value = uppercased;
  lowercaseString.value = lowercased;
  sortedString.value = sorted;
});
