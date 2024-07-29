enum Genders {
    MALE,
    FEMALE,
}

enum Major {
    WEP,
    SNA,
}

enum Topic {
    JAVAsCRIPT,
    PHP,
    HTML,
    TS,
    VUE,
}

class Student {
    private name: string;
    private gender: Genders;
    private major: Major;

    constructor(name: string, gender: Genders, major: Major) {
        this.name = name;
        this.gender = gender;
        this.major = major;
    }

}

class Result {
    private score: number;
    private topic: Topic;

    constructor(score: number, topic: Topic) {
        this.score = score;
        this.topic = topic;
    }
}

let student = new Student('nyny',Genders.FEMALE,Major.WEP);
console.log(student);

let result = new Result(100,Topic.JAVAsCRIPT);
console.log(result);