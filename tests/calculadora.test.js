const calculadora = require("../models/calculadora");

test("2+2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("5+'banana' = 'erro'", () => {
  const resultado = calculadora.somar(5, "banana");
  expect(resultado).toBe("erro");
});
