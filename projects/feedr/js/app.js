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
	var redUrl = "https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json";



function pullJson(callback){
	

	return function (url){
		return $.getJSON(url)
	}
}


	////Down here your pulling the data you want Malc, Each . is a different title within the JSON
	$.get(mashUrl)
		.done(function(res){ 

			// console.log(res.new[0].title);
			// console.log(res.new[0].shares.total);
			// console.log(res.new[0].image);
			// console.log(res.new[0].link);
			
			res.new.forEach(function(article){
				var obj = {}
				obj.title = article.title;
				obj.image = article.image;
				obj.rank = article.shares.total;
				useHandlebars("#title-template", '#main',obj)


				// console.log(article.title);
				// console.log(article.shares.total);
				// console.log(article.image);
				// console.log(article.link);
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
				var obj = {}
				obj.title = article.content.title_alt;
				obj.image = article.content.media;
				useHandlebars("#title-template", "#main",obj)


				// console.log(article.content.title_alt);	
				// console.log(article.content.media);
			})
		})
		.fail(function(xhr){
			console.log('An error occured');
			console.log(xhr);
		});	
	$.get(redUrl)
		.done(function(response){
			response.data.children.forEach(function(article){
				var obj = {}
				obj.title = article.preview.title.source;
				obj.image = article.preview.images.variants.source;


				// console.log(article.preview.images.source);
				// console.log(article.preview.images.variants.source);
			})
		})
			.fail(function(xhr){
			console.log('An error occured');
			console.log(xhr);
	})
//
	function useHandlebars(sourceHTML,destHTML,obj){
// Creates a new article for each availible 
	var articlesSource = $(sourceHTML).html();

	var articlesCompiled = Handlebars.compile(articlesSource);

		var articlesTemplate = articlesCompiled(obj)
	$(destHTML).append(articlesTemplate)

}
})
