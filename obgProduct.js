// Constructor function to create a Product object
function Product(name, image, description, price) {
    this.id = generateProductId();
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
}
// Counter variable for generating unique product IDs
var counter=0
// Function to generate a unique product ID
function generateProductId() {
    counter +=1
    return counter;
}
// Function to add a product to the shopping cart
function addToCart(productId) {
    var productToAdd = productsArray.find(product => product.id === productId);
    if (productToAdd) {
        shoppingCartArray.push(productToAdd);
        console.log("Product added to the shopping cart:", productToAdd);
    } else {
        console.error("Product not found with ID:", productId);
    }
    saveShoppingCartToLocalStorage();
}
// Function to load the shopping cart from local storage
function loadShoppingCartFromLocalStorage() {
    var savedCart = localStorage.getItem('shoppingCart');
    shoppingCartArray = savedCart ? JSON.parse(savedCart) : [];
}
// Function to save the shopping cart to local storage
function saveShoppingCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartArray));
}
// Function to remove a product from the shopping cart
function removeFromCart(productId) {
    shoppingCartArray = shoppingCartArray.filter(product => product.id !== productId);
    displayShoppingCart();
    saveShoppingCartToLocalStorage();
}
function goToCheckout() {
    // Redirect to the checkout page
    window.location.href = "chckout.html";
}
function addToCart1(productId) {
    var productToAdd = productsArray1.find(product => product.id === productId);
    if (productToAdd) {
        shoppingCartArray.push(productToAdd);
        console.log("Product added to the shopping cart:", productToAdd);
    } else {
        console.error("Product not found with ID:", productId);
    }
    saveShoppingCartToLocalStorage();
}
function addToCart2(productId) {
    var productToAdd = productsArray2.find(product => product.id === productId);
    if (productToAdd) {
        shoppingCartArray.push(productToAdd);
        console.log("Product added to the shopping cart:", productToAdd);
    } else {
        console.error("Product not found with ID:", productId);
    }
    saveShoppingCartToLocalStorage();
}
function addToCart3(productId) {
    var productToAdd = productsArray3.find(product => product.id === productId);
    if (productToAdd) {
        shoppingCartArray.push(productToAdd);
        console.log("Product added to the shopping cart:", productToAdd);
    } else {
        console.error("Product not found with ID:", productId);
    }
    saveShoppingCartToLocalStorage();
}
function addToCart4(productId) {
    var productToAdd = productsArray4.find(product => product.id === productId);
    if (productToAdd) {
        shoppingCartArray.push(productToAdd);
        console.log("Product added to the shopping cart:", productToAdd);
    } else {
        console.error("Product not found with ID:", productId);
    }
    saveShoppingCartToLocalStorage();
}
var shoppingCartArray = [];
var productsArray = [
    new Product("Floor cleaning set", "c1.jpeg", "Complete set for floor cleaning", 15),
    new Product("Spongs", "c2.jpeg", "Pack of sponges", 1),
    new Product("Floor cleaner", "c3.jpeg", "Effective floor cleaner", 5),
    new Product("Full option floor cleaning machine", "c4.jpeg", "Advanced floor cleaning machine", 120),
    new Product("Ground trash collector", "c5.jpeg", "Durable trash collector for the ground", 3),
    new Product("Glass wiper", "c6.jpeg", "Effective glass wiper", 1.5),
    new Product("Full house cleaners set", "c7.jpeg", "Complete set for house cleaning", 45),
    new Product("Detol cleaner", "c8.jpeg", "Antibacterial detol cleaner", 2.1),
    new Product("Glass cleaning water", "c9.jpeg", "Specialized water for glass cleaning", 1.5),
    new Product("Windows cleaners", "c10.jpeg", "Effective cleaner for windows", 7),
    new Product("Hand washing", "c11.jpeg", "Gentle handwashing solution", 4),
    new Product("Automatic Air refresher", "c12.jpeg", "Automated air freshener", 14),
];
var productsArray1 = [
    new Product("Normal Tv", "e1.jpeg", "Basic television", 150),
    new Product("Tv stick Streaming", "e2.jpeg", "Streaming stick for TV", 20),
    new Product("Small Sound System", "e3.jpeg", "Compact sound system", 70),
    new Product("Full Sound System for all the room", "e4.jpeg", "Comprehensive room sound system", 250),
    new Product("Full Smart tv set", "e5.jpeg", "Smart TV with advanced features", 190),
    new Product("Chess board", "e6.jpeg", "Classic game for entertainment", 10),
    new Product("Small kids playground", "e7.jpeg", "Play area for kids", 45),
    new Product("Smart Tv", "e8.jpeg", "Television with smart features", 140),
    new Product("Bluetooth Speakers", "s9.jpeg", "Wireless speakers with Bluetooth", 15),
    new Product("Projector", "e10.jpeg", "Device for projecting images", 77),
    new Product("Smart house assistant", "e11.jpeg", "AI-powered house assistant", 69),
    new Product("Security camera", "e12.jpeg", "Surveillance camera for security", 55),
];
var productsArray2 = [
    new Product("Full room set", "f6.jpeg", "Complete set for a room", 450),
    new Product("Eating table set", "f1.jpeg", "Table set for dining", 120),
    new Product("Outdoors full sitting set", "f4.jpeg", "Furniture set for outdoor sitting", 270),
    new Product("Brown Wardrobe", "f10.jpeg", "Brown wardrobe for clothes", 60),
    new Product("White 2 seats Sofa", "f5.jpeg", "White sofa with two seats", 90),
    new Product("Desk + chair", "f9.jpeg", "Desk and chair set", 50),
    new Product("Colorful floor rug", "f11.jpeg", "Rug with colorful design", 14),
    new Product("Clothes Hanger", "f12.jpeg", "Hanger for clothes", 18),
    new Product("Small two drawers Table", "f2.jpeg", "Table with two drawers", 15),
    new Product("Kids Playing Table", "f3.jpeg", "Table for kids playing", 7),
    new Product("Twin Kids Beds", "f7.jpeg", "Beds for twin kids", 60),
    new Product("Black Desk", "f8.jpeg", "Black desk for various uses", 40),
    new Product("Table", "f13.jpeg", "Table with no specified details", 35),
    new Product("Blue two seats sofa", "f15.jpeg", "Blue sofa with two seats", 55),
    new Product("Big living room sofa", "f14.jpeg", "Large sofa for the living room", 65),
    new Product("Full living room set", "f16.jpeg", "Complete set for the living room", 210),
];
var productsArray3 = [
    new Product("Wall AC", "h1.jpeg", "Wall-mounted air conditioner", 170),
    new Product("Small floor AC", "h2.jpeg", "Compact floor-standing air conditioner", 70),
    new Product("Old model room AC", "h3.jpeg", "Traditional room air conditioner", 79),
    new Product("Big floor AC", "h4.jpeg", "Large floor-standing air conditioner", 139),
    new Product("Remote controlled heater", "h5.jpeg", "Heater with remote control", 100),
    new Product("Wood heater", "h6.jpeg", "Heater powered by wood", 40),
    new Product("Small on the table heater", "h7.jpeg", "Tabletop heater", 45),
    new Product("Small table fan", "h8.jpeg", "Compact table fan", 10),
    new Product("Floor big fan", "h9.jpeg", "Large floor-standing fan", 15),
    new Product("Roof fan", "h10.jpeg", "Ceiling fan", 25),
    new Product("Carry-in small fan", "h11.jpeg", "Portable small fan", 19),
    new Product("Floor tower fan", "h12.jpeg", "Tower fan for the floor", 45), 
];
var productsArray4 = [
    new Product("Design 1", "l1.jpeg", "Artistic design option 1", 50),
    new Product("Design 2", "l2.jpeg", "Artistic design option 2", 90),
    new Product("Design 3", "l3.jpeg", "Artistic design option 3", 60),
    new Product("Design 4", "l4.jpeg", "Artistic design option 4", 50),
    new Product("Design 5", "l5.jpeg", "Artistic design option 5", 100),
    new Product("Design 6", "l6.jpeg", "Artistic design option 6", 40),
    new Product("Design 7", "l7.jpeg", "Artistic design option 7", 45),
    new Product("Design 8", "l8.jpeg", "Artistic design option 8", 140),
    new Product("Design 9", "l9.jpeg", "Artistic design option 9", 150),
    new Product("Design 10", "l10.jpeg", "Artistic design option 10", 177),
    new Product("Design 11", "l11.jpeg", "Artistic design option 11", 160),
    new Product("Design 12", "l12.jpeg", "Artistic design option 12", 95),
];
