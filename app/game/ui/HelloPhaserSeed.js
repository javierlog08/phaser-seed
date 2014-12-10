/**
 * Created by Administrador on 09/12/2014.
 */
define(function() {

	var HelloPhaserSeed = function(Game){

		var text;
		var count = 0;

		this.create = function() {
			message = "- Phaser Seed -\n A starter project  \n for Phaser Game App. \n Click here !";
			style = { font: "65px Arial", fill: "#ff0044", align: "center" };

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
