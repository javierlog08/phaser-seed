/**
 * Created by Javierlog08.
 * HelloPhaser seed is an example game Component
 * you can manipulate  preload/create/update actions from here
 * and late invoke it with requirejs
 */
define(function() {

	'use strict';

	var HelloPhaserSeed = function(Game){

		var text;
		var count = 0;

		this.create = function() {
			var message = "- Phaser Seed -\n A starter project  \n for Phaser Game App. \n Click here !";
			var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

			text = Game.add.text(Game.world.centerX, Game.world.centerY, message, style);

			text.anchor.setTo(0.5, 0.5);
		}

		this.update = function() {
			Game.input.onDown.addOnce(updateText, this);
		}

		function updateText() {
			count++;
			text.setText("- You have clicked -\n" + count + " times !");
		}

	}

	return HelloPhaserSeed;


})
