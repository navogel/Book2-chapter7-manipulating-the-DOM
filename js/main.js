console.log("yellow");

const students = [
	{
		name: "Chris Miller",
		subject: "History",
		info: "Failed last exam",
		score: 59
	},
	{
		name: "Courtney Seward",
		subject: "History",
		info: "Has completed all homework",
		score: 91
	},
	{
		name: "Garrett Ward",
		subject: "History",
		info: "Wonderful at helping other students",
		score: 88
	},
	{
		name: "John Dulaney",
		subject: "History",
		info: "Has never missed a class or exam",
		score: 92
	},
	{
		name: "Greg Lawrence",
		subject: "History",
		info: "Sub-par performance all around",
		score: 64
	},
	{
		name: "Leah Duvic",
		subject: "History",
		info: "Wonderful student",
		score: 97
	},
	{
		name: "Jesse Page",
		subject: "History",
		info: "Smokes too much. Distracting.",
		score: 76
	},
	{
		name: "Kevin Haggerty",
		subject: "History",
		info: "Falls asleep in class",
		score: 79
	},
	{
		name: "Max Wolf",
		subject: "History",
		info: "Talks too much",
		score: 83
	},
	{
		name: "Lissa Goforth",
		subject: "History",
		info: "Asks pointless, unrelated questions",
		score: 78
	},
	{
		name: "Tyler Bowman",
		subject: "History",
		info: "When was the last time he attended class?",
		score: 48
	},
	{
		name: "Ray Medrano",
		subject: "History",
		info: "Needs to contribute to in-class discussions",
		score: 95
	}
];

// const createStudentComponent = (name, subject, info, grade) => {
// 	return `
//         <div class="student">
//             <h1 class="xx-large ${grade}">${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//     `;
// };

// const studentContainer = document.querySelector("#container");

// for (let i = 0; i < students.length; i++) {
// 	const student = students[i];
// 	let studentComponent;
// 	if (student.score >= 60) {
// 		studentComponent = "passing";
// 	} else {
// 		studentComponent = "failing";
// 	}
// 	studentContainer.innerHTML += createStudentComponent(
// 		student.name,
// 		student.subject,
// 		student.info,
// 		studentComponent
// 	);
// }

// refactor with one object arguement

// const studentContainer = document.querySelector("#container");

// for (let i = 0; i < students.length; i++) {
// 	let studentComponent = "";
// 	if (students[i].score >= 60) {
// 		let studentComponent = passingStudent(students[i]);
// 		studentContainer.innerHTML += studentComponent;
// 	} else {
// 		let studentComponent = failingStudent(students[i]);
// 		studentContainer.innerHTML += studentComponent;
// 	}
// }

// create smaller components inside the component

const studentContainer = document.querySelector("#container");

const passingStudent = student => `
    <div id="student">
        ${h1p(student.name)}
        ${section(student.subject)}
        ${aside(student.info)}
	</div>
	`;

const failingStudent = student => `
    <div id="student">
        ${h1f(student.name)}
        ${section(student.subject)}
        ${aside(student.info)}
	</div>
	`;

const h1p = name =>
	`
		<h1 class="xx-large passing">${name}</h1>
		`;

const h1f = name =>
	`
	<h1 class="xx-large failing">${name}</h1>
	`;

const section = subject =>
	`
	<section class="bordered dashed section--padded">${subject}</section>
	`;

const aside = info =>
	`
	<aside class="pushRight">${info}</aside>
	`;

for (let i = 0; i < students.length; i++) {
	let studentComponent = "";
	if (students[i].score >= 60) {
		let studentComponent = passingStudent(students[i]);
		studentContainer.innerHTML += studentComponent;
	} else {
		let studentComponent = failingStudent(students[i]);
		studentContainer.innerHTML += studentComponent;
	}
}
