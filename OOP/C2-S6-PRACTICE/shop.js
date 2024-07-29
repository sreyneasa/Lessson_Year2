// class Store {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     addProduct(product: Product) {
//         console.log(`Product '${product.name}' add to store '${this.name}'.`);
//     }
// }
// class Customer {
//     firstname: string;
//     lastname: string;
//     constructor(firstname: string, lastname: string) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     leaveFeedback(feedback: Feedback) {
//         console.log(`Feedback received from ${this.firstname} ${this.lastname}: ${feedback.comment}`);
//     }
// }
// class Product {
//     name: string;
//     price: number;
//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }
// class Feedback {
//     comment: string;
//     evaluation: number;
//     constructor(comment: string, evaluation: number) {
//         this.comment = comment;
//         this.evaluation = evaluation;
//     }
// }
// const store = new Store("NyNy_Store");
// const customer = new Customer("Srey", "Ny");
// const product = new Product("Computer",2024);
// const feedback = new Feedback("Product is the best !!", 7);
// store.addProduct(product);
// customer.leaveFeedback(feedback);
var Store = /** @class */ (function () {
    function Store(name) {
        this.name = name;
        this.products = [];
        this.customers = [];
    }
    Store.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log("Product '".concat(product.name, "' add to store '").concat(this.name, "'."));
    };
    Store.prototype.getProductsLessThan = function (price) {
        return this.products.filter(function (product) { return product.price < price; });
    };
    Store.prototype.getFeedbackContaining = function (keyword) {
        var allFeedbacks = [];
        this.products.forEach(function (product) {
            allFeedbacks.push.apply(allFeedbacks, product.feedbacks.filter(function (feedback) { return feedback.comment.includes(keyword); }));
        });
        return allFeedbacks;
    };
    Store.prototype.getCustomerComments = function (customer) {
        var customerComments = [];
        this.products.forEach(function (product) {
            product.feedbacks.forEach(function (feedback) {
                if (feedback.customer === customer) {
                    customerComments.push(feedback.comment);
                }
            });
        });
        return customerComments;
    };
    return Store;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        this.feedbacks = [];
    }
    Product.prototype.addFeedback = function (feedback) {
        this.feedbacks.push(feedback);
        console.log("Feedback added to product '".concat(this.name, "': ").concat(feedback.comment));
    };
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Customer;
}());
var Feedback = /** @class */ (function () {
    function Feedback(comment, evaluation, customer) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
    }
    return Feedback;
}());
var store = new Store("KSK_Store");
var product1 = new Product("Laptop", 900);
var product2 = new Product("Phone", 600);
store.addProduct(product1);
store.addProduct(product2);
var customer1 = new Customer("Mkr", "ny");
var customer2 = new Customer("Ny", "Mkr");
var feedback1 = new Feedback("Great product!", 100, customer1);
var feedback2 = new Feedback("Nice phone!", 285, customer2);
product1.addFeedback(feedback1);
product2.addFeedback(feedback2);
console.log("Products less than $800:", store.getProductsLessThan(700));
console.log("Feedbacks containing 'Great':", store.getFeedbackContaining("Great"));
console.log("Comments from Mkr Ny:", store.getCustomerComments(customer1));
