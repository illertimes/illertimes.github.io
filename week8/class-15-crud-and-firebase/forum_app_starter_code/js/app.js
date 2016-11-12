'use strict'
$(document).ready(function(){

var x = 1
var messageAppReference = firebase.database();

$('#message-form').submit(function(event){
	event.preventDefault()
	var message = $('#message').val()
	$('#message').val('');


	var messagesReference = messageAppReference.ref('messages')
	messagesReference.push({
		msg:message, 
		votes: 1 })
});// message-form

function getMessages(){
	messageAppReference.ref('messages').on('value', function(result){
		results.ForEach(function(msg){
			console.log("this is the actual obj: ", msg)
			var id = msg.key
			var message = msg.val();

			var messageText = message.msg
			var votes = message.votes
		//create a new li item
		var li = $('<li>')

		var upVote = $('<i class ="fa fa-thumbs-down pull-right"</i>')
		Upvote.on('click', function(){
			updateMessage(id,votes ++)
		})
		
		var remove = $('<i class= "fa fa-trash pull-right"')
		///populate that li with content
		li.html(messageText);
		li.append('<div class= "pull-right">' + votes + '</div>')
		//append the li
		$('.message-board').append(li);
		});//forEach
	});//.on
}
updateMessage(id,votes){
	var messageReference =messagesReference.ref('messages/' + id)
	messageReference.update({votes:votes})
}
getMessages()
});
