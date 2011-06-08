$(document).ready(function () {
    var router = Backbone.Controller.extend({
		
        initialize : function () {
			//
        },

        routes: {
            "": "offLineWebApp",
            "oflinewebapp": "offLineWebApp",
            "oflinewebapp/:page": "offLineWebApp",
            "oflinewebapp/:page/:id": "offLineWebApp"
        },

        offLineWebApp : function (page, id) {
            var page = page || false;
            var id   = id   || false;
            var options = {
                page : page,
                id   : id
            };
            console.log(options);
            //var presantation = new OWAPresantationController(options);
        }
    });
    
    var ready = new router();
    Backbone.history.start();
});
