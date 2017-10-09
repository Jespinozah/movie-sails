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
		}
};
