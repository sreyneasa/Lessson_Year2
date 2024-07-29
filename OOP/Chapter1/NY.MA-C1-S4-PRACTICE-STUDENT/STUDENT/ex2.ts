//  INSTRUCTIONS

//   We want to manage customer food orders in a restaurant:

//   - An Order has:
//       - the customer name (string)
//       - the date of the order (string)
//       - the list of food orders (array of FoodOrder)


//   - An FoodOrder has:
//       - the food name (string)
//       - the price (number)

//   Q1 : Create the 2 types.

//   Q2 : Create the following orders :
//         - customer = "HIM THE CRAZY"
//         - date = "SEP 9"
//         - food orders:
//             - food : "french fries", price : 12
//             - food  : "cambodian fries", price : 1
//             - food : "ice scream", price : 4


//         - customer = "RONAN THE CRAZY"
//         - date = "SEP 10"
//         - food orders:
//             - food : "coca", price : 12
//             - food  : "caco", price : 1
//             - food  : "snake", price : 14
//             - food  : "chiken", price : 11
            
            
//   Q3 : Create a function that take as parameter a Order, and return the total price of the order
//             getTotalPrice(order : Order) : number
            
            
//   Q4 : Create a function that take as parameter a list of Order, and return which order is the most expensive
  
//            getMostExpensive(orders : Order[]) : Order
  
// */
 

// Define the FoodOrder type
type FoodOrder = {
    food: string;
    price: number;
};

// Define the Order type
type Order = {
    customer: string;
    date: string;
    foodOrders: FoodOrder[];
};

// Create the orders
const order1: Order = {
    customer: "HIM THE CRAZY",
    date: "SEP 9",
    foodOrders: [
        { food: "french fries", price: 12 },
        { food: "cambodian fries", price: 1 },
        { food: "ice scream", price: 4 }
    ]
};

const order2: Order = {
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
function getTotalPrice(order: Order): number {
    let totalPrice = 0;
    order.foodOrders.forEach((foodOrder) => {
        totalPrice += foodOrder.price;
    });
    return totalPrice;
}

// Function to find the most expensive order
function getMostExpensive(orders: Order[]): Order {
    let mostExpensiveOrder = orders[0];
    let highestPrice = getTotalPrice(orders[0]);

    for (let i = 1; i < orders.length; i++) {
        const totalPrice = getTotalPrice(orders[i]);
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

const orders = [order1, order2];
console.log("Most expensive order:", getMostExpensive(orders));