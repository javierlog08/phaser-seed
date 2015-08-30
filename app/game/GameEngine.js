/**
 * Created By Javierlog08
 * Game Singleton.
 * This is where you put your Phaser Game Logic
 * Can include game component here and call it.
 */
define(function (require) {

	'use strict';

	var Engine                = require("game/Engine");
	var Phaser                = require("phaser");
	var HelloPhaserSeed       = require("game/ui/HelloPhaserSeed");

	var GameEngine = new Engine();

	GameEngine.game = null;

	var helloPhaserSeed;

	GameEngine.init = function ()
	{
		// -- Init Phasergame instance
		GameEngine.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {create: create, update: update});

		// -- Put under, initiation for all yours Phaser Components
		helloPhaserSeed = new HelloPhaserSeed(GameEngine.game);

	}

	function create()
	{
		helloPhaserSeed.create();
	}

	function update()
	{
		helloPhaserSeed.update();
	}

	return GameEngine;

});
