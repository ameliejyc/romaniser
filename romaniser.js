// 1. initially we did individual if case tests for 1, 2 and 3. Then we created a while loop to refactor our solution and make it cleaner. then we added in two more if statements for 4 and 5. then for 6 we started integrating the while loop into our solution. this will work all the way up to 8 now.

/*
function romaniser(num) {
  var result = '';
  var remaining = num;
  if (remaining >= 5) {
    result += 'V';
    remaining -= 5;
  }
  if (num === 4) {
    return 'IV';
  }
  while (remaining > 0) {
    result += 'I';
    remaining -= 1;
  }
  return result;
};

// 2. we created an if for 9. we then changed the === to >= for 9, 5 and 4 because it's the same logic.

function romaniser(num) {
  var result = '';
  var remaining = num;
  if (remaining >= 9) {
    return 'IX';
  }
  if (remaining >= 5) {
    result += 'V';
    remaining -= 5;
  }
  if (remaining >= 4) {
    return 'IV';
  }
  while (remaining > 0) {
    result += 'I';
    remaining -= 1;
  }
  return result;
};

// 3. we made an array of objects to map our arabic to roman numerals using a foreach function. the object has to be in descending order for it to work!

var values = [{
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
]

function romaniser(num) {
  var result = '';
  var remaining = num;

  values.forEach(function(value) {
    if (remaining >= value.arabic) {
      result += value.roman;
      remaining -= value.arabic;
    }
  });

  while (remaining > 0) {
    result += 'I';
    remaining -= 1;
  }
  return result;
};

// 4. we skipped up to 20 and changed the if statement on the object to a while statement. we also added 1 to the object array.

var values = [{
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 1,
    roman: 'I',
  },
]

function romaniser(num) {
  var result = '';
  var remaining = num;

  values.forEach(function(value) {
    while (remaining >= value.arabic) {
      result += value.roman;
      remaining -= value.arabic;
    }
  });
  return result;
};*/

// 5. now we can skip up again in bigger intervals! We also added an error for huge numbers to prevent our computer crashing when ridiculous numbers are typed in. Finally we did another error for numbers less than 1 as Romans didn't have them.

var values = [{
    arabic: 1000,
    roman: 'M',
  },
  {
    arabic: 900,
    roman: 'CM',
  },
  {
    arabic: 500,
    roman: 'D',
  },
  {
    arabic: 400,
    roman: 'CD',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 50,
    roman: 'L',
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 1,
    roman: 'I',
  },
]

function romaniser(num) {
  var result = '';
  var remaining = num;
  if (num >= 5000) {
    return "Sorry, the Romans couldn't count that high";
  }
  if (num <= 0) {
    return "Sorry, the Romans couldn't count that low";
  }

  values.forEach(function(value) {
    while (remaining >= value.arabic) {
      result += value.roman;
      remaining -= value.arabic;
    }
  });
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = romaniser;
} // this says to export this function
