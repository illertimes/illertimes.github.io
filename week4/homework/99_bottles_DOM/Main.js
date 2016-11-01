
  

 

for (counter = 99; counter >= 1; counter -= 1) {
  $('#output').append("<p>")
    console.log(counter)
    if (counter == 2) {
      
      var p = $("<p>").html( "2 bottles of beer on the wall." + "\n" + "2 bottles of beer."
      + "\n" + "Take it down." + "\n" + "Pass it around." + "\n" + counter-- + " bottle of beer on the wall." );
    }
    $("#output").append(p)
  
  // else if (counter == 1){
  //     $('#output').append("<p>" + "1 bottle of beer on the wall." + "\n" + "1 bottle of beer."
  //     + "\n" + "Take it down." + "\n" + "Pass it around." + "\n" + "No bottles of beer on the wall." + "</p>");
  //   }
  // else {
  //        $('#output').append("<p>" + counter + " bottle of beer on the wall." + "\n" + counter + " bottle of beer."
  //     + "\n" + "Take it down." + "\n" + "Pass it around." + "\n" + (counter-=1) + " bottles of beer on the wall." + "</p>");
  // }
}


