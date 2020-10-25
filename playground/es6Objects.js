const name = "Charu";
const age = 18;

const person = { name, age, location: "Bassi" };
console.log(person);

const product = {
  sale: 20,
  price: 100,
  stock: 2,
};
const { sale: saleValue, price, retail = 120 } = product;
console.log(saleValue);
console.log(price);
console.log(retail);
