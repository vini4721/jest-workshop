const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount", () => {
  test("no coupon returns subtotal unchanged", () => {
    expect(calculateFinalAmount(200)).toBe(200);
  });

  test("SAVE10 coupon applies 10% discount up to 100", () => {
    
    expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
  });

  test("FLAT50 boundary: subtotal equal to 50 results in 0", () => {
    expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
  });

  test("invalid subtotal (NaN) throws error", () => {
    expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
  });

  test("coupon lookup is case-insensitive", () => {
    expect(calculateFinalAmount(200, "save10")).toBe(180);
  });
});  
