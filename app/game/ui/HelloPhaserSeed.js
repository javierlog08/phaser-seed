/**
 * Created by Administrador on 09/12/2014.
 */
define([
	'phaser',
],function() {

	var HelloPhaserSeed = function(Game){

		this.sayHello = function() {
			var mes = "- Phaser Seed -\n A starter project  \n for Phaser Game App.";
			var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

			Game.add.text(Game.world.centerX-350, 100, mes, style);
		}

	}

	return HelloPhaserSeed;


})
