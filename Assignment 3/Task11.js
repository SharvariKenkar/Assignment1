const students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

const averageScores = students.map(student => {
    const key = Object.keys(student)[0];
    const subjects = student[key];
    const average = Object.values(subjects).reduce((sum, score) => sum + score, 0) / Object.values(subjects).length;
    return { [key]: { average: average } };
});

console.log(averageScores);
