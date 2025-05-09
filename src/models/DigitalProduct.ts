import { Product } from "./Product";

// Inheritance

export class DigitalProduct extends Product {
  // downloadSizeMb: number;
  constructor(
     id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeMb: number
  ) {
    super(id, name, price, quantity);
    // this.downloadSizeMb = downloadSizeMb;
  }
  getDownloadInfo() {
    return `${this.name} is downloading. size: ${this.downloadSizeMb}`;
  }
}
