import { DigitalProduct } from "./models/DigitalProduct";
import { Product } from "./models/Product";

// const sampleProduct = new Product(1, "newProduct", 20, 50);
// console.log(sampleProduct.getDetails());

const sampleProduct1 = new DigitalProduct(2, "Chokkor", 50, 20, 2000);
console.log(sampleProduct1.getDownloadInfo());
console.log(sampleProduct1.getStockValue());
