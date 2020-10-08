
//inspiration: perlin noise by yasai: https://www.openprocessing.org/sketch/494102

var particles_a = [];
var particles_b = [];
var particles_c = [];
var particles_d = [];
var particles_e = [];
var particles_f = [];
var particles_g = [];

var nums =300;
var noiseScale = 270;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(219, 236, 245);
    for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width/5),random(0,height/5));
		particles_b[i] = new Particle(random(0, width/5),random(0,height/5));
		particles_c[i] = new Particle(random(0, width/5),random(0,height/5));
      particles_d[i] = new Particle(random(0, width/5),random(0,height/5));
      particles_e[i] = new Particle(random(0, width/5),random(0,height/5));
      particles_f[i] = new Particle(random(0, width/5),random(0,height/5));
      particles_g[i] = new Particle(random(0, width/5),random(0,height/5));
      
	}

}

function draw(){


	noStroke();
	smooth();
  
  
  for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,2);
		var alpha = map(i,0,nums,0,250);

		fill(67,163,167,65);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(0,70,138,54);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(0,158,209,81);
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
          
        fill(195,179,194,76);
		particles_e[i].move();
		particles_e[i].display(radius);
		particles_e[i].checkEdge();
    
        fill(0, 70, 117,alpha);
		particles_g[i].move();
		particles_g[i].display(radius);
		particles_g[i].checkEdge();
    
          
	}  
  
    if (mouseIsPressed === true) {
    background(13, 21, 115)
  for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,2);
		var alpha = map(i,0,nums,0,250);

      fill(255,255,255,alpha);
		particles_d[i].move();
		particles_d[i].display(radius);
		particles_d[i].checkEdge();
    
    fill(193,225,186,88);
		particles_f[i].move();
		particles_f[i].display(radius);
		particles_f[i].checkEdge();
    }
    }
  
  // for(var x = 0; x < nums/3; x++){
  // var radius = map(x,0,nums/3,1,2);
  //   var alpha = map(x,0,nums/3,0,250);
  //         fill(210,111,136,alpha);
  // particles_e[x].move();
  // particles_e[x].display(radius);
  // particles_e[x].checkEdge();
  // }
  
  
}


function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);

	this.speed = random(0.4)

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = mouseX;
			this.pos.y = mouseY;
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
  

}