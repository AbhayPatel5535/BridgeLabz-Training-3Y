// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) {
      console.error("Discount must be between 0 and 100.");
      return;
    }
    this.price = this.price - (this.price * discountPercent / 100);
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Keyboard", 850, "Electronics"),
  new Product(2, "Headphones", 1500, "Electronics"),
  new Product(3, "Backpack", 1200, "Accessories"),
  new Product(4, "Notebook", 120, "Stationery")
];

products[1].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.getDetails()));

const expensiveProducts = products.filter(product => product.price > 1000);
console.log("Products priced above ₹1000:");
expensiveProducts.forEach(product => console.log(product.getDetails()));
