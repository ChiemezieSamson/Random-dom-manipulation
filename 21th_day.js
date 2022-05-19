const firstParagraph = document.querySelector("p");
console.log(firstParagraph);
const giveAllTheParagraphId = document.querySelectorAll("p");
giveAllTheParagraphId[0].setAttribute("id", "example1");
giveAllTheParagraphId[1].setAttribute("id", "example2");
giveAllTheParagraphId[2].setAttribute("id", "example3");
giveAllTheParagraphId[3].setAttribute("id", "example4");
giveAllTheParagraphId[0].setAttribute("class", "example5");
giveAllTheParagraphId[1].setAttribute("class", "example6");
giveAllTheParagraphId[2].setAttribute("class", "example7");
giveAllTheParagraphId[3].setAttribute("class", "example8");
const exam1 = document.querySelector("#example1");
const exam2 = document.querySelector("#example2");
const exam3 = document.querySelector("#example3");
const exam4 = document.querySelector("#example4");
console.log(exam1);
console.log(exam2);
console.log(exam3);
console.log(exam4);
console.log(giveAllTheParagraphId);
giveAllTheParagraphId.forEach((textContent) => {
	let okey = textContent.textContent;
	console.log(okey);
});
const theLastParagraph = (giveAllTheParagraphId[3].textContent =
	"The Fourth paragraph");
console.log(theLastParagraph);
const heading = document.querySelector("h1");
heading.style.marginLeft = "200px";
giveAllTheParagraphId.forEach((changeColor, index) => {
	changeColor.style.color = "white";
	changeColor.style.backgroundColor = "green";
	changeColor.style.border = "2px solid black";
	changeColor.style.fontSize = "32px";
	changeColor.style.fontFamily = "sans-serif";
	changeColor.style.margin = "2px";
	changeColor.style.width = "500px";
	changeColor.style.marginLeft = "200px";
	changeColor.style.paddingLeft = "10px";
	if (index % 2 === 0) {
		changeColor.style.color = "red";
	} else {
		changeColor.style.color = "pink";
	}
});

// level 3

const theliSt = document.querySelectorAll("li");
theliSt.forEach((totalcolor) => {
	totalcolor.style.backgroundColor = "red";
	totalcolor.style.fontSize = "15px";
});
theliSt[0].style.background = "green";
theliSt[1].style.background = "yellow";

const theBigYear = document.querySelectorAll("span");
theBigYear.forEach((int) => {
	int.style.fontSize = "70px";
});

function theYearColor() {
	let rgb = "Rgb";
	let random;
	let push = [];
	for (let i = 0; i < 3; i++) {
		random = Math.floor(Math.random() * 256);
		push.push(random);
	}
	return `${rgb}(${push[0]},${push[1]},${push[2]})`;
}
setInterval(function () {
	const theBigYear = document.querySelectorAll("span");
	theBigYear.forEach((int) => {
		int.style.fontSize = "70px";
		int.style.color = theYearColor();
	});
}, 1000);

// the date start here
const getTheDiv = document.querySelectorAll("div");
const setClassForSecondDiv = getTheDiv[1].setAttribute(
	"class",
	"datecontainer"
);

setInterval(function () {
	const theDateObject = () => {
		const now = new Date();
		let Year = now.getFullYear();
		let month = now.getMonth();
		let date = now.getDate();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		let seconds = now.getSeconds();
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (month === 0) {
			month = "January";
		} else if (month === 1) {
			month = "February";
		} else if (month === 2) {
			month = "March";
		} else if (month === 3) {
			month = "April";
		} else if (month === 4) {
			month = "May";
		} else if (month === 5) {
			month = "June";
		} else if (month === 6) {
			month = "July";
		} else if (month === 7) {
			month = "August";
		} else if (month === 8) {
			month = "September";
		} else if (month === 9) {
			month = "October";
		} else if (month === 10) {
			month = "November";
		} else if (month === 11) {
			month = "December";
		}
		return `${month} ${date},${Year} ${hours}:${minutes}:${seconds}`;
	};
	console.log(theDateObject());
	getTheDiv[1].innerHTML = theDateObject();
	getTheDiv[1].style.textAlign = "center";
	getTheDiv[1].style.marginBottom = "0px";
	getTheDiv[1].style.paddingBottom = "0px";
	getTheDiv[1].style.backgroundColor = theYearColor();
	getTheDiv[1].style.width = "230px";
	getTheDiv[1].style.marginLeft = "235px";
}, 1000);
