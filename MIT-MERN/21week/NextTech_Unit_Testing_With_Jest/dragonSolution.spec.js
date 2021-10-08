var Dragon = require('../dragon');

describe("does the dragon exist?", () => {
  //checks that the dragon class is a function
  test("dragon should be a function", () => {
    //setup a new dragon object
    const smaug = new Dragon;
    //check to see that the dragon object exists, using an assertion
    expect (smaug).toBeDefined();
  })
})

describe("attributes", () => {

  test("it should be red by default", () => {
    //write a test to check if the default color is red

    //set up the dragon object
    const smaug = new Dragon;
    //isolate the color attribute in a variable 
    const color = smaug.color;
    /*write what you expect the name variable to be 
    in the form of an assertion*/ 
    expect(color).toEqual("Red")
  });

  test("it can change color to golden", () => {
    //write a test to check if you can change the dragon's color
    const villentretenmerth = new Dragon("Villentretenmerth", "Golden");
    const color2 = villentretenmerth.color;

    expect(color2).toEqual("Golden")
  });
});

describe("sayings", () => {

  //write a test to check the return value of this function is
  //what you'd expect 
  test("it should get angry when you wake it up", () => {

    //set up a dragon
    const smaug = new Dragon("Smaug");
    //invoke the function and check to see if the return value is what you expect
    expect(smaug.wakeUp()).toBe("WHO DARES DISTURB MY SLUMBER?")
  })

  test("it should be happy when you leave", () => {
    const smaug = new Dragon("Smaug");
    const threaten = smaug.threaten();

    expect(smaug.threaten()).toBe("Go now, and tell the others to leave me in peace! Else you shall regret the day you first drew breath!")
  })
})