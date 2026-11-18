// Q3: Product Discount System (Constructor Function + Prototype)

// Constructor function: creates Product objects.
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Add one shared method to the Product prototype.
Product.prototype.applyDiscount = function (percent) {
  if (typeof percent !== "number" || percent < 0 || percent > 100) {
    throw new Error("Discount must be a number from 0 to 100.");
  }

  const discountAmount = this.price * (percent / 100);
  return this.price - discountAmount;
};

// Create 3 products and apply different discounts.
const products = [
  { product: new Product("Laptop", 50000), discount: 10 },
  { product: new Product("Headphones", 2000), discount: 15 },
  { product: new Product("Keyboard", 1500), discount: 20 }
];

const output = document.getElementById("output");

products.forEach(({ product, discount }) => {
  const newPrice = product.applyDiscount(discount);
  const message = `${product.name}: Original price ₹${product.price}, Discount ${discount}%, New price ₹${newPrice.toFixed(2)}`;
  console.log(message);

  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  output.appendChild(paragraph);
});

// Abstraction: users call applyDiscount() without needing to repeat
// the internal discount calculation each time.
