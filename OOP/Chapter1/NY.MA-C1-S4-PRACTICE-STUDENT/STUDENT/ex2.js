//  INSTRUCTIONS
// Create the orders
var order1 = {
    customer: "HIM THE CRAZY",
    date: "SEP 9",
    foodOrders: [
        { food: "french fries", price: 12 },
        { food: "cambodian fries", price: 1 },
        { food: "ice scream", price: 4 }
    ]
};
var order2 = {
    customer: "RONAN THE CRAZY",
    date: "SEP 10",
    foodOrders: [
        { food: "coca", price: 12 },
        { food: "caco", price: 1 },
        { food: "snake", price: 14 },
        { food: "chiken", price: 11 }
    ]
};
// Function to calculate the total price of an order
function getTotalPrice(order) {
    var totalPrice = 0;
    order.foodOrders.forEach(function (foodOrder) {
        totalPrice += foodOrder.price;
    });
    return totalPrice;
}
// Function to find the most expensive order
function getMostExpensive(orders) {
    var mostExpensiveOrder = orders[0];
    var highestPrice = getTotalPrice(orders[0]);
    for (var i = 1; i < orders.length; i++) {
        var totalPrice = getTotalPrice(orders[i]);
        if (totalPrice > highestPrice) {
            highestPrice = totalPrice;
            mostExpensiveOrder = orders[i];
        }
    }
    return mostExpensiveOrder;
}
// Test the functions
console.log("Total price of order 1:", getTotalPrice(order1));
console.log("Total price of order 2:", getTotalPrice(order2));
var orders = [order1, order2];
console.log("Most expensive order:", getMostExpensive(orders));
