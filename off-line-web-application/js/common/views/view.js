(function () {

    View = Backbone.View.extend({
		
        EVENTS : {},
        
        initialize : function (options) {
			//
        },

        // Causes all events from another view to be
        // re-triggered from this view.
        // @param {Backbone.View} view
        bubbleUpEvents : function (view) {
            var retriggerEvent = function () {
                this.trigger.apply(this, arguments);
            };
            view.bind('all', $.proxy(retriggerEvent, this));
        },

        disableEventHandlers : function () {
            this.delegateEvents({});
        },

        start : function () {
            throw TypeError("Programming error: should implement in derived class");
        },

        stop : function () {
            $(this.el).empty();
        }
    });

})();
