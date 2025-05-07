import { Product } from "./models/product";

const sampleProduct = new Product(1, "newProduct", 20, 50);
console.log(sampleProduct.getDetails());
