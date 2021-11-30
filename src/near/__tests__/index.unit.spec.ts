import { u128 } from "near-sdk-as";

describe("u128", () => {
  it("division", () => {
    const first = new u128(1000000000000000000000);
    const second = new u128(10 ** 24);
    expect(u128.div(first, second).toString(16)).toStrictEqual("0.001");
  });
});
