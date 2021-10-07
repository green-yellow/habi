const response = document.querySelector(`.feelingreply`)

const stepTwo = document.querySelector(`.steptwo`)
const stepThree = document.querySelector(`.stepthree`)
const stepFour = document.querySelector(`.stepfour`)


const enterBtn = document.querySelector(`#enterbutton`)

const good = document.querySelector(`.good`)
const okay = document.querySelector(`.okay`)
const sick = document.querySelector(`.sick`)
const sheety = document.querySelector(`.sheety`)

enterBtn.addEventListener('click', (e) => {
	e.preventDefault
	stepTwo.style.display = 'block'
})

	if (good.addEventListener) {
		good.addEventListener(`click`, (e) => {
		e.preventDefault
		good.style.border ="solid 2px black"
		response.innerText ="yay love you <3 tell me more"
		stepThree.style.display = 'block'})
	} 
	if (okay.addEventListener) {
		okay.addEventListener(`click`, (e) => {
		e.preventDefault
		okay.style.border ="solid 2px black"
		response.innerText ="same."
		stepThree.style.display = 'block'})
	} 
	if (sick.addEventListener) {
		sick.addEventListener(`click`, (e) => {
		e.preventDefault
		sick.style.border ="solid 2px black"
		response.innerText =":( *sad face* love you!"
		stepThree.style.display = 'block'})
	} 
	if (sheety.addEventListener) {
		sheety.addEventListener(`click`, (e) => {
		e.preventDefault
		sheety.style.border ="solid 2px black"
		response.innerText ="wut happened?!"
		stepThree.style.display = 'block'})
	}


//AFFIRMATION SECTION START
const addButton = document.getElementById("addButton");
const input = document.getElementById("affinput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	event.preventDefault()
	const li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = ""


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	const dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END

	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END
	
}

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
		stepFour.style.display = 'block';
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


addButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyV3fR-RUpM-e4a30RW2nxhlor9b7pYN1XHTrrPnkkld64cy_IG/exec'
const nameForm = document.querySelector('.nameform')

nameForm.addEventListener('submit', (e) => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(nameForm)})
		.then(response => console.log('Success!', response))
		.then(() => {
			//This is where you write your code
			
			//Do not alter below this line
		})
		.catch(error => console.error('Error!', error.message))
	})

const showAll = document.querySelector(`.active`)
const nextBtn = document.querySelector(`.next`) 

showAll.addEventListener("click", (e) => {
	e.preventDefault
	stepTwo.style.display = 'block'
	// stepThree.style.display = 'block'
	// stepFour.style.display = 'block'
	// nextBtn.addEventListener('click', (e) => {
	// 	nextBtn.setAttribute("href","./2lists.html")
	// })
})