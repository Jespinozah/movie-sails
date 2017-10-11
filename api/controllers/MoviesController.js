/**
 * MoviesController
 *
 * @description :: Server-side logic for managing movies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		list: function(request, response) {
			Movies.find({}).exec(function(error, movies){
				if(error) {
					response.send(500, {error :'Database Error'});
				}
				response.view('list', {movies:movies});
			});
		},
		add: function(request, response) {
			response.view('add');
		},
		create: function(request, response) {
			var title = request.body.title;
			var body = request.body.body;

			Movies.create({title: title, body: body}).exec(function(error){
				if(error) {
					response.send(500, {error :'Database Error'});
				}
				response.redirect('movies/list');
			});
		},
		delete: function(request, response) {
			Movies.destroy({id: request.params.id}).exec(function(error){
				if(error) {
					response.send(500, {error :'Database Error'});
				}
				response.redirect('movies/list');
			});

			return false;
		},
		edit: function(request, response) {
			Movies.findOne({id: request.params.id}).exec(function(error, movie){
				if(error) {
					response.send(500, {error :'Database Error'});
				}
				response.view('edit', {movie: movie});
			});
		},
		update: function(request, response) {
			var title = request.body.title;
			var body = request.body.body;

			Movies.update({id: request.params.id}, {title: title, body: body}).exec(function(error){
				if(error) {
					response.send(500, {error :'Database Error'});
				}
				response.redirect('movies/list');
			});

			return false;
		}
};
