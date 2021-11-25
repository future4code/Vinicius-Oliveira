import { identificaPropsVazias } from "./identificaPropsVazias";

test("identificaPropsVazias", () => {
  expect(
    identificaPropsVazias({
      prop1: ""
    })
  ).toBe(true);

  expect(
    identificaPropsVazias({
      prop1: "lalala"
    })
  ).toBe(false);

  expect(
    identificaPropsVazias({
      prop1: "lalala",
      prop2: undefined
    })
  ).toBe(true);

  expect(
    identificaPropsVazias({
      prop1: "lalala",
      prop2: []
    })
  ).toBe(true);

  expect(
    identificaPropsVazias({
      prop1: "lalala",
      prop2: {}
    })
  ).toBe(true);

  expect(
    identificaPropsVazias({
      prop1: "lalala",
      prop2: {
        propInterna: ""
      }
    })
  ).toBe(true);

  expect(
    identificaPropsVazias({
      prop1: "lalala",
      prop2: {
        propInterna: {
          prop: {
            prop: {
              propVazia: null
            }
          }
        }
      }
    })
  ).toBe(true);
});
