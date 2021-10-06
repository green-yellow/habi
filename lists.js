const scriptURL = 'https://script.google.com/macros/s/AKfycby98LnNXCTjWJ7iH2gcFPJrKG1esDK4mGM4HzFVigWes69NOsI/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where you write your code

            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})

const addButton = document.getElementById("addButton");
const input = document.getElementById("input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
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

    // START ADD CHECKBOXES
	//ADD NEW div.checkbox
	const addCheck = document.createElement("div")
		addCheck.classList.add("checkbox")
		li.appendChild(addCheck)

	const checkBox = document.querySelector(".checkbox")
	//
	function addCheckboxes() {
		const checkBtn = document.createElement("input")
		checkBtn.setAttribute("type","checkbox")
		checkBox.appendChild(checkBtn)

		const checkBtn1 = document.createElement("input")
		checkBtn1.setAttribute("type","checkbox")
		checkBox.appendChild(checkBtn1)

		const checkBtn2 = document.createElement("input")
		checkBtn2.setAttribute("type","checkbox")
		checkBox.appendChild(checkBtn2)
	}

	addCheckboxes()

	// checkBtn.addEventListener("click", )
	// END ADD CHECKBOXES



}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
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