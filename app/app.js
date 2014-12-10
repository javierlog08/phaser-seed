/**
 * Created by javierlog08
 * This file is a boostrap file for the entire app.
 * You should initiate any app component from here.
 * Example: Network,GameCore, etc
 */
define([
	'game/GameEngine'
],function(GameEngine){

	/**
	 * Game Engine initiation.
	 * All Game Logic is on GameEngine Class.
	 */
	GameEngine.init();

});