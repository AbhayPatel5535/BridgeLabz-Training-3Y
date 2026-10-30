const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Add a new product to the list.
function addProduct() {
  const productName = productInput.value.trim();
  if (productName === "") {
    alert("Please enter a product name.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span class="product-name"></span>
    <button type="button" data-action="edit">Edit</button>
    <button type="button" data-action="delete">Delete</button>
  `;
  listItem.querySelector(".product-name").textContent = productName;
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// Event delegation: one listener on the parent UL handles all product buttons.
productList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || !productList.contains(button)) return;

  const listItem = button.closest("li");
  if (button.dataset.action === "delete") {
    listItem.remove();
  } else if (button.dataset.action === "edit") {
    startEditing(listItem);
  }
});

function startEditing(listItem) {
  if (listItem.querySelector(".edit-input")) return;

  const nameSpan = listItem.querySelector(".product-name");
  const oldName = nameSpan.textContent;
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = oldName;
  nameSpan.replaceWith(editInput);
  editInput.focus();
  editInput.select();

  // Save on Enter; cancel is not required, so Escape also saves the current text.
  editInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      saveEdit(listItem);
    }
  });
}

// Save the edited text. This is also called when the user clicks outside the item.
function saveEdit(listItem) {
  const editInput = listItem.querySelector(".edit-input");
  if (!editInput) return;

  const updatedName = editInput.value.trim() || "Untitled product";
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = updatedName;
  editInput.replaceWith(nameSpan);
}

document.addEventListener("click", (event) => {
  // Any product currently being edited is saved if the click is outside that item.
  document.querySelectorAll("#productList li").forEach((listItem) => {
    if (listItem.querySelector(".edit-input") && !listItem.contains(event.target)) {
      saveEdit(listItem);
    }
  });
});
