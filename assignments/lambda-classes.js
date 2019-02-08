// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }
    demo(subject) { //demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) { //grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAtts) {
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    }


    listsSubjects() {
        return `${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}`;
    }

    PRAssignment(subject) {
        return `${this.name} submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} begins working hard on ${subject}`;
    }

}


class ProjectManager extends Instructor {
    constructor(ProjectManagerAtts) {
        super(ProjectManagerAtts);
        this.gradClassName = ProjectManagerAtts.gradClassName;
        this.favInstructor = ProjectManagerAtts.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const dan = new Instructor({
    age: 29,
    name: "Dan",
    location: "Utah",
    gender: "M",
    specialty: "React",
    favLanguage: ["Javascript", "Python", "Elm"],
    catchphrase: "Don't forget the homies"
});

const jess = new Student({
    age: 25,
    name: "Jess",
    location: "Nebraska",
    gender: "M",
    previousBackground: "Construction",
    className: "CS132",
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const shawn = new ProjectManager({
    age: 21,
    name: "Shawn",
    location: "California",
    gender: "M",
    specialty: "Node",
    favLanguage: ["C++", "Python", "Omicron Per Sei 8"],
    catchphrase: "Let's Meet",
    gradClassName: "CS2",
    favInstructor: "Cam"
});


console.log(dan.speak());
console.log(dan.demo('Math'));
console.log(dan.grade(dan, 'JavaScript'));

console.log(dan.favLanguage);
console.log(jess.previousBackground);
console.log(jess.className);
console.log(shawn.favInstructor);
console.log(shawn.gradClassName);

console.log(jess.PRAssignment('Math'));
console.log(jess.sprintChallenge('Science'));

console.log(shawn.standUp('Async'));
console.log(shawn.debugsCode(jess, 'CS123'));

console.log(jess.listsSubjects());
console.log(jess.sprintChallenge('Psych'));
