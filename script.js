// ================================
// 🎯 Part 1: Variables & Conditionals (Updated)
// ================================

document.getElementById("setNameBtn").addEventListener("click", () => {
  const visitorName = document.getElementById("visitorNameInput").value.trim();
  const isReturningCustomer = false; // Optional: can be set dynamically

  if (visitorName === "") {
    document.getElementById("greetingMessage").textContent = "Please enter your name.";
    return;
  }

  if (isReturningCustomer) {
    document.getElementById("greetingMessage").textContent = `Welcome back, ${visitorName}!`;
  } else {
    document.getElementById("greetingMessage").textContent = `Hello ${visitorName}, check out our latest beauty deals!`;
  }
});

// ================================
// ❤️ Part 2: Functions
// ================================

// Function 1: Calculate total with tax
function calculateTotal(price, taxRate) {
  return (price + price * taxRate).toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const price = parseFloat(document.getElementById("productPrice").value);
  if (isNaN(price)) {
    document.getElementById("totalDisplay").textContent = "Please enter a valid price.";
    return;
  }
  const total = calculateTotal(price, 0.075);
  document.getElementById("totalDisplay").textContent = `Total with tax: $${total}`;
});

// Function 2: Greet customer by name
function greetCustomer(name) {
  return `Hi ${name}, thanks for shopping with GlowEssence!`;
}

document.getElementById("greetBtn").addEventListener("click", () => {
  const name = document.getElementById("customerName").value;
  const greeting = greetCustomer(name || "Beauty Lover");
  document.getElementById("customerGreeting").textContent = greeting;
});

// ================================
// 🔁 Part 3: Loops - Display Products
// ================================

const products = [
  { name: "Glow Serum", price: 28 },
  { name: "Velvet Lipstick", price: 19 },
  { name: "Silk Foundation", price: 32 },
  { name: "Blush Bloom", price: 22 }
];

let productHTML = "";
for (let i = 0; i < products.length; i++) {
  productHTML += `<p>💖 ${products[i].name} — $${products[i].price}</p>`;
}
document.getElementById("productList").innerHTML = productHTML;
