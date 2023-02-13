let W = 400;
let f = 0;
let mySpeed = 3;
let net = 300;
let radius = 200;
//加载音乐
function preload() {

}

//初始化
function setup() {
	createCanvas(900, 900);
	 mic = new p5.AudioIn();
	 mic.start();
}

function draw() {
	background(0, 44);
	stroke(W, 77);
	let cnt = 0;
	let posx = [];
	let posy = [];
	let a = [];
	let vol = mic.getLevel();
	console.log(vol);
	translate(300,300);
	strokeWeight(random(1,6));
	let radius = map(vol*8, 0, 1, 160, 50);

	for (let i = 0; i <= 2*PI;i=i+PI/8) {
		
		X = posx[cnt] = sin(i + noise(i - f * (mySpeed + 1)) + f) * W + 200;
		Y =  posy[cnt] = cos(i + noise(i + f * mySpeed) + f) * W + 200;
		cnt++;

		for (let j = 0; j < cnt; j++)
		{
			stroke(random(255), random(255), random(255));
			if (dist(X, Y, posx[j], posy[j]) < net) {
				line(X, Y, posx[j], posy[j]);
			}
		}
		X = posx[cnt] = sin(i + noise(i - f * (mySpeed + 1)) + f) * radius + 200;
		Y = posy[cnt] = cos(i + noise(i + f * mySpeed) + f) * radius + 200;
		cnt++;

		for ( let j = 0; j < cnt; j++)
		{
			stroke(random(255), random(255), random(255));
			if (dist(X, Y, posx[j], posy[j]) < net) {
				line(X, Y, posx[j], posy[j]);
			}
		}

	}


	// for (let j = 0; j <= TAU; j += PI / 8) {
	// 	a.push([X = sin(j + noise(j - f * (mySpeed + 1)) + f) * W + 200, Y = cos(j + noise(j + f * mySpeed) + f) * W + 200]);
	// 	a.push([X = sin(j + noise(j - f * (mySpeed + 1)) + f) * radius + 200, Y = cos(j + noise(j + f * mySpeed) + f) * radius + 200]);
	// 	a.forEach(Q => {
	// 		// console.log(Q)
	// 		if (dist(X, Y, A = Q[0], B = Q[1]) < net) {
	// 			stroke(random(255),random(255),random(255))
	// 			line(X, Y, A, B);
	// 		}
	// 	})
	// }
	f += 0.01;

}

function mousePressed(){
	console.log("vol");
	mic.start();
}
