$(document).ready(function () {
    var router = Backbone.Controller.extend({
		
        initialize : function () {
			this._conteinerId = "home"
        },

        routes: {
            "": "offLineWebApp",
            "presentation": "offLineWebApp",
            "presentation/:page": "offLineWebApp",
            "presentation/:page/:id": "offLineWebApp"
        },

        offLineWebApp : function (page, id) {
            var options = {
				conteinerId : this._conteinerId,
                page        : page,
                id          : id
            };
            var presantation = new offLineWebAppController(options);
        }
    });
    
    var ready = new router();
    Backbone.history.start();
});
