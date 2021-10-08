var Dragon = require("../dragon");

describe("exists?", () => {
  test("dragon should be a function", () => {
    //checks that the dragon class is a function
    //setup a new dragon object
    //check to see that the dragon object exists, using an assertion
    const dragon1 = new Dragon();
    const object = dragon1;
    expect(object).toBeDefined();
  });
});

describe("attributes", () => {
  test("it should be red by default", () => {
    //write a test to check if the default color is red
    //set up the dragon object
    //isolate the color attribute in a variable
    /*write what you expect the name variable to be 
    in the form of an assertion*/
    const dragon2 = new Dragon('Dragon2');
    const defaultColor = dragon2.color;
    expect(defaultColor).toEqual('Red');
  });

  test("it can change color to golden", () => {
    //write a test to check if you can change the dragon's color
    const dragon3 = new Dragon('Dragon3', 'Golden');
    const color = dragon3.color;
    expect(color).toEqual('Golden');
  });
});

describe("sayings", () => {
  test("it should get angry when you wake it up", () => {
    /*write a test to check the return value of this function is
  what you'd expect*/
    //set up a dragon
    /*invoke the function and check to see if the return 
    value is what you expect using assertions*/
    const dragon4 = new Dragon();
    const wakeUp = dragon4.wakeUp;
    expect(wakeUp()).toBe("WHO DARES DISTURB MY SLUMBER?");
  });

  test("it should be happy when you leave", () => {
    /*similar to the above, write a test to check if the return value of this 
    function is what you expect*/
    const dragon5 = new Dragon();
    const wakeUp = dragon5.threaten;
    expect(wakeUp()).toBe("Go now, and tell the others to leave me in peace! Else you shall regret the day you first drew breath!");
  });
});
