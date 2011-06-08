$(document).ready(function () {
    var router = Backbone.Controller.extend({
		
        initialize : function () {
			this._conteinerId = "home"
        },

        routes: {
            "": "offLineWebApp",
            "presentation": "presentation",
            "presentation/:page": "presentation",
            "presentation/:page/:id": "presentation"
        },

        presentation : function (page, id) {
            var options = {
				conteinerId : this._conteinerId,
                page        : page,
                id          : id
            };
            var presantation = new offLineWebAppPresantationController(options);
        }
    });
    
    var ready = new router();
    Backbone.history.start();
});
