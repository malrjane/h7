import Validator from "../Validator.js";

let userName = new Validator("Danya_123-45");

let userNameFalse = new Validator("33Danya_123-45");


test('В имени пользователя допустимы только латинские буквы, тире, подчёркивания и цифры (0-9)', () => {
  expect(userName.validateUsername()).toBe(true);
});

test('Имя пользователя не может начинаться с цифр, подчеркивания, тире. Цифры не могут использоваться более 3 раз подряд', () => {
  expect(userNameFalse.validateUsername()).toBe(false);
});



// имя не содержит подряд более трёх цифр, не начинается и не заканчивается цифрами, символами подчёркивания или тире