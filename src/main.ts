import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";

const sampleProduct = new Product(1, "newProduct", 20, 50);
// console.log(sampleProduct.getDetails());

const sampleProduct1 = new DigitalProduct(2, "Chokkor", 10, 20, 50);
// console.log(sampleProduct1.getDownloadInfo());
// console.log(sampleProduct1.getDetails());
// console.log(sampleProduct1.getStockValue());
// console.log(sampleProduct.sell(20));

const samplePhysicalProduct = new PhysicalProduct(
  5,
  "Physical Product",
  50,
  10
);

console.log(samplePhysicalProduct.getStockValue());
console.log(sampleProduct.getStockValue());
console.log(sampleProduct1.getStockValue());
