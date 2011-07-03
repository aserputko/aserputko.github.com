(function () {
	
	offLineWebAppPresantationModel = Model.extend({
				
		initialize : function (options) {
			Model.prototype.initialize.call(this, options);
			this.url = 'http://stp.org.ua/tojson/auth'
			var result = this.save();
			console.log(result)
		}	
	});
})();
