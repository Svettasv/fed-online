function toUpperCase(userString) {
  return userString.toUpperCase();
}

function reverseStr(userString) {
  let splitString = userString.split("");
  let reverseArr = splitString.reverse();
  let joinArray = reverseArr.join("");

  return joinArray;
}
export { toUpperCase, reverseStr };
