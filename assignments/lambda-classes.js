// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    
    speak() {
        `Hello my name is ${ this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.specialty = instructorAtts.specialty;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }


}

class Student extends Person {
    constructor(studentAtts) {
        super(studentAtts);
        this. previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;

    }
}

class ProjectManager extends Instructor {
    constructor(ProjectManagerAtts) {
        super(ProjectManagerAtts);
        this.gradClassName = ProjectManagerAtts.gradClassName;
        this.favInstructor = ProjectManagerAtts.favInstructor;
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
    previousBackground: "Construction",
    className: "CS132",
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const shawn = new ProjectManager({
    gradClassName: "CS1",
    favInstructor: "Dan"
})


console.log(dan.age);
console.log(dan.location);
console.log(dan.favLanguage);
console.log(jess.previousBackground);
console.log(jess.className);
console.log(shawn.favInstructor);
console.log(shawn.gradClassName);
