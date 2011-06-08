(function () {

    offLineWebAppPresantationController = Controller.extend({		
		
		/**
		 * @param options = {
		 * 		conteinerId : conteinerId, 
		 * 		page : page, 
		 * 		id : id
		 * 	}
		 */
        initialize : function (options) {                      
            Controller.prototype.initialize.call(this, options);
            this._options = options;
            this._view    = new offLineWebAppPresantationView({el : this._el}); 
            this._method  = options.page ? this[options.page] : this.start;
			this._method  ? this._method() : this.show404Page();
        },
        
        /**
         * Method should start, when URL does not have parametr options.page
         */
        start : function () {			
			this._el.html('<h1>Default Page</h1>');			
		},		
		
		title : function () {
			var id = 'title'
			var options = {
				topic : 'topic',
				name  : 'Andrew Serputko',
				data  : '2011'
			}
			this._view.render(id, options);
		}
    });    
})();
