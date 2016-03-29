describe("Fizzbuzz", function() {
  it("should return 7 if number is 7", function() {
    expect(fizzbuzz(7)).toEqual(7);
  });

  it("should return fizz if number is divisible by 3", function() {
    expect(fizzbuzz(6)).toEqual('fizz');
  });

  it("should return buzz if number is divisible by 5", function() {
    expect(fizzbuzz(5)).toEqual('buzz');
  });

  it("should return fizzbuzz if number is divisible by 3 and 5", function() {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });

})
