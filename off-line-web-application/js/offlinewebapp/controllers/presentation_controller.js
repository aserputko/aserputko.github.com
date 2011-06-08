(function () {
	
	var Controller = common.Controller;
		
    offLineWebApp.presantationController = Controller.extend({
		
        initialize : function (options) {
            this._options = options;
            Controller.prototype.initialize.call(options);
        }
    });
})();
