var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var removebuttons = document.getElementsByClassName("remove");

function inputLength() {
	return input.value.length;
}


// create buttons within the LI tag with a class of "remove" for items already present in the list
for(var i = 0; i < list.length; i++) {
	var close = document.createElement("button");
	close.setAttribute("type", "button");
	close.className = "remove";
	close.appendChild(document.createTextNode("\u00D7"));
	list[i].appendChild(close);
}

// make buttons to make its parent element which is the LI tag disappear when clicked
for(var i = 0; i < removebuttons.length; i++) {
	removebuttons[i].addEventListener("click", function() {
		this.parentElement.style.display = "none";
	})
}

// toggle class "done" when a LI element of UL is clicked

var ul = document.querySelector('ul');
ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);


function createListElement() {

	// create  anew list item
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// create buttons within the LI tag with a class of "remove" for new items
	var close = document.createElement("button");
	close.setAttribute("type", "button");
	close.className = "remove";
	close.appendChild(document.createTextNode("\u00D7"));
	li.appendChild(close);

	// make buttons to make its parent element which is the LI tag disappear when clicked
	for(var i = 0; i < removebuttons.length; i++) {
		removebuttons[i].addEventListener("click", function() {
			this.parentElement.style.display = "none";
		})
	}

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);