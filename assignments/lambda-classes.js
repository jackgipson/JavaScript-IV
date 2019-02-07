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

