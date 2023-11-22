var isDate = function (input) {
  let newDate = new Date(input);
if (newDate == "Invalid Date") {
  return false;
} else {
  return true;
}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
