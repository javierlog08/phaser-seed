/**
 * Created by Javierlog08.
 * HelloPhaser seed is an example game Component
 * you can manipulate  preload/create/update actions from here
 * and late invoke it with requirejs
 */
define(function() {

	'use strict';

	var HelloPhaserSeed = function(Game){

		var count = 0;

		this.game = Game;

		this.text;

		this.updateText = function(){
			count++;
			this.text.setText("- You have clicked -\n" + count + " times !");
		}

	}

	/**
	 * If you are thinking on reuse this Phaser Game Component
	 * Plz use prototype for phaser methods.
	 */
	HelloPhaserSeed.prototype.create = function() {
		var message = "- Phaser Seed -\n A starter project  \n for Phaser Game App. \n Click here !";
		var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

		this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, message, style);

		this.text.anchor.setTo(0.5, 0.5);
	}


	HelloPhaserSeed.prototype.update = function() {
		this.game.input.onDown.addOnce(this.updateText, this);
	}

	return HelloPhaserSeed;


})
