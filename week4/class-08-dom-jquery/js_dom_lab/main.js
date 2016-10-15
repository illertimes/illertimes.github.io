/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
  
}

window.onload = function() {	
	var button = document.getElementBy('clickme')
	button.onclick = function(event){
		event.preventDefault()
		console.log('Good Job')

	
	// grab input field data
	var input = document.getElementBy('new item').value
	console.log(input)
	// create new list
	var li = document.createElement('li')
}
  // YOUR CODE HERE!

};

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


