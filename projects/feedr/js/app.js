/*
  Please add all Javascript code to this file.
*/

/*
  Please add all Javascript code to this file.
*/
$(document).ready(function(){
	var API_KEY = '';
	var mashUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
	var digUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";

	////Down here your pulling the data you want Malc, Each . is a different title within the JSON
	$.get(mashUrl)
		.done(function(res){ 

			// console.log(res.new[0].title);
			// console.log(res.new[0].shares.total);
			// console.log(res.new[0].image);
			// console.log(res.new[0].link);
			
			res.new.forEach(function(article){
				console.log(article.title);
				console.log(article.shares.total);
				console.log(article.image);
				console.log(article.link);
			});
		})
		.fail(function (xhr){
			console.log('An error occured:');
			console.log(xhr);
		});
	//
	$.get(digUrl)
		.done(function(response){
			response.data.feed.forEach(function(article){
				console.log(article.content.title_alt)	
				console.log(article.content.media);
			})
		})
		.fail(function(xhr){
			console.log('An error occured');
			console.log(xhr);
		});	
	});




