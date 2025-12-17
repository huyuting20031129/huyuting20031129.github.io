(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"女孩_atlas_1", frames: [[0,0,623,434],[625,0,623,434],[1432,0,278,280],[1712,0,278,280],[0,436,153,408],[155,436,153,408],[1250,0,180,465],[310,436,192,322],[504,436,192,322],[698,541,231,138],[1326,515,231,138],[1432,282,299,231],[1733,282,299,231],[698,436,312,103],[1012,467,312,103],[1992,0,54,128]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_32 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["女孩_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.圖層1 = function() {
	this.initialize(img.圖層1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1534,3724);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.手握筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_14
	this.instance = new lib.圖層1();
	this.instance.setTransform(0,-195,0.1448,0.1448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.手握筆, new cjs.Rectangle(0,-195,222.1,539.2), null);


// stage content:
(lib.女孩 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_20
	this.instance = new lib.手握筆();
	this.instance.setTransform(276.95,568.4,1,1,0,0,0,111,74.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).wait(1).to({x:285.95,y:579.4},0).wait(1).to({x:282.95,y:600.4},0).to({_off:true},2).wait(1));

	// 遮 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_107 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_graphics_108 = new cjs.Graphics().p("AiZD5QgzglgRg6QgRg5AYg7QAYg6AzgeIARgIQgPg3AXg6QAYg7AzgeQAzgdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxAoQgUASgXALQAMApgJAoQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgig");
	var mask_graphics_109 = new cjs.Graphics().p("AAQFgQgzgYgdg1QgVglgCgnQg4AAgxgjQgzglgRg5QgRg5AYg6QAYg7AzgeIARgIQgPg4AXg5QAYg7AzgeQA0geA+AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqQgVASgWAKQAFATABASQAjAAAjAPQA4AYAdAwQAdAxgGA8QgGA8gmAqQgmAqg7ANQgUAEgSAAQgmAAgigQg");
	var mask_graphics_110 = new cjs.Graphics().p("AhKG3QgzghgUg0QgUg1APg6QAQg6AsgjIALgJQgHgVgBgWQg4ABgxgjQgzglgRg4QgRg5AYg7QAYg7AzgeIARgJQgPg3AXg5QAYg7AzgeQA0geA+AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqQgVARgWALQAFATABATQAjAAAjAPQA4AYAdAwQAdAwgGA8QgGA8gmAqQgPAQgRAMQAPAxgMAwQgOA2guAmQguAmg5AEIgLAAQgxAAgtgdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(107).to({graphics:mask_graphics_107,x:315.9569,y:281.1028}).wait(1).to({graphics:mask_graphics_108,x:310.9569,y:291.6028}).wait(1).to({graphics:mask_graphics_109,x:314.8903,y:300.0698}).wait(1).to({graphics:mask_graphics_110,x:314.8903,y:310.0868}).wait(2));

	// lady11
	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({_off:true},3).wait(2));

	// Pen
	this.instance_2 = new lib.手握筆();
	this.instance_2.setTransform(180.35,542.7,1,1,0,0,0,111,74.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).wait(1).to({x:205.35,y:546.7},0).wait(1).to({x:229.35},0).to({_off:true},1).wait(5));

	// 遮色片 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_104 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_1_graphics_105 = new cjs.Graphics().p("AgSCtQgSgNgOgPQgNADgOAAQg7ACg0gkQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA/AJQA+AJApArIAHAIQAcgEAfAEQA/AJApArQAdAfANAqQANAqgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgwgjg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AiACtQgSgNgOgPQgNADgOAAQg7ACg0gkQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA/AJQA/AJApArIAHAIQAcgEAeAEQAtAGAhAYQANgLAOgJQA0gdA/AJQA/AJApArQAdAfANAqQANAqgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkIAAAAIgBAAQgwAqg7ACIgHAAQg3AAgxgjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_1_graphics_104,x:224.9569,y:271.1028}).wait(1).to({graphics:mask_1_graphics_105,x:233.4569,y:274.1027}).wait(1).to({graphics:mask_1_graphics_106,x:244.4569,y:274.1027}).wait(6));

	// 下
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("AhgAiQgWgWgpggIgsgkQgLgKAEgIIAeAJQAhAHAPgEQAUACAmAKIBBASIAAABIAjAIQATADAdgBIAxgFIAggDIA5APQgBAEgHAHIgRAQIglAmQgcAYghAAQiRAAgogpg");
	this.shape.setTransform(243.3813,274.75);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).to({_off:true},6).wait(2));

	// Pen_
	this.instance_3 = new lib.手握筆();
	this.instance_3.setTransform(180.35,542.7,1,1,0,0,0,111,74.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).wait(1).to({x:223.25,y:528.2},0).wait(1).to({x:248.25,y:542.7},0).to({_off:true},1).wait(8));

	// 遮色片上 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_101 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_2_graphics_102 = new cjs.Graphics().p("AjBC9QgzglgRg6QgRg5AYg6QAYg7AzgeQA0gdA+AJQAYgtApgZQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA6gxApQgwAqg8ACQgQABgPgDQgPAbgaAVQgvAqg8ACIgHAAQg3AAgxgig");
	var mask_2_graphics_103 = new cjs.Graphics().p("ABvDWQgzglgRg6QgEgNgCgOQgeAPgiABQgQABgPgDQgPAbgaAVQgwAqg8ACQg7ACg0gkQgzglgRg6QgRg5AYg6QAYg7AzgeQA0gdA+AJQAYgtAqgZQA0gdA/AJQA+AJApArQAdAfANAqQAEAOACANQAtgUA1AIQA/AJApArQAdAfANApQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(101).to({graphics:mask_2_graphics_101,x:222.9569,y:269.1028}).wait(1).to({graphics:mask_2_graphics_102,x:231.9569,y:264.6028}).wait(1).to({graphics:mask_2_graphics_103,x:244.4569,y:267.1028}).wait(9));

	// 上
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("ADABEQgTgDgLgEIgIgDQgwgwgMABQglAEgWAAQgKAAgQgFQgPgFgLgBQgOAAg3ALIg0AKIAFAAQgRAEg9gQQADgDAEgCQAxgUAmgUQBKgoAjAAQAGABATAHQATAIAKAAQADAAAXgIQASgGARAHQAZALAiAmQAmAqAHAnQACADgBADg");
	this.shape_1.setTransform(243.445,265.95);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(101).to({_off:false},0).wait(11));

	// pen8
	this.instance_4 = new lib.手握筆();
	this.instance_4.setTransform(246.95,628.95,1,1,0,0,0,111,74.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).wait(1).to({x:227.95,y:640.95},0).wait(1).to({x:207.75,y:650.95},0).wait(1).to({x:180.35,y:655.95},0).wait(1).to({x:155.35,y:667.1},0).wait(1).to({x:134.35},0).wait(1).to({x:117.35},0).to({_off:true},1).wait(11));

	// 遮色片8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_94 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_3_graphics_95 = new cjs.Graphics().p("AjLDRQgzglgRg6QgRg5AYg6QAYg7AzgeQA0gdA/AJIADAAIAHgVQAYg7AygeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA6gxApQgwAqg8ACQgRABgRgDQgOAzgsAlQgvAqg8ACIgHAAQg3AAgxgig");
	var mask_3_graphics_96 = new cjs.Graphics().p("Ak0EXQgzglgRg6QgRg5AYg7QAYg7AzgdQA0gdA/AJIAKACQAEgQAGgRQAYg7AzgeQA0gdA+AJIADAAIAHgVQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwApg8ACQgRABgRgDQgOAzgsAlQgwAqg8ACQgUABgVgEQgLA6gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_3_graphics_97 = new cjs.Graphics().p("AmxFTQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAcAEAYALQADgNAFgNQAYg6AzgeQA0gdA/AJIAKACQAEgQAGgRQAYg7AygeQA0gdA/AJIADAAIAHgVQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQgRABgRgDQgOAygsAlQgwAqg8ACQgVABgVgEQgLA6gxApQgvAqg8ACQgrACgogUQgNA3guAnQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_3_graphics_98 = new cjs.Graphics().p("AopF2QgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAhAFAbAOQAXgsAqgZQA0gcA/AJQAcAEAYALQADgNAFgNQAYg7AzgeQAzgdA/AJIAKACQAEgQAGgRQAYg7AzgeQA0gdA/AJIADAAIAHgVQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQgRABgRgDQgOAzgsAkQgwAqg8ACQgVABgVgEQgLA6gxApQgwAqg8ACQgrACgngUQgNA3guAnQgwAqg8ACQgwACgrgYQgPAbgaAVQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_3_graphics_99 = new cjs.Graphics().p("AqXGKQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAhAFAbAOQATgXAagQQA0gdA/AJQAhAFAbAOQAXgsAqgYQA0gdA/AJQAcAEAYALQADgNAFgNQAXg7AzgeQA0gdA/AJIAKACQAEgQAGgRQAYg7AzgeQA0gdA/AJIADAAIAHgVQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQgRABgRgDQgOAzgsAkQgwAqg8ACQgVABgVgEQgLA6gxApQgwAqg8ACQgrACgogUQgNA3guAnQgvAqg8ACQgwACgrgYQgPAbgaAVQgwAqg8ACQgxACgrgYQgJAJgLAJQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_3_graphics_100 = new cjs.Graphics().p("Ao4GKIgOgLQgeAOgjABQg7ACg0gkQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA3AIAmAiQAtgUA0AIQAhAFAbAOQATgXAagQQA0gdA/AJQAhAFAbAOQAXgsAqgYQA0gdA+AJQAcAEAYALQADgNAFgNQAYg7AzgeQA0gdA/AJIAKACQAEgQAGgRQAYg7AzgeQA0gdA/AJIADAAIAHgVQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQgRABgRgDQgOAzgsAkQgwAqg8ACQgVABgVgEQgLA6gxApQgwAqg8ACQgrACgogUQgNA3guAnQgwAqg8ACQgvACgrgYQgPAbgaAVQgwAqg8ACQgxACgrgYQgJAJgLAJQgwAqg8ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_3_graphics_94,x:294.9569,y:354.0528}).wait(1).to({graphics:mask_3_graphics_95,x:284.9569,y:360.5528}).wait(1).to({graphics:mask_3_graphics_96,x:274.4569,y:367.5528}).wait(1).to({graphics:mask_3_graphics_97,x:261.9569,y:373.5528}).wait(1).to({graphics:mask_3_graphics_98,x:249.9569,y:377.0528}).wait(1).to({graphics:mask_3_graphics_99,x:238.9569,y:379.0528}).wait(1).to({graphics:mask_3_graphics_100,x:229.4569,y:379.0528}).wait(12));

	// lady08
	this.instance_5 = new lib.CachedBmp_18();
	this.instance_5.setTransform(153.35,351.75,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_19();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},94).to({state:[{t:this.instance_6}]},6).to({state:[]},11).wait(1));

	// pen7
	this.instance_7 = new lib.手握筆();
	this.instance_7.setTransform(245.95,589.4,1,1,0,0,0,111,74.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85).to({_off:false},0).wait(1).to({x:256.95,y:611.4},0).wait(1).to({x:273.95,y:615.4},0).wait(1).to({x:303.85,y:609.4},0).wait(1).to({x:328.85,y:608.4},0).wait(1).to({x:350.85,y:613.4},0).wait(1).to({x:376.85,y:635.4},0).wait(1).to({x:381.45,y:653.4},0).wait(1).to({y:681.4},0).to({_off:true},1).wait(18));

	// 遮色片7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_85 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_4_graphics_86 = new cjs.Graphics().p("AgEFCQgkgEgggSQgggSgWgdQgbgjgHguQgHgtAPgqQAPgqAigfIADgCIgRgKQg0glgRg5QgQg5AYg7QAXg7A0geQAzgeA+AJQA/AJApArQAeAfAMArQANArgIAqQgLA5gwAqQAiARAWAeQAfAqAEA3QADA2gaAtQgaAtgxAZQgnAUgqAAIgSgBg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AgSFYQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgqQAPgpAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA+AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOATAJAWQA+AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgwgig");
	var mask_4_graphics_88 = new cjs.Graphics().p("AB+FdQgbgUgSgaQgLAOgPAMQgwAqg7ACQg7ACg0gkQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgqQAPgpAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAVQA9AJApArQALALAJAOQAVgdAegSQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_4_graphics_89 = new cjs.Graphics().p("AAGFdQgagUgSgaQgLAOgPAMQgwAqg8ACQg7ACg0gkQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgqQAPgpAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAVQA+AJApArQALALAJAOQAVgdAdgSQA0gdA/AJQAxAHAjAbQASgUAXgOQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkIgFgFIgQAPQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_4_graphics_90 = new cjs.Graphics().p("Ah7FdQgbgUgSgaQgLAOgPAMQgwAqg8ACQg7ACg0gkQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgqQAPgpAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAVQA+AJApArQALALAJAOQAVgdAegSQA0gdA+AJQAxAHAjAbQASgUAXgOQA0gdA/AJQA/AJApArIABABQARgTAXgOQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgOgLgMgMIgPANQgwAqg8ACQg7ACg0gkIgFgFIgQAPQgwAqg7ACIgHAAQg3AAgxgig");
	var mask_4_graphics_91 = new cjs.Graphics().p("AH6GeQgzglgRg6QgGgUgBgVQgiASgoACQg7ACg0gkQgOgLgMgMIgPANQgwAqg8ACQg7ACgzgkIgFgFIgQAPQgwAqg8ACQg7ACg0gkQgbgUgSgaQgLAOgPAMQgwAqg8ACQg7ACg0gkQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgpQAPgqAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAWQA+AJApAqQALALAJAOQAVgdAegRQA0gdA/AJQAxAHAjAbQASgUAWgOQA0gdA/AJQA/AJApArIABABQARgTAXgOQA0gdA/AJQA/AJApArQAdAeANAqQAGAVABAUQAxgZA6AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_4_graphics_92 = new cjs.Graphics().p("AIxHuQgzglgRg6QgHgWAAgYQgSgHgRgMQgzglgRg6QgGgUgBgVQgiASgoACQg7ACg0gkQgOgLgMgMIgPANQgwAqg8ACQg6ACg0gkIgFgFIgQAPQgwAqg8ACQg7ACg0gkQgbgUgSgaQgLAOgPAMQgwAqg8ACQg7ACg0gkQgrgggTguQghgEgdgRQgggSgWgdQgbgjgHgtQgIgtAPgqQAPgqAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAWQA+AJApArQALALAJAOQAVgdAegSQA0gdA/AJQAxAHAjAbQASgUAXgOQA0gdA+AJQA/AJApArIABABQARgTAXgOQA0gdA/AJQA/AJApArQAdAfANAqQAGAUABAUQAxgZA6AJQA/AJApArQAdAfANAqQAHAXABAXQAiAOAaAbQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_4_graphics_93 = new cjs.Graphics().p("AJZJ1QgzglgRg6QgRg5AYg7QAJgVALgRQgUgIgTgNQgzglgRg6QgHgWAAgYQgSgHgRgMQgzglgRg6QgGgUgBgVQgiASgoACQg7ACg0gkQgOgLgMgMIgPANQgwAqg8ACQg6ACg0gkIgFgFIgQAPQgwAqg8ACQg7ACg0gkQgbgUgSgaQgLAOgPAMQgwAqg8ACQg7ACg0gkQgrgggTgtQghgEgdgRQgggSgWgdQgbgjgHguQgIgtAPgqQAPgqAjgfIACgCIgRgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gwApQAiASAXAeQAOAUAJAWQA+AJApArQALALAJAOQAVgdAegSQA0gdA/AJQAxAHAjAbQASgUAXgOQA0gdA+AJQA/AJApArIABABQARgTAXgOQA0gdA/AJQA/AJApArQAdAfANAqQAGAVABAUQAxgZA6AJQA/AJApArQAdAfANApQAHAXABAXQAiAOAaAbQAdAfANAqQANArgJAqQgHAngYAeQAmAOAbAdQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_4_graphics_85,x:275.9569,y:302.1028}).wait(1).to({graphics:mask_4_graphics_86,x:277.4097,y:316.5952}).wait(1).to({graphics:mask_4_graphics_87,x:284.4569,y:322.0778}).wait(1).to({graphics:mask_4_graphics_88,x:298.9569,y:322.5778}).wait(1).to({graphics:mask_4_graphics_89,x:310.9569,y:322.5778}).wait(1).to({graphics:mask_4_graphics_90,x:323.9569,y:322.5778}).wait(1).to({graphics:mask_4_graphics_91,x:336.9569,y:329.0778}).wait(1).to({graphics:mask_4_graphics_92,x:342.4569,y:337.0778}).wait(1).to({graphics:mask_4_graphics_93,x:346.4569,y:350.5778}).wait(19));

	// lady07
	this.instance_8 = new lib.CachedBmp_20();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_21();
	this.instance_9.setTransform(270.45,282.15,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},85).to({state:[{t:this.instance_9}]},25).to({state:[]},1).wait(1));

	// pen6
	this.instance_10 = new lib.手握筆();
	this.instance_10.setTransform(251.95,542.4,1,1,0,0,0,111,74.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(77).to({_off:false},0).wait(1).to({x:244.95,y:557.4},0).wait(1).to({x:223.25,y:575.3},0).wait(1).to({x:203.25,y:579.3},0).wait(1).to({x:183.75,y:570.3},0).wait(1).to({x:165.75,y:555.3},0).wait(1).to({x:153.75,y:533.3},0).wait(1).to({x:142.75,y:511.3},0).to({_off:true},1).wait(27));

	// 遮色片6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_77 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_5_graphics_78 = new cjs.Graphics().p("Ah7EDQgzglgRg6QgRg5AYg7QASgsAhgbQgLgTgHgXQgRg5AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxAoIgDADQAMAUAHAWQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgig");
	var mask_5_graphics_79 = new cjs.Graphics().p("AjGFiQgzglgRg6QgRg5AYg7QAYg7AzgeQAdgQAhgFQgDgmAQgpQASgsAhgcQgLgTgHgXQgRg5AYg7QAYg7AygeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApIgDADQAMAUAHAWQANAqgJAqQgLA7gxApQgoAjgvAHQACAYgFAYQgLA7gxApQgvAqg8ACIgHAAQg3AAgxgig");
	var mask_5_graphics_80 = new cjs.Graphics().p("AkKGkQgugZgZgxQgZgxAGg0QAHg9AwguQAvgtA+gFIATgBQAXg5AzgdQAcgQAhgEQgDgoARgoQARgtAhgcQgMgTgHgWQgPg5AXg7QAXg7A0geQAzgeA/AJQA/AJApArQAeAfAMArQANArgIAqQgMA6gwAqIgDACQALAUAHAXQANArgIApQgMA6gwAqQgoAigwAHQADAYgFAZQgMA6gwAqQgxApg6ACIgPAAQgRArgkAdQgpAgg3AEIgPAAQguAAgngWg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AloGpQg3gagbgzQgagyAJg8QAJg8AogoQApgoA8gIQA8gJAyAbQAKAGAKAHQApgfAygEIATAAQAYg6AxgcQAdgRAggEQgCgoAQgoQASgsAhgcQgMgUgGgWQgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgDACQAMAUAHAXQANArgJAqQgLA5gxAqQgoAigvAHQACAZgFAYQgLA6gxAqQgwApg8ACIgOAAQgSAsgkAcQgoAgg3AEQg2AEgugaIgQgKQggAZgoAHQgQAEgRAAQgnAAgmgTg");
	var mask_5_graphics_82 = new cjs.Graphics().p("Aj0GpQg0gYgaguQghAQglABQg7ADg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAPAQAKATQAYgLAcgEQA8gJAyAbQALAGAJAHQApgfAxgEIATAAQAYg6AygcQAdgRAhgEQgDgoAQgoQASgsAhgcQgLgUgHgWQgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgDACQAMAUAHAXQANArgJAqQgLA5gxAqQgoAigvAHQACAZgFAYQgLA6gxAqQgwApg8ACIgOAAQgSAsgkAcQgpAgg3AEQg1AEgugaIgQgKQggAZgoAHQgQAEgRAAQgnAAgmgTg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AiLGpQg0gYgaguQghAQglABQg7ADg0glQgzglgRg5QgIgbABgbQgLACgNAAQg7ADg0glQgzglgRg5QgRg5AYg6QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQAIAbAAAaQAbgEAdAEQA/AJApArQAPAQAKATQAYgLAcgEQA8gJAxAbQALAGAJAHQApgfAygEIATAAQAYg6AygcQAdgRAhgEQgDgoAQgoQASgsAhgcQgLgUgHgWQgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgDACQAMAUAHAXQANArgJAqQgLA5gxAqQgoAigvAHQACAZgFAYQgLA6gxAqQgwApg8ACIgOAAQgSAsgkAcQgpAgg3AEQg2AEgugaIgQgKQggAZgnAHQgQAEgRAAQgnAAgmgTg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AhoGpQg0gYgaguQghAQglABQg7ADg0glQgzglgRg5QgIgbABgbQgLACgNAAQg7ADg0glQgzglgRg5QgRg5AYg6IAJgTIgSgLQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgFAagNAXQAXANATATQAdAfANArQAIAbAAAaQAbgEAdAEQA/AJApArQAPAQAKATQAYgLAcgEQA7gJAyAbQALAGAJAHQApgfAygEIATAAQAYg6AygcQAdgRAhgEQgDgoAQgoQASgsAhgcQgLgUgHgWQgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgDACQAMAUAHAXQANArgJAqQgLA5gxAqQgoAigvAHQACAZgFAYQgLA6gxAqQgwApg8ACIgOAAQgSAsgkAcQgpAgg3AEQg2AEgugaIgQgKQggAZgoAHQgPAEgRAAQgnAAgmgTg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_5_graphics_77,x:289.9569,y:255.1028}).wait(1).to({graphics:mask_5_graphics_78,x:287.9569,y:266.6028}).wait(1).to({graphics:mask_5_graphics_79,x:280.4569,y:276.1028}).wait(1).to({graphics:mask_5_graphics_80,x:272.035,y:281.4969}).wait(1).to({graphics:mask_5_graphics_81,x:261.5789,y:281.6583}).wait(1).to({graphics:mask_5_graphics_82,x:249.9569,y:281.6583}).wait(1).to({graphics:mask_5_graphics_83,x:239.4569,y:281.6583}).wait(1).to({graphics:mask_5_graphics_84,x:235.9569,y:281.6583}).wait(28));

	// lady06
	this.instance_11 = new lib.CachedBmp_22();
	this.instance_11.setTransform(179.55,246.75,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_23();
	this.instance_12.setTransform(179.55,246.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},77).to({state:[{t:this.instance_12}]},33).to({state:[]},1).wait(1));

	// pen5
	this.instance_13 = new lib.手握筆();
	this.instance_13.setTransform(149.95,560.4,1,1,0,0,0,111,74.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(68).to({_off:false},0).wait(1).to({x:152.95,y:589.4},0).wait(1).to({x:155.95,y:612.4},0).wait(1).to({x:145.95,y:644.4},0).wait(1).to({x:123.95,y:654.4},0).wait(1).to({x:101.95,y:666.4},0).wait(1).to({x:73.95,y:681.4},0).wait(1).to({x:54.95,y:699.15},0).to({_off:true},1).wait(36));

	// 遮色片5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_68 = new cjs.Graphics().p("AhnCPQgzglgRg5QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgjg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AhiEhQgzglgRg6QgRg5AYg7QATgvAmgdIgGgDQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApIgHAGQARAKAOAPQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_6_graphics_70 = new cjs.Graphics().p("AAlHOQg9gBgtgkQgmgegSgvQgRgvAIgvQAIguAgglQgUgIgSgNQgzglgRg6QgRg4AYg7QATgvAlgdIgFgEQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA+AJApArQAdAfANAqQANArgJAqQgLA7gxApIgHAGQAQALAPAPQAdAfANAqQANArgJApQgJAtgeAjQANAGAOAIQA1AhAUA2QAVA3gSA7QgRA8gvAiQguAhg7AAIgEAAg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AhIJNQgzglgRg6QgRg5AYg7QAYg7AzgeIAPgIQgOgHgMgKQgmgdgSgvQgRgvAIgvQAIgvAgglQgUgIgSgMQgzglgRg5QgRg5AYg7QATgwAlgdIgFgDQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA+AJApArQAdAfANArQANArgJAqQgLA6gxAqIgHAGQAQAKAPAPQAdAfANArQANArgJAqQgJAtgeAiQANAGAOAJQA1AgAUA2QAVA2gSA8QgRA7gvAiQgPALgRAIQAZANAVAVQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgIAAQg2AAgwgig");
	var mask_6_graphics_72 = new cjs.Graphics().p("AjFKxQgzglgRg6QgRg5AYg7QAYg7AzgeQAqgYAyACQgFgsASgtQAYg7AzgeIAOgIQgNgHgMgKQgmgdgSgvQgRgvAIguQAIgvAgglQgUgIgSgNQgzglgRg5QgRg5AYg7QATgwAlgdIgFgDQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA+AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgHAGQAQAKAPAPQAdAfANArQANArgJAqQgJAtgeAiQANAGAOAJQA1AhAUA2QAVA1gSA8QgRA7gvAiQgPALgRAIQAZANAVAVQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgKAAQAEAcgGAcQgLA7gxApQgvAqg8ACIgIAAQg3AAgwgig");
	var mask_6_graphics_73 = new cjs.Graphics().p("AkuMBQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJIAHABQADgaAKgaQAYg7AzgeQAqgYAxACQgFgsASgtQAYg7AzgeIAPgIQgOgHgMgKQgmgdgSgvQgRguAIgvQAIgvAgglQgUgIgSgNQgyglgRg5QgRg5AYg7QATgwAkgdIgFgDQgyglgRg5QgRg5AYg7QAYg7AygeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgHAGQAQAKAPAPQAdAfANArQANArgJAqQgJAtgeAiQANAGAOAJQA1AhAUA2QAVA2gSA8QgRA6gvAiQgPALgRAIQAZANAVAVQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgKAAQAEAcgGAcQgLA7gxApQgwAqg8ACQgTABgTgEIgDATQgLA7gxApQgwAqg8ACIgIAAQg3AAgwgig");
	var mask_6_graphics_74 = new cjs.Graphics().p("AmrNHQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAaADAWAKQADgWAJgWQAYg7AzgeQA0gdA/AJIAHABQADgaAKgaQAYg7AygeQAqgYAyACQgFgsASgtQAYg7AzgeIAPgIQgOgHgMgKQgmgcgSgvQgRgvAIgvQAIgvAgglQgUgIgSgNQgzglgRg5QgRg5AYg7QATgwAlgdIgFgDQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgHAGQAQAKAPAPQAdAfANArQANArgJAqQgJAtgeAiQANAGAOAJQA1AhAUA2QAVA2gSA8QgRA7gvAhQgPALgRAIQAZANAVAVQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgKAAQAEAcgGAcQgLA7gxApQgwAqg8ACQgUABgTgEIgDATQgLA7gxApQgvAqg8ACQgqABgmgRIgCAMQgLA7gxApQgwAqg8ACIgIAAQg3AAgwgig");
	var mask_6_graphics_75 = new cjs.Graphics().p("AooODQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAcAEAYALQADgNAFgNQAYg7AzgeQA0gdA/AJQAaADAWAKQADgWAJgWQAYg7AzgeQAzgdA/AJIAHABQADgaAKgaQAYg7AzgeQAqgYAyACQgFgsASgtQAYg7AzgdIAPgIQgOgHgMgKQgmgdgSgvQgRgvAIgvQAIgvAgglQgUgIgSgNQgzglgRg5QgRg5AYg7QATgwAlgdIgFgDQgzglgRg5QgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqIgHAGQAQAKAPAPQAdAfANArQANArgJAqQgJAtgeAiQANAGAOAJQA1AhAUA2QAVA2gSA8QgRA7gvAiQgPALgRAIQAZANAVAUQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgKAAQAEAcgGAcQgLA7gxApQgwAqg8ACQgUABgTgEIgDATQgLA7gxApQgwAqg8ACQgqABglgRIgCAMQgLA7gxApQgwAqg8ACQgsACgngUQgNA2guAoQgwAqg7ACIgIAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_6_graphics_68,x:181.9569,y:273.1027}).wait(1).to({graphics:mask_6_graphics_69,x:182.4569,y:287.6028}).wait(1).to({graphics:mask_6_graphics_70,x:185.8918,y:301.5212}).wait(1).to({graphics:mask_6_graphics_71,x:185.8918,y:317.5778}).wait(1).to({graphics:mask_6_graphics_72,x:180.3918,y:327.5778}).wait(1).to({graphics:mask_6_graphics_73,x:169.8918,y:335.5778}).wait(1).to({graphics:mask_6_graphics_74,x:157.3918,y:342.5778}).wait(1).to({graphics:mask_6_graphics_75,x:144.8918,y:348.5778}).wait(37));

	// lady05
	this.instance_14 = new lib.CachedBmp_24();
	this.instance_14.setTransform(96.75,268.65,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_25();
	this.instance_15.setTransform(96.75,268.65,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},68).to({state:[{t:this.instance_15}]},41).to({state:[]},1).wait(2));

	// pen4
	this.instance_16 = new lib.手握筆();
	this.instance_16.setTransform(135.95,431.75,1,1,0,0,0,111,74.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55).to({_off:false},0).wait(1).to({x:111,y:433.75},0).wait(1).to({x:88.2,y:444.75},0).wait(1).to({x:72.2,y:466.75},0).wait(1).to({x:71.2,y:492.75},0).wait(1).to({x:88.2,y:517.75},0).wait(1).to({x:105.2,y:535.75},0).wait(1).to({x:84.2,y:555.75},0).wait(1).to({x:92.2,y:577.4},0).wait(1).to({x:111,y:592.4},0).wait(1).to({x:102,y:620.3},0).wait(1).to({x:111,y:635.3},0).wait(1).to({x:130,y:660.05},0).to({_off:true},1).wait(44));

	// 遮色片4 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_55 = new cjs.Graphics().p("AglCuQg3gMgkgmQglgmgKg3QgJg2AVgwQASgpAlgcQAkgcAsgHQAqgIAsAPQArAPAeAhQAXAZANAgQAMAhAAAhQgBA1ggAtQgfAugyAUQgeAMggAAQgTAAgVgFg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AjrCrQgzglgRg5QgRg5AYg6QAYg7AzgeQA0geA/AJQAwAHAjAbQASgeAcgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA0ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagYAVQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AleDOQgzglgRg5QgRg5AYg6QAYg7AzgeQA0geA/AJQAcAEAYALQAXgpAogXQA0geA+AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAsQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg7ACQgsACgogTQgOAYgYAUQgwApg8ACIgHABQg3AAgxgjg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AnMEeQgzglgRg5QgRg5AYg7QAYg7AzgdQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAYALQAXgpAngXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAtgxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgXAUQgwApg8ACQgZABgYgGIgDAWQgLA6gxAqQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AoIGMQgzglgRg5QgRg5AYg7QAYg7AzgeQASgKATgGQgQg5AYg5QAYg7AzgeQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgYATQgvApg8ACQgZABgYgGIgDAWQgLA6gxAqQgeAagiAKQAMArgIApQgLA6gxAqQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AnCIiQgzglgRg5QgRg5AYg7QAPgmAbgaQgbgIgYgSQgzglgRg5QgRg5AYg7QAYg6AzgeQASgKATgGQgQg5AYg6QAYg7AzgeQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgYAUQgvApg8ACQgZABgYgGIgDAWQgLA6gxApQgeAagiAKQAMArgIApQgLA3grAoQAtANAhAhQAdAfANArQANArgJAqQgLA6gxAqQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AkYKGQgzglgRg5QgLgjAGglQg0gCgtggQgzglgRg5QgRg5AYg7QAPgmAbgaQgbgIgYgSQgzglgRg5QgRg4AYg7QAYg7AzgeQASgKATgGQgQg5AYg6QAYg7AzgeQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgYAUQgvApg8ACQgZABgYgGIgDAWQgLA6gxAqQgeAagiAKQAMArgIAoQgLA3grAoQAtANAhAhQAdAfANArQALAlgFAkIASABQA/AJApArQAdAfANArQAMArgIAqQgLA6gxAqQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_62 = new cjs.Graphics().p("AjILlQgzglgRg5QgNgsALgtIgKgHQgzglgRg5QgLgjAGglQg0gCgtggQgzglgRg5QgRg5AYg7QAPgmAbgaQgbgIgYgSQgzglgRg4QgRg5AYg7QAYg7AzgeQASgKATgGQgQg5AYg6QAYg7AzgeQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgYAUQgvApg8ACQgZABgYgGIgDAWQgLA6gxAqQgeAagiAKQAMArgIApQgLA3grAnQAtANAhAhQAdAfANArQALAlgFAkIASABQA/AJApArQAdAfANArQAMArgIAqIgBAEQASALAQAQQAdAfANArQANArgJAqQgLA6gxAqQgvApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AleM6QgzglgRg5QgRg5AYg7QAYg7AzgeQAdgRAggEQABgQAEgRIgKgHQgzglgRg5QgLgjAGglQg0gCgtggQgzglgRg5QgRg5AYg7QAPgmAbgZQgbgIgYgSQgzglgRg5QgRg5AYg7QAYg7AzgeQASgKATgGQgQg5AYg6QAYg7AzgeQA0geA/AJIARAEQACgbALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAagZAVQgwApg8ACQgsACgogTQgOAYgYAUQgvApg8ACQgZABgYgGIgDAWQgLA6gxAqQgeAagiAKQAMArgIApQgLA3grAoQAtANAhAhQAdAeANArQALAlgFAkIASABQA/AJApArQAdAfANArQAMArgIAqIgBAEQASALAQAQQAdAfANArQANArgJAqQgLA6gxAqQgnAigvAHQAAAPgDAOQgLA6gxAqQgwApg8ACIgHABQg4AAgwgjg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AjeOjQgwgjgRg9QgNgsAJgpQgfgIgcgUQgzglgRg5QgRg5AYg7QAYg7AzgeQAdgRAggEQABgRAEgQIgKgHQgzglgRg5QgLgkAGgkQg0gCgtggQgzglgRg5QgRg5AYg6QAPgmAbgaQgbgIgYgSQgzglgRg5QgRg5AYg7QAYg7AzgeQASgLATgFQgQg5AYg6QAYg7AzgeQA0geA/AJIARADQACgaALgbQAYg7AzgeQA0geA/AJQAcAEAXALQAXgpAogXQA0geA/AJQAwAHAjAbQASgeAdgXQAlgcArgHQAsgIArAPQAsAPAeAhQAXAZAMAgQANAhgBAiQAAA1ggAtQggAugxAUQgxATg3gMQgogJgfgXQgPAZgZAWQgwApg8ACQgsACgogUQgOAZgYAUQgvApg8ACQgZABgYgGIgDAWQgLA6gxAqQgeAZgiALQAMAqgIAqQgLA3grAoQAtAMAhAiQAdAfANArQALAjgFAkIASACQA/AJApArQAdAfANArQAMArgIAqIgBADQASAMAQAQQAdAfANArQANArgJAqQgLA6gxAqQgnAigvAHQAAAPgDAOIgBADQARAEAQAIQA4AcAaA1QAaA2gNA+QgNA+gtAmQguAmg/ACIgGAAQg8AAgtgig");
	var mask_7_graphics_65 = new cjs.Graphics().p("AgzQlQgvgHgngfQgngfgRgsQgSgwALg0QgLgGgLgIQgwgjgRg+QgNgrAJgpQgfgIgcgUQgzglgRg6QgRg5AYg7QAYg7AzgeQAdgQAggFQABgQAEgRIgKgGQgzglgRg6QgLgjAGgkQg0gCgtggQgzglgRg5QgRg5AYg7QAPgmAbgaQgbgIgYgRQgzglgRg6QgRg5AYg7QAYg7AzgeQASgKATgGQgQg4AYg7QAYg7AzgeQA0gdA/AJIARADQACgbALgbQAYg7AzgeQA0gdA/AJQAcAEAXALQAXgpAogYQA0gdA/AJQAwAHAjAbQASgfAdgWQAlgdArgHQAsgHArAPQAsAPAeAgQAXAZAMAhQANAggBAiQAAA1ggAuQggAugxATQgxATg3gMQgogJgfgXQgPAagZAVQgwAqg8ACQgsACgogUQgOAYgYAUQgvAqg8ACQgZABgYgGIgDAVQgLA7gxApQgeAagiAKQAMArgIApQgLA3grAoQAtANAhAiQAdAfANAqQALAlgFAkIASACQA/AJApArQAdAeANAqQAMArgIAqIgBAEQASALAQARQAdAfANAqQANArgJAqQgLA7gxApQgnAigvAIQAAAOgDAOIgBADQARAFAQAIQA4AbAaA2QAaA1gNA+QAbAOAVAXQAqAuADBCQADBCglAxQgcAmguATQgiAOgiAAQgMAAgMgBg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AjmR1QgzglgRg5QgRg5AYg7QAYg7AzgeQALgGALgFQgRguALgyQgLgGgLgIQgwgjgRg+QgNgrAJgpQgfgIgcgUQgzglgRg6QgRg5AYg7QAYg7AzgeQAdgQAggFQABgQAEgRIgKgGQgzglgRg6QgLgjAGgjQg0gCgtggQgzglgRg6QgRg5AYg7QAPgmAbgaQgbgIgYgRQgzglgRg6QgRg5AYg7QAYg7AzgeQASgKATgGQgQg4AYg7QAYg7AzgeQA0gdA/AJIARADQACgbALgbQAYg7AzgeQA0gdA/AJQAcAEAXALQAXgpAogYQA0gdA/AJQAwAHAjAbQASgfAdgWQAlgdArgHQAsgHArAPQAsAPAeAgQAXAZAMAhQANAggBAiQAAA1ggAuQggAugxATQgxATg3gMQgogJgfgXQgPAagZAVQgwAqg8ACQgsACgogUQgOAYgYAUQgvAqg8ACQgZABgYgGIgDAVQgLA7gxApQgeAagiAKQAMArgIApQgLA3grAoQAtANAhAiQAdAfANAqQALAlgFAkIASACQA/AJApArQAdAfANAqQAMAqgIAqIgBAEQASALAQARQAdAfANAqQANArgJAqQgLA7gxApQgnAigvAIQAAAOgDAOIgBADQARAFAQAIQA4AbAaA2QAaA1gNA+QAbAOAVAXQAqAuADBCQADBCglAxQgcAmguATIgBAAIAEAMQANArgJAqQgLA6gwAqQgwApg8ACIgHAAQg3AAgxgig");
	var mask_7_graphics_67 = new cjs.Graphics().p("AgKTjQgzglgRg5QgOgxAPgyQgUAGgWABQg7ADg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQALgGALgFQgRguALgyQgLgGgLgIQgwgjgRg+QgNgsAJgoQgfgIgcgUQgzglgRg6QgRg5AYg7QAYg7AzgeQAdgQAggFQABgQAEgRIgKgGQgzglgRg5QgLgjAGgkQg0gCgtggQgzglgRg6QgRg5AYg7QAPgmAbgaQgbgIgYgRQgzglgRg6QgRg5AYg7QAYg7AzgeQASgKATgGQgQg4AYg7QAYg7AzgeQA0gdA/AJIARADQACgbALgbQAYg7AzgeQA0gdA/AJQAcAEAXALQAXgpAogYQA0gdA/AJQAwAHAjAbQASgfAdgWQAlgdArgHQAsgHArAPQAsAPAeAgQAXAZAMAhQANAggBAiQAAA1ggAuQggAugxATQgxATg3gMQgogJgfgXQgPAagZAVQgwAqg8ACQgsACgogUQgOAYgYAUQgvAqg8ACQgZABgYgGIgDAVQgLA7gxApQgeAagiAKQAMArgIApQgLA3grAoQAtANAhAiQAdAfANAqQALAlgFAkIASACQA/AJApArQAdAfANAqQAMArgIAqIgBAEQASALAQARQAdAfANApQANArgJAqQgLA7gxApQgnAigvAIQAAAOgDAOIgBADQARAFAQAIQA4AbAaA2QAaA1gNA+QAbAOAVAXQAqAuADBCQADBCglAxQgcAmguATIgBAAIAEAMQANArgJAqIgDAMQAigIAnAFQA/AJApArQAdAfANArQANArgJAqQgLA6gxAqQgwApg8ACIgHAAQg4AAgvgig");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_7_graphics_55,x:185.4304,y:159.6573}).wait(1).to({graphics:mask_7_graphics_56,x:172.1899,y:162.358}).wait(1).to({graphics:mask_7_graphics_57,x:160.6899,y:165.8579}).wait(1).to({graphics:mask_7_graphics_58,x:149.6899,y:173.858}).wait(1).to({graphics:mask_7_graphics_59,x:143.6899,y:184.858}).wait(1).to({graphics:mask_7_graphics_60,x:143.6899,y:199.858}).wait(1).to({graphics:mask_7_graphics_61,x:143.6899,y:209.858}).wait(1).to({graphics:mask_7_graphics_62,x:143.6899,y:219.358}).wait(1).to({graphics:mask_7_graphics_63,x:143.6899,y:227.858}).wait(1).to({graphics:mask_7_graphics_64,x:143.6899,y:238.2781}).wait(1).to({graphics:mask_7_graphics_65,x:143.6899,y:248.0328}).wait(1).to({graphics:mask_7_graphics_66,x:143.6899,y:259.3329}).wait(1).to({graphics:mask_7_graphics_67,x:143.6899,y:270.333}).wait(45));

	// lady04
	this.instance_17 = new lib.CachedBmp_26();
	this.instance_17.setTransform(99.25,158.25,0.5,0.5);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({_off:false},0).to({_off:true},55).wait(3));

	// pen3
	this.instance_18 = new lib.手握筆();
	this.instance_18.setTransform(169.95,411.95,1,1,0,0,0,111,74.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(41).to({_off:false},0).wait(1).to({x:163.95,y:449.95},0).wait(1).to({x:151.95,y:467.95},0).wait(1).to({x:131.95,y:478.95},0).wait(1).to({x:106.95,y:486.9},0).wait(1).to({x:100.95,y:507.9},0).wait(1).to({x:111,y:521.9},0).wait(1).to({x:123,y:534.9},0).wait(1).to({x:134,y:547.9},0).wait(1).to({x:128,y:559.9},0).wait(1).to({x:129,y:587.9},0).wait(1).to({x:136,y:594.9},0).wait(1).to({x:130,y:607.9},0).to({_off:true},1).wait(58));

	// 遮色片3 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_41 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_8_graphics_42 = new cjs.Graphics().p("AhxEHQgzglgRg5QgRg5AYg7QAQgmAbgaQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAnQAUAaAKAhQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgjg");
	var mask_8_graphics_43 = new cjs.Graphics().p("AijF1QgzglgRg5QgRg5AYg7QAYg7AzgeIAUgJIgCgGQgRg5AYg6QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQAzgdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANAqgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgjg");
	var mask_8_graphics_44 = new cjs.Graphics().p("AjpHAQgzglgRg5QgRg5AYg7QAYg7AzgeQAagOAbgFQAEgVAIgVQAYg7AzgdIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AygeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA6gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gwApQgwAqg8ACIgHAAQg3AAgxgjg");
	var mask_8_graphics_45 = new cjs.Graphics().p("AkWHaQgzglgRg6QgRg5AYg7QAYg7AzgeQAZgNAbgGQARgSAVgNQAagOAbgFQAEgVAIgVQAYg7AzgdIAUgJIgCgGQgRg5AYg7QAPgmAbgbQgUgagKghQgQg5AXg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA6gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gxApQgjAggrAIIgLAKQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_8_graphics_46 = new cjs.Graphics().p("AlmH3QgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA+AJQATgYAbgQQAZgNAbgGQARgSAVgNQAagOAbgFQAEgVAIgVQAYg6AygeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxAoQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gxApQgkAggrAIIgLAKQgvAqg8ACQgRABgQgDQgIAKgLAIQgwAqg8ACIgHAAQg3AAgxgjg");
	var mask_8_graphics_47 = new cjs.Graphics().p("AnFI0QgzglgRg6QgRg5AYg7QAYg7AzgeQAzgcA9AHIADgKQAYg7AzgeQA0gdA+AJQATgYAbgQQAZgNAbgGQARgSAUgNQAagOAbgFQAEgUAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANAqgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gxApQgkAggrAIIgLAKQgwAqg8ACQgQABgQgDQgIAKgLAIQgwAqg8ACQgOABgOgCQgPAsgnAhQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_8_graphics_48 = new cjs.Graphics().p("AmnKTQgzglgRg6QgRg5AYg7IACgEQgbgegMgoQgRg5AYg7QAYg7AzgeQAzgcA9AHIADgKQAYg7AzgeQA0gdA+AJQATgYAbgPQAZgNAbgGQARgSAUgNQAagOAbgFQAEgVAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA6gxApQgkAfgqAJIgCAKQgLA7gxApQgkAggrAIIgLAKQgwAqg8ACQgQABgQgDQgIAKgLAIQgwAqg8ACQgOABgOgCIgFAOQAZAeAMAmQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_8_graphics_49 = new cjs.Graphics().p("AkbLPQgwgjgSg2QgngGgjgZQgzglgRg6QgRg5AYg7IACgEQgbgegMgoQgRg5AYg7QAYg7AzgeQAzgcA9AHIADgKQAYg7AzgdQA0gdA+AJQATgYAbgQQAZgNAbgGQARgSAUgNQAagOAbgFQAEgVAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA7gxAoQgkAfgqAJIgCAKQgLA7gxApQgkAggrAIIgLAKQgwAqg8ACQgQABgQgDQgIAKgLAIQgwAqg8ACQgOABgOgCIgFAOQAYAcALAkQA8AKAoApQAdAfANAqQAMArgIAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_8_graphics_50 = new cjs.Graphics().p("AiFMUQgzglgRg5IgDgNQgqgGglgaQgwgjgSg2QgngGgjgZQgzglgRg6QgRg5AYg7IACgEQgbgegMgoQgRg5AYg7QAYg7AzgeQAzgcA9AHIADgKQAYg6AzgeQA0gdA+AJQATgYAbgQQAZgNAbgGQARgSAUgNQAagOAbgFQAEgVAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA6gxApQgkAggrAIIgLAKQgwAqg8ACQgQABgQgDQgIAKgLAIQgwAqg8ACQgOABgOgCIgFAOQAYAcALAkQA8AKAoApQAdAfANAqIAEAPIAAAAQA+AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgjg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AiZNlQgzglgRg6QgRg5AYg7QAHgRAKgPIgEgMIgDgNQgqgGglgaQgwgjgSg2QgngGgjgZQgzglgRg6QgRg5AYg7IACgEQgbgegMgoQgRg5AYg7QAYg6AzgeQAzgcA9AHIADgKQAYg7AzgeQA0gdA+AJQATgYAbgQQAZgNAbgGQARgSAUgNQAagOAbgFQAEgVAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgmAbgbQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA4gsAoQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gxAoQgkAggrAIIgLAKQgwAqg8ACQgQABgQgDQgIAKgLAIQgwAqg8ACQgOABgOgCIgFAOQAYAcALAkQA8AKAoApQAdAfANAqIAEAPIAAAAQA+AJApArQAdAfANAqQANArgJAqQgHAkgUAdIADAKQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgig");
	var mask_8_graphics_52 = new cjs.Graphics().p("AjhPiQgwgjgRg+QgRg9AXg3QAQgnAjgdQAPgMAQgJQgMgTgHgXQgRg5AYg7QAHgRAKgPIgEgMIgDgNQgqgGglgaQgwgjgSg2QgngHgjgYQgzglgRg6QgRg5AYg7IACgEQgbgegMgoQgRg4AYg7QAYg7AzgeQAzgcA9AHIADgKQAYg7AzgeQA0gdA+AJQATgYAbgQQAZgOAbgFQARgSAUgNQAagOAbgFQAEgVAIgVQAYg7AzgeIAUgJIgCgGQgRg5AYg7QAQgnAbgaQgUgagKghQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA3gsApQAUAaAKAhQANArgJAqQgLA7gxApQgWATgYALIACAFQANArgJAqQgLA7gxApQgkAfgqAJIgCAKQgLA7gxApQgkAfgrAJIgLAKQgwAqg8ACQgQAAgQgCQgIAKgLAHQgwAqg8ACQgOAAgOgBIgFAOQAYAcALAkQA8AJAoAqQAdAfANAqIAEAPIAAAAQA+AJApArQAdAfANAqQANArgJAqQgHAkgUAdIADAKQANArgJAqQgLA7gxApQgPAOgRAJIAHAOQAaA1gNA+QgNA+gtAmQguAmg/ACIgFAAQg9AAgtghg");
	var mask_8_graphics_53 = new cjs.Graphics().p("AitRaQgzglgRg6QgRg5AYg7QAGgOAHgNIgEgDQgwgjgRg9QgRg9AXg3QAQgoAjgcQAPgNAQgIQgMgUgHgWQgRg5AYg7QAHgSAKgPIgEgLIgDgOQgqgGglgaQgwgjgSg1QgngHgjgZQgzglgRg5QgRg5AYg6IACgFQgbgegMgnQgRg5AYg7QAYg7AzgeQAzgdA9AIIADgKQAYg7AzgeQA0geA+AJQATgYAbgPQAZgOAbgGQARgSAUgMQAagPAbgFQAEgUAIgVQAYg7AzgeIAUgKIgCgFQgRg5AYg7QAQgnAbgaQgUgbgKggQgRg5AYg7QAYg7AzgeQA0geA/AJQA/AJApArQAdAfANArQANArgJAqQgKA3gsAoQAUAaAKAiQANArgJAqQgLA6gxAqQgWATgYAKIACAGQANArgJAqQgLA6gxAqQgkAfgqAJIgCAKQgLA6gxAqQgkAfgrAJIgLAKQgwApg8ACQgQABgQgDQgIAKgLAJQgwApg8ACQgOABgOgCIgFAOQAYAcALAjQA8AKAoApQAdAfANArIAEAOIAAAAQA+AJApArQAdAfANArQANArgJAqQgHAjgUAeIADAKQANArgJAqQgLA6gxAqQgPANgRAJIAHAOQAaA2gNA+QgHAfgOAZQAOAKANANQAdAfANAqQANArgJAqQgLA7gxApQgvAqg8ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_8_graphics_41,x:203.9569,y:147.1028}).wait(1).to({graphics:mask_8_graphics_42,x:202.9569,y:159.1027}).wait(1).to({graphics:mask_8_graphics_43,x:197.9569,y:170.1027}).wait(1).to({graphics:mask_8_graphics_44,x:190.9569,y:177.6027}).wait(1).to({graphics:mask_8_graphics_45,x:186.4569,y:180.1028}).wait(1).to({graphics:mask_8_graphics_46,x:178.4569,y:183.1027}).wait(1).to({graphics:mask_8_graphics_47,x:168.9569,y:189.1028}).wait(1).to({graphics:mask_8_graphics_48,x:168.9569,y:198.6028}).wait(1).to({graphics:mask_8_graphics_49,x:168.9569,y:204.6028}).wait(1).to({graphics:mask_8_graphics_50,x:168.9569,y:211.6027}).wait(1).to({graphics:mask_8_graphics_51,x:168.9569,y:219.6028}).wait(1).to({graphics:mask_8_graphics_52,x:168.9569,y:232.0229}).wait(1).to({graphics:mask_8_graphics_53,x:168.9569,y:244.0778}).wait(59));

	// lady03
	this.instance_19 = new lib.CachedBmp_27();
	this.instance_19.setTransform(128,146.85,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_28();
	this.instance_20.setTransform(128,146.85,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_19,this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},40).to({state:[{t:this.instance_20}]},69).to({state:[]},1).wait(2));

	// pen2
	this.instance_21 = new lib.手握筆();
	this.instance_21.setTransform(236.95,448.95,1,1,0,0,0,111,74.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(27).to({_off:false},0).wait(1).to({x:256.95,y:465.95},0).wait(1).to({x:282.95,y:486.9},0).wait(1).to({x:292.95,y:455.9},0).wait(1).to({x:295.95,y:431.9},0).wait(1).to({y:406},0).wait(1).to({x:287.95,y:379},0).wait(1).to({x:269.85,y:366},0).wait(1).to({x:250.85,y:358.1},0).wait(1).to({x:218.85,y:346.8},0).wait(1).to({x:197.85,y:358.1},0).wait(1).to({x:180.35,y:367.1},0).wait(1).to({x:160.35,y:375.1},0).to({_off:true},1).wait(72));

	// 遮色片2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_27 = new cjs.Graphics().p("AhnCPQgzglgRg5QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANArQANAqgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgjg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AABDbQgyglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg4QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJAoArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfANApQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_9_graphics_29 = new cjs.Graphics().p("ACNE/QgzglgRg6QgQg4AXg6QgwApg7ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0gkQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA+AJApArQAdAfANAqQANArgJApQgCANgFAMQALgIALgHQA0gcA/AJQA/AIApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_9_graphics_30 = new cjs.Graphics().p("AA4E/QgzglgQg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0gkQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJAoArQAdAfANAqQANArgJApQgCANgFAMQALgIALgHQA0gcA/AJQARABAPAFQALgIAMgIQA0gdA/AJQA/AJApAqQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_31 = new cjs.Graphics().p("AAVE/QgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0gkQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAcAfANAqQANArgJApQgCANgFAMQALgIALgHQA0gcA/AJQARABAPAFQALgIAMgIIALgFQgPgXgIgbQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxAoQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_32 = new cjs.Graphics().p("AALGoQgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg4QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfAMApQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg4AYg7QAUgxAngdQghgggNgsQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJApQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_33 = new cjs.Graphics().p("AALIvQgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg6QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQAEAMACAMQAbgEAfAEQA/AJApArQAdAfAMAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngcQghgggNgsQgRg5AYg7QAPgjAYgaQgxgkgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgLA7gxApIgKAIIAEADQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_34 = new cjs.Graphics().p("AALKTQgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gcA/AJQA/AJApAqQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfAMAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg4AYg7QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgLA6gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_35 = new cjs.Graphics().p("AALK7QgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfAMAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg4AYg7QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQghgYgTgiQgbALgeABQg6ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQAzgdA/AJQA/AJApArQAQARALATQApgPAwAHQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJApQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_36 = new cjs.Graphics().p("AALMBQgyglgRg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfAMAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg5AYg6QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQghgYgTgiQgbALgeABQg6ACg0glQgzglgRg5QgGgVgBgWQgrAegzACQg7ACg0gkQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQAGAWABAVIAMgIQAzgdA/AJQA/AJApArQAQARALATQApgPAwAHQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANApQANArgJAqQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_37 = new cjs.Graphics().p("AAzMBQgzglgQg6QgQg4AXg6QgwApg8ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA/AJAoArQAdAfANAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg5AYg6QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQghgYgTgiQgbALgeABQg7ACgzglQgzglgRg5QgGgVgBgWQgrAegzACQg7ACg0gkIAAAAIgBAAQgwAqg8ACQg7ACg0gkQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAtAGAhAYQANgLAOgJQA0gdA/AJQA/AJApArQAdAfANAqQAGAWABAVIAMgIQAzgdA/AJQA/AJApArQAQARALATQApgPAwAHQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANApQANArgJAqQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_38 = new cjs.Graphics().p("ACDMBQgzglgRg6QgQg4AXg6QgwApg7ACQg7ACg0gkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANArQAEAMACAMQAbgEAfAEQA+AJApArQAdAfANAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg5AYg6QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQghgYgTgiQgbALgeABQg7ACg0glQgzglgQg5QgGgVgBgWQgrAegzACQg7ACg0gkIAAAAIgBAAQgwAqg8ACIgSAAQgOAUgUAQQgwAqg8ACQg7ACg0gkQgzglgRg6QgRg5AYg7QAYg7AzgeQAugaA3AEQAWgkAlgWQA0gdA/AJQAtAGAhAYQANgLAOgJQA0gdA/AJQA/AJAoArQAdAfANAqQAGAWABAVIAMgIQA0gdA/AJQA/AJApArQAQARALATQApgPAwAHQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANApQANArgJAqQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");
	var mask_9_graphics_39 = new cjs.Graphics().p("ADxMBQgzglgRg6QgQg4AXg6QgwApg8ACQg7ACgzgkQgzglgRg6QgEgMgBgMQgNADgNAAQg7ACg0glQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAcAfANArQAEAMACAMQAbgEAfAEQA/AJApArQAdAfANAqQANArgJAqQgCANgFAMQALgIALgHQA0gdA/AJQARACAPAFQALgJAMgIIALgFQgPgXgIgbQgRg5AYg7QAUgxAngdQghgggNgsQgRg5AYg6QAPgjAYgaQgxgkgRg5QgNgtAMgvQgKgGgLgHQghgYgTgiQgbALgeABQg7ACg0glQgzglgRg5QgGgVgBgWQgrAegzACQg6ACg0gkIAAAAIgBAAQgwAqg8ACIgSAAQgOAUgUAQQgwAqg8ACQgeABgdgJQgPAqgmAgQgwAqg8ACQg7ACg0gkQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQAPACANAEIACgHQAYg7AzgeQAugaA3AEQAWgkAlgWQA0gdA/AJQAtAGAhAYQANgLAOgJQA0gdA+AJQA/AJApArQAdAfANAqQAGAWABAVIAMgIQA0gdA/AJQA/AJApArQAQARALATQApgPAwAHQA/AJApArQAdAfANAqQANArgJAqIgBAIQAZANAUAVQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANApQANArgJAqQgLA7gxApIgKAIIAEAEQAdAfANAqQANArgJAqQgLA7gxApQgSAQgTAKQAPAWAIAbQANArgJAqQgLA7gxApQgwAqg8ACQgiABgggLQgvAmg5ACIgHAAQg3AAgxgig");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_9_graphics_27,x:254.9569,y:175.1027}).wait(1).to({graphics:mask_9_graphics_28,x:265.4569,y:182.6028}).wait(1).to({graphics:mask_9_graphics_29,x:279.4569,y:192.6028}).wait(1).to({graphics:mask_9_graphics_30,x:287.9569,y:192.6028}).wait(1).to({graphics:mask_9_graphics_31,x:291.4569,y:192.6028}).wait(1).to({graphics:mask_9_graphics_32,x:292.4569,y:182.1028}).wait(1).to({graphics:mask_9_graphics_33,x:292.4569,y:168.6028}).wait(1).to({graphics:mask_9_graphics_34,x:292.4569,y:158.6028}).wait(1).to({graphics:mask_9_graphics_35,x:292.4569,y:154.6028}).wait(1).to({graphics:mask_9_graphics_36,x:292.4569,y:147.6028}).wait(1).to({graphics:mask_9_graphics_37,x:288.4569,y:147.6028}).wait(1).to({graphics:mask_9_graphics_38,x:280.4569,y:147.6028}).wait(1).to({graphics:mask_9_graphics_39,x:269.4569,y:147.6028}).wait(73));

	// lady02
	this.instance_22 = new lib.CachedBmp_29();
	this.instance_22.setTransform(195.3,77.3,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_30();
	this.instance_23.setTransform(195.3,77.3,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_22,this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},42).to({state:[{t:this.instance_23}]},67).to({state:[]},1).wait(2));

	// pen1
	this.instance_24 = new lib.手握筆();
	this.instance_24.setTransform(54.3,464.1,1,1,0,0,0,111,74.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({x:44.3,y:441.1},0).wait(1).to({x:40.3,y:421.1},0).wait(1).to({x:42.3,y:394.1},0).wait(1).to({x:50.3,y:368.1},0).wait(1).to({x:76.3,y:358.2},0).wait(1).to({x:102.3},0).wait(1).to({x:131.3,y:366.2},0).wait(1).to({x:149.3,y:376.2},0).wait(1).to({x:167.75,y:401.2},0).wait(1).to({x:180.35,y:424.2},0).wait(1).to({x:192.35,y:441.2},0).wait(1).to({x:206.35,y:460.2},0).wait(1).to({x:217.35,y:473.2},0).wait(1).to({x:230.35,y:494.2},0).wait(1).to({x:252.35,y:520.2},0).wait(1).to({x:269.85,y:535.2},0).wait(1).to({x:286.85,y:551.2},0).wait(1).to({x:310.85,y:566.2},0).wait(1).to({x:313.85,y:569.2},0).wait(1).to({x:339.85},0).wait(1).to({x:342.85,y:540.2},0).wait(1).to({x:332.85,y:524.2},0).wait(1).to({x:320.85,y:510.2},0).wait(1).to({x:311.85,y:495.2},0).wait(1).to({x:292.85,y:474.2},0).to({_off:true},1).wait(86));

	// 遮色片1 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AhnCQQgzglgRg6QgRg4AYg7QAYg7AzgeQA0gdA+AJQA/AJApArQAdAfANAqQANArgJApQgLA7gxApQgwAqg8ACIgHAAQg2AAgxgig");
	var mask_10_graphics_1 = new cjs.Graphics().p("AghDvQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA+AJApArQAdAfANAqQAKAigDAhQA2AMAlAmQAdAeANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgwgig");
	var mask_10_graphics_2 = new cjs.Graphics().p("AgIFnQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg6QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJAoArQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAhgDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgwgig");
	var mask_10_graphics_3 = new cjs.Graphics().p("AABHuQgyglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg5QgRg5AYg7QAPgjAYgaQgxgkgRg5QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJAoArQAdAfANAqQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAaQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_4 = new cjs.Graphics().p("AABJwQgyglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg6QAPgjAYgaQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQA0gdA/AJQA+AJApArQAdAfANAqQANArgJAqQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANAqgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_5 = new cjs.Graphics().p("AABK7QgyglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AygeQA0gdA/AJQA/AJApArQAeAfAMArQANAqgJAqQgLA7gxApQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALALQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_6 = new cjs.Graphics().p("Ah7LZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAsAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng1AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfAMAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg7ACIgHAAQg3AAgxgig");
	var mask_10_graphics_7 = new cjs.Graphics().p("AkHLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtApgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgygkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfAMAqQANArgJAqQgLA7gwApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_8 = new cjs.Graphics().p("AlrLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA+AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg7ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_9 = new cjs.Graphics().p("AnPLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJAoArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgvAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_10 = new cjs.Graphics().p("AopLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQAzgdA/AJQA/AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQANArgJAqQgLA6gxApQgwAqg8ACQg7ACg0gkQgzglgRg5QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACgzgkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_11 = new cjs.Graphics().p("AplLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA+AJQA/AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANApQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg5QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg6ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_12 = new cjs.Graphics().p("AqrLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA+AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANApQAHAYABAXQA2AMAkAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg5QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgdAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_13 = new cjs.Graphics().p("ArYLZQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAnAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANApQAHAYABAXQA2AMAkAmQAdAfANAqQAEANABAMQAYAMATAUQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg5QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgMgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAlQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_14 = new cjs.Graphics().p("AMcLyQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgRg6QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzgkgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg6ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALALQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg5AYg7QAPgjAYgaQgxgjgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAsgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANApQAHAYABAXQA2AMAkAmQAdAfANAqQAEANABAMQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJATQA6AKAnApQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_15 = new cjs.Graphics().p("AOFN0QgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgRg6QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg5QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgyglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJApQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg6QgRg4AYg7QAPgjAYgaQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgSA0AHQA+AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAeANAqQAEANABAMQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJATQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_16 = new cjs.Graphics().p("APfPJQgzglgRg6QgGgUgBgVQg4ABgxgjQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgRg6QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgVQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg6ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAaQAOAKANANQAdAfANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzglgRg5QgRg5AYg7QAPgjAYgaQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgSA0AHQA/AJApArQAcAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEANABAMQAYALATAUQAdAfANAqQANArgJAqQgEAWgJATQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_17 = new cjs.Graphics().p("AQ0QAQgqgfgTgtQg6ACgzgkQgzglgRg6QgGgUgBgVQg4ABgxgjQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgRg6QgEgMgBgNIgRgKQgzglgRg6QgHgVAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgyglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAeANAqQAKAigDAhQA2AMAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg6QgRg5AYg7QAGgOAIgNIgDgCQgzgkgRg6QgRg5AYg7QAPgjAYgaQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANAOAJAPQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgSA0AHQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA+AJApArQAdAfANAqQANArgJAqIgBAIQAPAAAQACQA/AJApArQAdAfANAqQAIAbAAAaQApANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEANABAMQAYAMATAUQAdAfANApQANArgJAqQgEAWgJATQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgHAAQg3AAgxgig");
	var mask_10_graphics_18 = new cjs.Graphics().p("ASySBQg0gYgdg0Qgeg1AHg4IADgUIgIAAQg7ADg0glQgrgegTguQg6ACgygkQgzglgRg5QgGgVgBgUQg4AAgxgjQgzglgRg5QgRg5AYg7QAFgNAHgMQgYAIgaABQg7ADg0glQgzglgRg5QgRg5AYg7IAEgIQgmgHgjgZQgzglgRg5QgEgNgCgMIgQgKQgzglgRg5QgHgXAAgXQgigIgfgWQgzglgQg5QgIgaABgaQgXgIgWgQQgzglgRg5QgNgtAMgvQg7ADg0glQgzglgRg5QgMgpAJgqIgSABQg7ADg0glQgNgJgMgMQgeAOgiABQg7ADg0glQgegVgTgdIgMALQgwApg8ACQg7ADgzgkQgQAbgaAXQgtAmg2AFIgBAHQgLA6gxAqIgQANQAVAbALAjQANArgJAqQgKA0goAnQANAJALALQAdAfANArQANArgJAqQgGAggRAaQAOAKANANQAdAfANArQAKAigDAgQA2ALAlAmQAdAfANArQANArgJAqQgLA6gxAqQgwApg8ACQg7ADg0glQgzglgRg5QgKghAEghQgigHgggXQgzglgRg5QgRg4AYg7QAGgPAIgNIgDgCQgzglgRg5QgRg5AYg7QAOgkAZgZQgyglgQg4QgRg5AYg7QAVg1AsgeQgWgbgKgiQgRg5AYg7QAYg7AzgeQAigUAogCQADgUAIgUQAYg7AzgdQA0geA/AJQAtAHAiAYQAXgtArgZQA0geA/AJQA/AJApArQANAOAJAQQARgSAWgNQA0geA/AJQA+AJApArQAsgTA1AHQA/AJApArQAdAfANArQAMAqgIApQAYgCAaADQA/AJApArQAcAfANArQANArgJAqIgBAHQAPAAAQACQA/AJApArQAdAfANArQAIAagBAaQApAOAeAeQAdAfANArQAHAXAAAYQA2ALAlAmQAdAfANArQADAMACAMQAYANATATQAdAfANArQANArgJApQgEAVgJAUQA6AKAnAoQAdAfANArQANArgJAqQgGAegPAZQAmgMArAGQA/AJApArQAdAfANArQAGAVABAVQANAAAOACQA/AJApArQAXAZANAfQAOAAAQACQA/AJApArQAdAfANArQANArgJAqIgBAHQApgEArARQA3AXAeAxQAdAxgGA8QgFA8gmAqQgmArg7AMQgVAFgTAAQglAAghgPg");
	var mask_10_graphics_19 = new cjs.Graphics().p("ATCSPQgrgTgaghQgagWgSgfQgdg1AGg4IAEgUIgIAAQg8ADgzglQgrgfgTgtQg6ACgygkQg0glgRg5QgGgVgBgVQg4ABgwgjQg0glgRg5QgQg5AYg7QAFgOAGgLQgXAIgaABQg8ADgzglQg0glgRg5QgQg5AYg7IADgJQgmgHgigYQg0glgRg5QgEgNgBgLIgQgLQg0glgRg5QgGgXgBgXQghgIgfgWQgzglgRg5QgHgaAAgaQgXgJgVgPQg0glgRg5QgNguAMguQg7ACgzgkQg0glgRg5QgMgpAJgqIgRABQg8ADgzglQgOgKgLgLQgfAOghABQg8ADgzglQgfgWgSgdIgMAMQgxApg7ACQg7ADg0gkQgPAbgaAXQgtAmg2AFIgBAHQgMA6gwAqIgRAMQAWAcAKAjQANArgIAqQgLA0gnAnQAMAJALALQAeAfAMArQANArgIAqQgHAfgRAbQAPAKAMANQAeAfAMArQAKAhgDAhQA2ALAlAmQAeAfAMArQANArgIAqQgMA6gwAqQgxApg7ACQg8ADgzglQg0glgRg5QgJghADghQgigIgfgWQg0glgRg5QgQg4AYg7QAFgPAIgNIgCgCQg0glgRg5QgQg5AYg7QAOgkAZgZQgyglgRg4QgQg5AYg7QAVg2AsgdQgXgbgKgiQgQg5AYg7QAXg7A0geQAigUAngDQAEgTAIgUQAXg7A0gdQA0geA/AJQAtAGAhAYQAYgtArgYQAzgeA/AJQA/AJApArQANAOAKAQQARgTAWgMQAzgeA/AJQA/AJApArQAsgTA0AHQA/AJApArQAeAfAMArQANAqgIApQAYgDAZAEQA/AJApArQAdAfAMArQANArgIAqIgCAHQAPAAAQACQA/AJApArQAeAfAMArQAIAaAAAaQApANAdAfQAeAfAMArQAHAXABAYQA2ALAkAmQAeAfAMArQAEAMACAMQAXAMATAUQAeAfAMArQANArgIApQgFAVgJATQA6AKAnApQAeAfAMArQANArgIAqQgGAdgQAaQAmgMArAGQA/AJApArQAeAfAMArQAHAVABAVQANAAANACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAeAfAMArQANArgIAqIgCAGQAqgDAqARQAuATAcAkQASAPAPAVQAhAwABA2QAAA+gqA0QgqAzg8AMQgSADgRAAQgkAAgkgQg");
	var mask_10_graphics_20 = new cjs.Graphics().p("AUeSlQglgbgTgqQgZAPgdAFQg2ALg1gXQgqgTgbgiQgagVgRggQgeg0AHg5IADgUIgIABQg7ACg0gkQgrgfgTgtQg6ABgygjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAFgNAHgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgngHgigYQgzglgRg5QgEgMgCgNIgQgKQgzglgQg6QgHgWAAgXQgigIgfgWQgzglgRg6QgIgZABgaQgXgJgWgPQgzglgRg6QgOgtANguQg8ACgzgkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgOgKgLgLQgeAOgiABQg7ACg0gkQgegWgTgdIgMALQgwAqg8ACQg7ACgzgkQgQAcgaAWQgtAng2AEIgBAHQgLA7gxApIgQANQAVAbALAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgKggAEghQgjgIgfgWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAOgkAZgZQgygkgQg5QgRg5AYg7QAVg1AsgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAigTAogDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAXgtArgZQA0gdA/AJQA/AJApArQAMANAKAQQARgSAWgNQA0gdA/AJQA+AJApAqQAsgTA1AIQA/AJApArQAdAfANAqQAMArgIApQAYgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJAoArQAdAfANAqQAIAbgBAaQApANAeAfQAdAfANAqQAHAYAAAXQA2AMAlAmQAdAfANAqQADAMACANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgGAegPAaQAlgMAsAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAOAAAQACQA/AJApArQAdAfANAqQANArgJAqIgBAHQApgEArASQAtATAcAkQASAPAPAVQAKAOAHAOQAYgNAbgGQA6gNA5AcQA5AbAaA2QAaA1gNA+QgNA+guAmQguAmg/ACIgGAAQg8AAgtghg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AS+SlQglgbgSgqQgZAPgeAFQg2ALg1gXQgqgTgagiQgagVgSggQgeg0AHg5IAEgUIgJABQg7ACg0gkQgqgfgTgtQg6ABgzgjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgQg5QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAPgkAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANANAJAQQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgTA0AIQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJApArQAdAfANAqQAIAbAAAaQAoANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEAMABANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqIgBAHQAqgEAqASQAtATAcAkQATAPAOAVQAKAOAHAOQAYgNAbgGQAagGAaADQAEgTAHgUQAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACIgWgBIgCAJQgNA+guAmQguAmg/ACIgFAAQg9AAgtghg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AS+SlQglgbgSgqQgZAPgeAFQg2ALg1gXQgqgTgagiQgagVgSggQgeg0AHg5IAEgUIgJABQg7ACg0gkQgqgfgTgtQg6ABgzgjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgQg5QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAPgkAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANANAJAQQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgTA0AIQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJApArQAdAfANAqQAIAbAAAaQAoANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEAMABANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqIgBAHQAqgEAqASQAtATAcAkQATAPAOAVQAKAOAHAOQAYgNAbgGQAagGAaADQAEgTAHgUIAHgOQgQgXgIgbQgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQANArgJAqQgEAZgMAWQAOAWAIAaQANArgJAqQgLA7gxApQgwAqg8ACIgWgBIgCAJQgNA+guAmQguAmg/ACIgFAAQg9AAgtghg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AS+SlQglgbgSgqQgZAPgeAFQg2ALg1gXQgqgTgagiQgagVgSggQgeg0AHg5IAEgUIgJABQg7ACg0gkQgqgfgTgtQg6ABgzgjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgQg5QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAPgkAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANANAJAQQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgTA0AIQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJApArQAdAfANAqQAIAbAAAaQAoANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEAMABANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqIgBAHQAqgEAqASQAtATAcAkQATAPAOAVQAKAOAHAOQAYgNAbgGQAagGAaADQAEgTAHgUIAHgOQgQgXgIgbQgEgOgCgOQgdgIgbgTQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQAEAPACAOQAwANAiAjQAdAfANAqQANArgJAqQgEAZgMAWQAOAWAIAaQANArgJAqQgLA7gxApQgwAqg8ACIgWgBIgCAJQgNA+guAmQguAmg/ACIgFAAQg9AAgtghg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AS+SlQglgbgSgqQgZAPgeAFQg2ALg1gXQgqgTgagiQgagVgSggQgeg0AHg5IAEgUIgJABQg7ACg0gkQgqgfgTgtQg6ABgzgjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgQg5QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAPgkAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANANAJAQQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgTA0AIQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJApArQAdAfANAqQAIAbAAAaQAoANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEAMABANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqIgBAHQAqgEAqASQAtATAcAkQATAPAOAVQAKAOAHAOQAYgNAbgGQAagGAaADQAEgTAHgUIAHgOQgQgXgIgbQgEgOgCgOQgdgIgbgTQgzglgRg6IgDgKQgZgJgYgQQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqIADALQAsANAfAhQAdAfANAqQAEAPACAOQAwANAiAjQAdAfANAqQANArgJAqQgEAZgMAWQAOAWAIAaQANArgJAqQgLA7gxApQgwAqg8ACIgWgBIgCAJQgNA+guAmQguAmg/ACIgFAAQg9AAgtghg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AS+SlQglgbgSgqQgZAPgeAFQg2ALg1gXQgqgTgagiQgagVgSggQgeg0AHg5IAEgUIgJABQg7ACg0gkQgqgfgTgtQg6ABgzgjQgzglgRg6QgGgUgBgVQg4AAgxgiQgzglgRg6QgRg5AYg7QAGgNAGgLQgYAIgaABQg7ACg0gkQgzglgRg6QgRg5AYg7IAEgIQgmgHgjgYQgzglgQg5QgEgMgBgNIgRgKQgzglgRg6QgHgWAAgXQgigIgfgWQgzglgRg6QgHgZAAgaQgXgJgWgPQgzglgRg6QgNgtAMguQg7ACg0gkQgzglgRg6QgMgpAJgqIgSACQg7ACg0gkQgNgKgMgLQgeAOgiABQg7ACg0gkQgegWgSgdIgNALQgwAqg8ACQg7ACgzgkQgPAcgbAWQgsAng2AEIgCAHQgLA7gxApIgQANQAWAbAKAjQANArgJAqQgKA1goAmQANAJALAMQAdAfANAqQANArgJAqQgGAggRAbQAOAKANANQAdAfANAqQAKAigDAhQA2ALAlAmQAdAfANAqQANArgJAqQgLA7gxApQgwAqg8ACQg7ACg0gkQgzglgRg6QgJggADghQgigIgggWQgzglgRg5QgRg5AYg7QAGgPAIgMIgDgCQgzglgRg6QgRg5AYg7QAPgkAYgZQgxgkgRg5QgRg5AYg7QAWg1ArgdQgWgbgKgjQgRg5AYg7QAYg7AzgeQAjgTAngDQADgTAIgUQAYg7AzgeQA0gdA/AJQAtAGAiAYQAYgtAqgZQA0gdA/AJQA/AJApArQANANAJAQQARgSAWgNQA0gdA/AJQA/AJAoAqQAtgTA0AIQA/AJApArQAdAfANAqQANArgIApQAXgDAaAEQA/AJApArQAdAfANAqQANArgJAqIgBAIQAPgBAQADQA/AJApArQAdAfANAqQAIAbAAAaQAoANAdAfQAdAfANAqQAHAYABAXQA2AMAkAmQAdAfANAqQAEAMABANQAYAMATAUQAdAfANAqQANArgJAqQgEAWgJASQA6AKAnApQAdAfANAqQANArgJAqQgFAegQAaQAmgMArAGQA/AJApArQAdAfANAqQAGAWABAVQANAAAOACQA/AJApArQAXAYANAgQAPAAAPACQA/AJApArQAdAfANAqQANArgJAqIgBAHQAqgEAqASQAtATAcAkQATAPAOAVQAKAOAHAOQAYgNAbgGQAagGAaADQAEgTAHgUIAHgOQgQgXgIgbQgEgOgCgOQgdgIgbgTQgzglgRg6IgDgKQgZgJgYgQQgzglgRg6QgKgjAFgkQgzgCguggQgzglgRg6QgRg5AYg7QAYg7AzgeQA0gdA/AJQA/AJApArQAdAfANAqQALAlgFAkIASACQA/AJApArQAdAfANAqIADALQAsANAfAhQAdAfANAqQAEAPACAOQAwANAiAjQAdAfANAqQANArgJAqQgEAZgMAWQAOAWAIAaQANArgJAqQgLA7gxApQgwAqg8ACIgWgBIgCAJQgNA+guAmQguAmg/ACIgFAAQg9AAgtghg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:94.9569,y:212.1028}).wait(1).to({graphics:mask_10_graphics_1,x:87.9569,y:202.6028}).wait(1).to({graphics:mask_10_graphics_2,x:85.4569,y:190.6028}).wait(1).to({graphics:mask_10_graphics_3,x:84.4569,y:177.1028}).wait(1).to({graphics:mask_10_graphics_4,x:84.4569,y:164.1028}).wait(1).to({graphics:mask_10_graphics_5,x:84.4569,y:156.6028}).wait(1).to({graphics:mask_10_graphics_6,x:96.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_7,x:110.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_8,x:120.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_9,x:130.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_10,x:139.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_11,x:145.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_12,x:152.9569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_13,x:157.4569,y:153.6028}).wait(1).to({graphics:mask_10_graphics_14,x:163.9569,y:156.1028}).wait(1).to({graphics:mask_10_graphics_15,x:174.4569,y:169.1028}).wait(1).to({graphics:mask_10_graphics_16,x:183.4569,y:177.6028}).wait(1).to({graphics:mask_10_graphics_17,x:191.9569,y:183.1028}).wait(1).to({graphics:mask_10_graphics_18,x:201.3827,y:194.0649}).wait(1).to({graphics:mask_10_graphics_19,x:202.9392,y:195.5952}).wait(1).to({graphics:mask_10_graphics_20,x:215.3946,y:199.5229}).wait(1).to({graphics:mask_10_graphics_21,x:224.9569,y:199.5229}).wait(1).to({graphics:mask_10_graphics_22,x:224.9569,y:199.5229}).wait(1).to({graphics:mask_10_graphics_23,x:224.9569,y:199.5229}).wait(1).to({graphics:mask_10_graphics_24,x:224.9569,y:199.5229}).wait(1).to({graphics:mask_10_graphics_25,x:224.9569,y:199.5229}).wait(87));

	// lady01
	this.instance_25 = new lib.CachedBmp_31();
	this.instance_25.setTransform(69.35,88.6,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_32();
	this.instance_26.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_25,this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.instance_26}]},109).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(166.3,330.3,326.3,638.5);
// library properties:
lib.properties = {
	id: '7900799EE773A54EB3CCE4BA31AAD0BB',
	width: 474,
	height: 506,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/圖層1.png?1765955745168", id:"圖層1"},
		{src:"images/女孩_atlas_1.png?1765955745135", id:"女孩_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7900799EE773A54EB3CCE4BA31AAD0BB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;