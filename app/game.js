/**
 * Created by Javier on 11/23/2014.
 */
define([
	'game/ui/HelloPhaserSeed'
], function (HelloPhaserSeed) {
	'use strict';

	require(['domReady!'], function (document) {
		var Game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create });

		function create() {
			new HelloPhaserSeed(Game).sayHello();
		}
	});


});