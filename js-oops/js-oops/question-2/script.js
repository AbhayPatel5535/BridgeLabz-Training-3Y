// Q2: Online Food Ordering (map + Error Handling)

const menu = [
  { name: "Burger", price: 120 },
  { name: "Pizza", price: 250 },
  { name: "Fries", price: 80 },
  { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
  // Reject an empty order or an item that is not present in the menu.
  if (!Array.isArray(orderItems) || orderItems.length === 0) {
    throw new Error("Your order is empty. Please select at least one item.");
  }

  const prices = orderItems.map((itemName) => {
    const item = menu.find((food) => food.name.toLowerCase() === String(itemName).toLowerCase());

    if (!item) {
      throw new Error(`"${itemName}" is not available on the menu.`);
    }

    return item.price;
  });

  // reduce() adds all prices to get the final bill.
  return prices.reduce((total, price) => total + price, 0);
}

const output = document.getElementById("output");

function showOrder(orderItems) {
  try {
    const total = calculateBill(orderItems);
    const message = `Order: ${orderItems.join(", ")} | Total bill: ₹${total}`;
    console.log(message);
    output.innerHTML += `<p>${message}</p>`;
  } catch (error) {
    console.error(error.message);
    const paragraph = document.createElement("p");
    paragraph.textContent = `Error: ${error.message}`;
    output.appendChild(paragraph);
  }
}

// Valid order and invalid order examples.
showOrder(["Burger", "Fries"]);
showOrder(["Pizza", "Pasta"]);
