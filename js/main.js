import { UI_ELEMENTS } from "./view.js";

const SERVER_URL = 'https://api.genderize.io';

UI_ELEMENTS.FORM.addEventListener("submit", getName);

function getName(event) {
	event.preventDefault();
	const name = UI_ELEMENTS.INPUT.value;
	if (!name || isFinite(name)) {
		alert("incorrect input");
		return;
	}
	getGender(name);
}

function getGender(name) {
	const firstName = name;
	const url = `${SERVER_URL}?name=${firstName}`;
	let response = fetch(url);
	response = response.then(resolve => resolve.json());
	showGender(response);
}

function showGender(response) {
	response
		.then(resolve => alert(`${resolve.name} is a ${resolve.gender} with ${resolve.probability * 100}% probability`));
}