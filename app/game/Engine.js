/**
 * Created By Javierlog08
 *
 * Base Engine Class.
 *
 * If you create a new Engine, extends from Engine
 * for event support.
 * Example: SessionEngine --> Extends Engine
 */
define(function () {

	var Engine = function ()
	{
		this._events = {};
	}

	Engine.prototype.onEvent = function (event, handler)
	{
		this._events[event].push(handler);
	}

	Engine.prototype.addEvents = function(events)
	{
		if(events instanceof Array)
			for(var e in events)
				this._events[events[e]] = [];
	}

	Engine.prototype.fireEvent = function (event,param)
	{
		for (var e in this._events[event])
		{
			if(param)
				this._events[event][e](param);
			else
				this._events[event][e]();
		}
	}


	return Engine;

});
