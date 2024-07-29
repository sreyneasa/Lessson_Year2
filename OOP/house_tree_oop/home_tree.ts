class Home {
    numberDoor: number;
    owner: string;
    trees: Tree[] = [];

    constructor(numberDoor: number, owner: string) {
        this.numberDoor = numberDoor;
        this.owner = owner;
    }

    setTree(tree: Tree) {
        this.trees.push(tree);
    }
}

class Tree {
    size: number;

    constructor(size: number) {
        this.size = size;
    }
}


const myTrees1 = new Tree(10);
const myTrees2 = new Tree(20);
const myTrees3 = new Tree(30);


let myHome = new Home(3, "nyny");
myHome.setTree(myTrees1);
myHome.setTree(myTrees2);
myHome.setTree(myTrees3);

console.log(myHome);
