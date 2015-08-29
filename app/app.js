/**
 * Created by javierlog08
 * This file is a boostrap file for the entire app.
 * You should initiate any app component from here.
 * Example: Network,GameCore, etc
 */
define([
	'game/GameEngine'
], function (GameEngine) {

	'use strict';

	/**
	 * Usually we don't use DOM objects with Phaser.
	 * However domReady only thing that do is load the engines once DOM is ready.
	 * If you are thinking on use Jquery or Boostrap for UI, use DomReady.
	 */
	require(['domReady'], function (domReady) {
		domReady(function () {

			/**
			 * Game Engines Initialization.
			 * All Core is Running here
			 */
			GameEngine.init();
		});
	});

});