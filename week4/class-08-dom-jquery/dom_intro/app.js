//sublimecodeintel
windoe.onload(function(){
var p = document.createElement("p")
var text = document.createTextNode("Hello World")
p.appendChild(text)
document.body.appendChild(p)

var ul =document.getElementById("gaCampuses")
//var ul_query = document.querySelector("gaCampuses")

document.body.insertBefore(p,ul)

var button = document.getElementById('clickme')
button.onclick = function(event){
	event.preventDefault()
	//grab input field data
	var input = document.getElementById('new-item').value
	console.log(input)
	//create a new li
	var li = document.createElement("li")
	//create a new text node 
	var text = document.createTextNode(input)
	//append the text node to the li
	li.appendChild(text)
	//grab the ul
	//append the li to the ul
		ul.appendChild(li)
		}
} )