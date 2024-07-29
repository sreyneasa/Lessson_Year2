class DomElement{
    private tagName:string;
    private parent:DomElement | null;
    private children:DomElement[];
    constructor(tagName:string,parent:DomElement |null){
        this.tagName = tagName;
        this.parent = parent;
        this.children=[];
    }
    public getParent():DomElement|null{
        return this.parent;
    }
    public getChildren():DomElement[]{
        return this.children;
    }
    public addChild(child:DomElement){
        this.children.push(child);
    }
}

let html = new DomElement("html",null);
let head = new DomElement("head", html);
let title = new DomElement("title", head);
let body = new DomElement("body", html);
let a = new DomElement("a", body);
let h1 = new DomElement("h1", a);

html.addChild(head);
html.addChild(body);
head.addChild(title);
body.addChild(a);
a.addChild(h1);
console.log(html);
