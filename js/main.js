console.log("yellow");

// const sweetArray = [
// 	{
// 		name: "Apple Delights",
// 		event: "Back to School",
// 		count: 8
// 	},
// 	{
// 		name: "Pumpkin Delights",
// 		event: "Halloween",
// 		count: 8
// 	},
// 	{
// 		name: "Happy Camper",
// 		event: "Summer",
// 		count: 8
// 	}
// ];

// const createSweetComponent = (item, index) => {
// 	return `
//         <div>
//             <h2>${index + 1}. ${item.name}</h2>
//             <p>${item.event}</p>
//             <p>${item.count}</p>
//         </div>
//     `;
// };

// const sweetContainer = document.querySelector("#container");

// sweetContainer.innerHTML = createSweetComponent();

// for (let i = 0; i < sweetArray.length; i++) {
// 	console.log("loop of the array", i, sweetArray[i]);
// 	sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);
// }

// sweetArray.forEach((item, index) => {
// 	sweetContainer.innerHTML += createSweetComponent(item, index);
// });

//Practice: Student Components

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

const createStudentComponent = (name, subject, info, grade) => {
	return `
        <div class="student">
            <h1 class="${grade}">${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
        </div>
    `;
};

const studentContainer = document.querySelector("#container");

for (let i = 0; i < students.length; i++) {
	const student = students[i];
	let studentComponent;
	if (student.score >= 60) {
		studentComponent = "passing";
	} else {
		studentComponent = "failing";
	}
	studentContainer.innerHTML += createStudentComponent(
		student.name,
		student.subject,
		student.info,
		studentComponent
	);
}
