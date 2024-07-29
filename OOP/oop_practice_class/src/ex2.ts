class WepAlumni {
    vue_experience: number;
    node_experience: number;
    can_code_oop: boolean;
    constructor (vue_experience:number, node_experience:number, can_code_oop:boolean){
        this.vue_experience = vue_experience;
        this.node_experience = node_experience;
        this.can_code_oop = can_code_oop;
    }
    getSalary():number{
        if (this.vue_experience < 1 && this.node_experience < 1 && ! this.can_code_oop){
            return 250;
        }else if (this.vue_experience > 1 && this.node_experience < 1 && ! this.can_code_oop){
            return 350;
        }else if (this.vue_experience > 1 && this.node_experience > 1 && ! this.can_code_oop){
            return 450;
        }else if (this.vue_experience > 1 && this.node_experience > 1 && this.can_code_oop){
            return 700;
        }
    }
}
let alumni1 = new WepAlumni(0.5, 0.5, false);
let alumni2 = new WepAlumni(1.1, 0.5, false);
let alumni3 = new WepAlumni(2, 2, false);
let alumni4 = new WepAlumni(2, 2, true);

console.log(alumni1.getSalary());  
console.log(alumni2.getSalary());  
console.log(alumni3.getSalary());
console.log(alumni4.getSalary());  
