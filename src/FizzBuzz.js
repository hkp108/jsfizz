function fizzBuzz(number) {
  var mystring = "";
  if (number % 3 === 0) {
    mystring += ('fizz');
  };

  if (number % 5 === 0) {
    mystring += ('buzz');
  };

  if (mystring.length === 0) {
    return number;
  } else {
    return mystring;
  };
};
