/**
 * Created By Javierlog08
 * Game Singleton.
 * This is where you put your Phaser Game Logic
 * Can include game component here and call it.
 */
define([
	'phaser',
	'game/ui/HelloPhaserSeed'
],function(Phaser,HelloPhaserSeed ){

	'use strict';

	var GameEngine = function() {

		this.game;

		var helloPhaserSeed;

		this.init = function(){
			this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { create: create, update: update });
			helloPhaserSeed = new HelloPhaserSeed(this.game);
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
