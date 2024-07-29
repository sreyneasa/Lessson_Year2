var Genders;
(function (Genders) {
    Genders[Genders["MALE"] = 0] = "MALE";
    Genders[Genders["FEMALE"] = 1] = "FEMALE";
})(Genders || (Genders = {}));
var Major;
(function (Major) {
    Major[Major["WEP"] = 0] = "WEP";
    Major[Major["SNA"] = 1] = "SNA";
})(Major || (Major = {}));
var Topic;
(function (Topic) {
    Topic[Topic["JAVAsCRIPT"] = 0] = "JAVAsCRIPT";
    Topic[Topic["PHP"] = 1] = "PHP";
    Topic[Topic["HTML"] = 2] = "HTML";
    Topic[Topic["TS"] = 3] = "TS";
    Topic[Topic["VUE"] = 4] = "VUE";
})(Topic || (Topic = {}));
var Student = /** @class */ (function () {
    function Student(name, gender, major) {
        this.name = name;
        this.gender = gender;
        this.major = major;
    }
    return Student;
}());
var Result = /** @class */ (function () {
    function Result(score, topic) {
        this.score = score;
        this.topic = topic;
    }
    return Result;
}());
var student = new Student('nyny', Genders.FEMALE, Major.WEP);
console.log(student);
var result = new Result(100, Topic.JAVAsCRIPT);
console.log(result);
