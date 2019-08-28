console.log("yellow");

const sweetArray = [
	{
		name: "Apple Delights",
		event: "Back to School",
		count: 8
	},
	{
		name: "Pumpkin Delights",
		event: "Halloween",
		count: 8
	},
	{
		name: "Happy Camper",
		event: "Summer",
		count: 8
	}
];

const createSweetComponent = (item, index) => {
	return `
        <div>
            <h2>${index + 1}. ${item.name}</h2>
            <p>${item.event}</p>
            <p>${item.count}</p>
        </div>
    `;
};

const sweetContainer = document.querySelector("#container");
// sweetContainer.innerHTML = createSweetComponent();

// for (let i = 0; i < sweetArray.length; i++) {
// 	console.log("loop of the array", i, sweetArray[i]);
// 	sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);
// }

sweetArray.forEach((item, index) => {
	sweetContainer.innerHTML += createSweetComponent(item, index);
});
