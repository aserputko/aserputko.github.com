(function () {
	
	offLineWebAppPresantationModel = Model.extend({
				
		initialize : function (options) {
			Model.prototype.initialize.call(this, options);
			this.url = '/off-line-web-application/data.php'
			var result = this.save();
			console.log(result)
		}	
	});
})();
