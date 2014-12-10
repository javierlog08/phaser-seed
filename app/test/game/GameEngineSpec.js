define([
	'game/GameEngine',
],function(GameEngine){
	'use strict';

	describe('GameEngine test',function(){
		it('GameEngine Singleton has been defined ?',function(){
			expect(GameEngine).toBeDefined();
		});

		it('GameEngine.init method working ?',function(){
			expect(GameEngine.init).toBeDefined();
		});
	});
})
