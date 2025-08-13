const students = [
	{name: 'Alex', marks: [8, 7, 9, 5]},
	{name: 'Bob', marks: [1, 9, 2, 7]},
	{name: 'Carl', marks: [10, 4, 3, 8]},
	{name: 'Dave', marks: [5, 10, 7, 10]},
	{name: 'Eve', marks: [10, 8, 9, 10]}
];

const calculateStudentsAverageMark = (student) => {
	return student.map(student => {
		let studentAverageMark = 0;

		if(student.marks.length > 0){
			studentAverageMark = student.marks.reduce((a, b) => a + b) / student.marks.length;
		}

		return {
			...student,
			averageMark: studentAverageMark
		}
	})
}

const studentsWithAverageMarkLessThan = (student, avgMark) => {
	return student.filter(student => student.averageMark < avgMark);
}

const studentMinAvgMark = (avgMark) => {
    return avgMark.reduce((minStudent, currentStudent) => {
		if (currentStudent.averageMark < minStudent.averageMark) {
			return currentStudent;
		} else {
			return minStudent;
		}
    });
}

const studentMaxAvgMark = (avgMark) => {
	return avgMark.reduce((maxStudent, currentStudent) => {
		if (currentStudent.averageMark > maxStudent.averageMark) {
			return currentStudent;
		} else {
			return maxStudent;
		}
	})
}

const studentsWithMarkGreaterThanAvg = (students) => {
	let studentsTotalAvgMark = students.map(student => student.averageMark).reduce((a, b) => a + b) / students.length;
	return students.filter(student => student.averageMark > studentsTotalAvgMark);
}

const studentsWithAverageMark = calculateStudentsAverageMark(students);
const studentsLessThanMark = studentsWithAverageMarkLessThan(studentsWithAverageMark, 5);
const studentWithMinAverageMark = studentMinAvgMark(studentsWithAverageMark);
const studentWithMaxAverageMark = studentMaxAvgMark(studentsWithAverageMark);
const studentsMarkGreaterThanAvg = studentsWithMarkGreaterThanAvg(studentsWithAverageMark);

console.log('Students with average mark')
console.log(studentsWithAverageMark);
console.log('-------')
console.log('Students with average mark less than 5')
console.log(studentsLessThanMark);
console.log('-------');
console.log('Min avg mark')
console.log(studentWithMinAverageMark);
console.log('-------');
console.log('Max avg mark')
console.log(studentWithMaxAverageMark);
console.log('-------');
console.log('Students with average mark greater than avg')
console.log(studentsMarkGreaterThanAvg);
