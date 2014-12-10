/**
 * Created by Javierlog08
 * Testing component Example.
 */
define([
	'game/GameEngine',
	'game/ui/HelloPhaserSeed'
],function(GameEngine,HelloPhaserSeed){

	describe("HelloPhaserSeed Test",function(){


		beforeEach(function() {

			// -- Plz Start First The Game For Test
			GameEngine.init();

			// -- Start Component*
			this.hello = new HelloPhaserSeed(GameEngine.game);

		});


		it("class is defined correctly?",function(){
			expect(this.hello).toBeDefined();
		});


		it("create() method is defined?",function(){
			expect(this.hello.create).toBeDefined();
		});

		it("update() method is defined?",function(){
			expect(this.hello.update).toBeDefined();
		});

		it("updateText() method is defined?",function(){
			expect(this.hello.updateText).toBeDefined();
		});


	});
});