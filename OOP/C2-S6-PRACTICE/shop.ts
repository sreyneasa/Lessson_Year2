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





class Store {
    name: string;
    products: Product[];
    customers: Customer[];

    constructor(name: string) {
        this.name = name;
        this.products = [];
        this.customers = [];
    }

    addProduct(product: Product) {
        this.products.push(product);
        console.log(`Product '${product.name}' add to store '${this.name}'.`);
    }

    getProductsLessThan(price: number): Product[] {
        return this.products.filter(product => product.price < price);
    }

    getFeedbackContaining(keyword: string): Feedback[] {
        const allFeedbacks: Feedback[] = [];
        this.products.forEach(product => {
            allFeedbacks.push(...product.feedbacks.filter(feedback => feedback.comment.includes(keyword)));
        });
        return allFeedbacks;
    }

    getCustomerComments(customer: Customer): string[] {
        const customerComments: string[] = [];
        this.products.forEach(product => {
            product.feedbacks.forEach(feedback => {
                if (feedback.customer === customer) {
                    customerComments.push(feedback.comment);
                }
            });
        });
        return customerComments;
    }
}

class Product {
    name: string;
    price: number;
    feedbacks: Feedback[];

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.feedbacks = [];
    }

    addFeedback(feedback: Feedback) {
        this.feedbacks.push(feedback);
        console.log(`Feedback added to product '${this.name}': ${feedback.comment}`);
    }
}

class Customer {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Feedback {
    comment: string;
    evaluation: number;
    customer: Customer;

    constructor(comment: string, evaluation: number, customer: Customer) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.customer = customer;
    }
}

const store = new Store("KSK_Store");

const product1 = new Product("Laptop", 900);
const product2 = new Product("Phone", 600);

store.addProduct(product1);
store.addProduct(product2);

const customer1 = new Customer("Mkr", "ny");
const customer2 = new Customer("Ny", "Mkr");

const feedback1 = new Feedback("Great product!", 100, customer1);
const feedback2 = new Feedback("Nice phone!", 285, customer2);

product1.addFeedback(feedback1);
product2.addFeedback(feedback2);

console.log("Products less than $800:", store.getProductsLessThan(700));
console.log("Feedbacks containing 'Great':", store.getFeedbackContaining("Great"));
console.log("Comments from Mkr Ny:", store.getCustomerComments(customer1));
