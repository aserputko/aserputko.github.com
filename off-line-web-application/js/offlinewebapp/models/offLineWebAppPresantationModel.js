(function () {
	
	offLineWebAppPresantationModel = Model.extend({
				
		initialize : function (options) {
			Model.prototype.initialize.call(this, options);
			console.log(this.url);
			this.save();
		}	
	});
})();
