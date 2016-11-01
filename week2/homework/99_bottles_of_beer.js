// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0
for(counter = 99; counter >= 1; counter -= 1){
	console.log(counter)
	if(counter == 2){
		console.log("2 bottles of beer on the wall." + "\n" +"2 bottles of beer"+"\n"+ "Pass it around." + "\n" + counter-- + "bottle of beer on the wall.");
	}
else if (counter == 1){
	console.log("1 bottle of beer on the wall" + "\n" + "1 bottle of beer" +"\n" + "Pass it around" + "\n" + "No bottles of beer on the wall.");
}
else{
	console.log(counter + "bottle of beer on the wall" + "\n" + counter + "bottle of beer."
		+ "\n" + "Take it down." + "\n" + "Pass it around." + "\n" + (counter-=1)+ "bottles of beer on the wall.");
}
}