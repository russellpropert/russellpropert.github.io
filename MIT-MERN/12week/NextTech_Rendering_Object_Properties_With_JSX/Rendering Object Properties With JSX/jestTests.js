// this is not in use, this type of test would not work

import { finalState } from "./reactIntro.jsx";

describe("testing finalState func", () => {
  test("testing finalState to have expected value", () => {
    expect(finalState).toBe({
      initialized: true,
      productName: "Rice Krispies",
      productDescription: "a cereal made of popped rice",
      productPrice: "$3.00",
    });
  });
});
