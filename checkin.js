const scriptURL = 'https://script.google.com/macros/s/AKfycbyV3fR-RUpM-e4a30RW2nxhlor9b7pYN1XHTrrPnkkld64cy_IG/exec'
const nameForm = document.querySelector('.nameform')
const stepTwo = document.querySelector(`.steptwo`)
const stepThree = document.querySelector(`.stepthree`)
const stepFour = document.querySelector(`.stepfour`)


nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(nameForm)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code
			console.log(stepTwo)
			stepTwo.style.display = 'block'
            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})

stepTwo.addEventListener('click', (e) => {
	e.preventDefault
	stepThree.style.display = 'block'
})

//JS for Lists Section
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
	const li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


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
	// END ADD DELETE BUTTON

	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
	
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
		stepThree.style.display = 'block';
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
