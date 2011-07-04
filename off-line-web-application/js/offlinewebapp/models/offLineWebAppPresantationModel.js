(function () {
	
	offLineWebAppPresantationModel = Model.extend({
				
		initialize : function (options) {
			Model.prototype.initialize.call(this, options);
			this.url = '/off-line-web-application/data.json'
			var result = this.save();
			console.log(result)
		}	
	});
})();
