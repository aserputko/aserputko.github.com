(function () {
		
    common.Controller = Backbone.Controller.extend({
		
        initialize : function (options) {
			if (options.conteinerId) {
				this.el = $('#' + options.conteinerId);
			}
			console.log(options)
        }
    });
})();
