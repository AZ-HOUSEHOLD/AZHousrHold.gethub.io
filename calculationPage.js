
// Function to calculate the bill based on item price, quantity, and total amount
function calculateBill() {
    // Get input values
    var itemPrice = parseFloat(document.getElementById("itemPrice").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var totalAmount = parseFloat(document.getElementById("totalAmount").value);

    // Check if the inputs are valid
    if (isNaN(itemPrice) || isNaN(quantity) || isNaN(totalAmount) || itemPrice <= 0 || quantity <= 0 || totalAmount <= 0) {
        alert("Please enter valid values for item price, quantity, and total amount.");
        return;
    }

    // Calculate total cost without discount
    var totalCost = itemPrice * quantity;

    // Apply discount based on total purchase amount
    var discount = 0;
    if (totalAmount >= 50) {
        discount = 0.1; // 10% discount for total purchase amount above 50 OMR
    }

    var discountedCost = totalCost - (totalCost * discount);

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Total Cost: ${totalCost.toFixed(2)} OMR</p>
        <p>Discount: ${discount * 100}%</p>
        <p>Discounted Cost: ${discountedCost.toFixed(2)} OMR</p>
    `;
}

