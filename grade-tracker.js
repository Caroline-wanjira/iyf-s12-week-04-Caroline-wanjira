const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name (object or null)
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) {
            return null;
        }
        const scores = Object.values(student.grades);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return Number((total / scores.length).toFixed(2));
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const scores = this.students
            .filter(student => subject in student.grades)
            .map(student => student.grades[subject]);
        if (scores.length === 0) {
            return null;
        }
        const total = scores.reduce((sum, score) => sum + score, 0);
        return Number((total / scores.length).toFixed(2));
    },

    // Get top performer (returns the name)
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }
        let top = this.students[0];
        for (const student of this.students) {
            if (this.getStudentAverage(student.name) > this.getStudentAverage(top.name)) {
                top = student;
            }
        }
        return top.name;
    },

    // Get students needing help (average < 70), returns names
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) {
            return `No student found named ${name}`;
        }
        let card = `Report Card: ${student.name}\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            card += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        const average = this.getStudentAverage(name);
        card += `Average: ${average} (${this.getLetterGrade(average)})`;
        return card;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));   // 91.67
console.log(gradeTracker.getSubjectAverage("math"));    // 75.67
console.log(gradeTracker.getTopStudent());              // Alice
console.log(gradeTracker.getStrugglingStudents());      // ["Charlie"]
console.log(gradeTracker.generateReportCard("Alice"));