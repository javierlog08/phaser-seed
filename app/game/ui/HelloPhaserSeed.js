/**
 * Created by Javierlog08.
 *
 * HelloPhaser seed is an example game Component
 * you can manipulate  preload/create/update actions from here
 * and late invoke it with requirejs
 */
define(function () {

	'use strict';

	var HelloPhaserSeed = function (Game)
	{
		this.game = Game;
	};

	HelloPhaserSeed.count = 0;
	HelloPhaserSeed.text = null;

	HelloPhaserSeed.updateText = function ()
	{
		HelloPhaserSeed.count++;

		HelloPhaserSeed.text.setText("- You have clicked -\n" + HelloPhaserSeed.count + " times !");
	}

	/**
	 * If you are thinking on reuse this Phaser Game Component
	 * Plz use prototype for phaser methods.
	 */
	HelloPhaserSeed.prototype.create = function ()
	{
		var message = "- Phaser Seed -\n A starter project  \n for Phaser Game App. \n Click here !";

		var style = {font: "65px Arial", fill: "#ff0044", align: "center"};

		HelloPhaserSeed.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, message, style);

		HelloPhaserSeed.text.anchor.setTo(0.5, 0.5);
	}


	HelloPhaserSeed.prototype.update = function ()
	{
		this.game.input.onDown.addOnce(HelloPhaserSeed.updateText, this);
	}

	return HelloPhaserSeed;

})