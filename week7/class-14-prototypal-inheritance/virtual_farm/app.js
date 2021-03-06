

// Virtual Farm

// Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

// Instructions:

//1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from

//2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
function FarmAnimal(name, sound, image){
	this.name = name;
	this.sound = sound;
	this.image = image;
	this.talk = function(){
		alert(this.name + 'says' + this.sound )
	}
}// FarmAnimals

//3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)
function Cow(name, sound, image){
	FarmAnimal.call(this, name, sound, image, talk)
}
function Snake(name,sound,image){
	FarmAnimal.call(this,name ,sound, image, talk)
}

function Dog (name, sound, image){
	FarmAnimal.call(this,name, sound, image, talk)
}

	// - Give each  animal a name, a sound, and an image (use the web and copy an image path)

//4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	// ex:
/*
	new rooter = new Rooster('Roger');	farmAnimals.push(rooster);
*/

var farmAnimals = [];
//Prototype
var cow = new Cow('Carl', 'Moo', 'http://vignette4.wikia.nocookie.net/creepypasta/images/f/fc/700cow.jpg/revision/latest?cb=20110412003057', 'Moo');
var snake = new Snake('Sly', 'hiss', 'http://i.huffpost.com/gen/1446453/images/o-SNAKES-facebook.jpg', 'Hiss');
var dog = new Dog('Ron', 'bark', 'http://dognotebook.first.netdna-cdn.com/wp-content/uploads/2014/02/AmericanPitBullTerrier.jpg', 'Bark');

farmAnimals.push(cow);
farmAnimals.push(snake);
farmAnimals.push(dog);
 
/*
//5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
$
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/
$(document).ready(function () {

	farmAnimals.forEach(function(animal){
		var div = $('<div>');
		var img = $('<img>');
		img.attr('src', animal.image);
		img.addClass('animal');

		div.append(img);
		$('div.farm').append(div).click(function(el){
			alert(animal.sound + ', ' + animal.name)
		});
	});
})
