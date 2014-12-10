/**
 * Created By Javierlog08
 * This is where you put your Phaser Game Logic
 * Can include game componente here and call it.
 */
define([
	'phaser',
	'game/ui/HelloPhaserSeed'
],function(Phaser,HelloPhaserSeed ){

	'use strict';

	var GameEngine = function() {

		var game;
		var helloPhaserSeed;

		this.init = function(){
			game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update });
			helloPhaserSeed = new HelloPhaserSeed(game);
		}

		function create(){
			helloPhaserSeed.create();
		}

		function update() {
			helloPhaserSeed.update();
		}

	}

	return new GameEngine();

});
