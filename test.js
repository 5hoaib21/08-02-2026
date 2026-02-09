function calculateMoney(ticketSale) {
  // Invalid number message.

  if (ticketSale < 0) {
    return "Invalid Number";
  }

  // The income from the sale of tickets.

  let incomeFromTicketSale = ticketSale * 120;

  // Total expense

  const SecurityGuardCost = 500;

  const lunchCostPerStaff = 50;

  const totalLunchCost = 8 * lunchCostPerStaff;

  // Calculate the amount of money that remains after deducting the expenses.

  let remainingProfit =
    incomeFromTicketSale - (SecurityGuardCost + totalLunchCost);

  return remainingProfit;
}

function checkName(name) {
  // Verify whether the name is a string or not.

  if (typeof name !== "string") {
    return "invalid";
  }

  // Define an array of good letter.

  const goodLetter = ["A", "y", "i", "e", "o", "u", "w"];

  // Get the last letter of the name (converted to lowercase)

  const lastLetterWithLowerCase = name[name.length - 1].toLowerCase();

  // Last letter based condition.

  if (goodLetter.includes(lastLetterWithLowerCase)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  // Checking input is an array or not.

  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  // Initialize an empty array to store valid numbers

  const validNumbers = [];

  // Loop through the given array.

  for (let i = 0; i < array.length; i++) {
    // Checking a valid number

    if (typeof array[i] === "number" && !isNaN(array[i])) {
      validNumbers.push(array[i]);
    }
  }

  return validNumbers;
}

function password(obj) {
  // Checking objects and four digits birth year.

  // Objects

  if (
    typeof obj !== "object" ||
    !obj.hasOwnProperty("name") ||
    !obj.hasOwnProperty("birthYear") ||
    !obj.hasOwnProperty("siteName")
  ) {
    return "invalid";
  }

  // Birth Year

  let birthYearStr = obj.birthYear.toString();

  if (birthYearStr.length !== 4) {
    return "invalid";
  }

  // Capitalize the first letter of siteName

  var siteNameCapitalized =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  // Construct the password string

  var passStr = siteNameCapitalized + "#" + obj.name + "@" + birthYearStr;

  return passStr;
}

function monthlySavings(arr, livingCost) {
  // Checking input is valid or not.

  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  // Apply 20% deduction to amounts exceeding 3000

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      arr[i] -= arr[i] * 0.2;
    }
  }

  // Total earning.

  let totalEarning = 0;

  for (let n = 0; n < arr.length; n++) {
    totalEarning += arr[n];
  }

  // calculate the amount of money that will be saved after deducting taxes and living expenses.

  let savings;

  if (totalEarning >= 3000) {
    savings = totalEarning - livingCost;
  }

  // Check if savings is 0 or more

  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
