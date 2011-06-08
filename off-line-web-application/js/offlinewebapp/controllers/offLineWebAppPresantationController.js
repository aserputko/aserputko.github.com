(function () {
		
    offLineWebAppPresantationController = Backbone.Controller.extend({
		
        initialize : function (options) {
            this._options = options;
            Controller.prototype.initialize.call(options);
        }
    });
})();
