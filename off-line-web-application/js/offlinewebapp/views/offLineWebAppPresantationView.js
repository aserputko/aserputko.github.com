(function () {

    offLineWebAppPresantationView = View.extend({		
		
		/**
		 * @param options = {
		 * 		conteinerId : conteinerId, 
		 * 		page : page, 
		 * 		id : id
		 * 	}
		 */
        initialize : function (options) {
            this._options = options;
            View.prototype.initialize.call(this, options);
        },
        
        start : function () {
			//
		},		
		
		render : function (id, options) {
            var template = _.template($('#' + id)[0].innerHTML);
            this.el.empty();
            this.el.append(template(options));
        }
    });    
})();
