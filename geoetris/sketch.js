// Defino variables globales
let size, pg;
let palette;
let fSize = 2000; // Default size

let palettename, partitions, background;

let noisy;

function setup() {
  size = (windowHeight<windowWidth)?windowHeight:windowWidth;
  createCanvas(size, size);
  pg = createGraphics(fSize,fSize)

  pixelDensity(2);
  pg.pixelDensity(2);
  noLoop();
  frameRate(30);

  // Elijo la paleta
  palette = randomFromArray(palettes);
  palettename = palette.name;
  palette = fxshuffle(palette.arr); // Mezclo la paleta
  pg.background(palette[0]); // background
  background = palette[0];
  palette.shift(); // Elimino el fondo


  noisy = fxrand()<0.1?false:true;
  if(noisy == true) {
    pg.push()
    let partitionsaux = fxrand();
    partitions = partitionsaux<0.5?8:partitionsaux<0.8?7:partitionsaux<0.95?6:9;
  	randomizeart(0,0,fSize,fSize,partitionsaux<0.5?8:partitionsaux<0.8?7:partitionsaux<0.95?6:9) // Esto lo debo guardar
  	pg.pop()
  } else {
    pg.push()
    let partitionsaux = fxrand();
    partitions = partitionsaux<0.5?8:partitionsaux<0.8?7:partitionsaux<0.95?6:9;
  	randomizeart2(0,0,fSize,fSize,partitionsaux<0.5?8:partitionsaux<0.8?7:partitionsaux<0.95?6:9) // Esto lo debo guardar
  	pg.pop()
  }




}

function randomizeart(_x,_y,_w,_h,_d){
	pg.push()
	pg.translate(_x,_y)

		pg.noStroke()
		pg.fill(randomFromArray(palette))
		let sp=fxrand()
    composition = fxrand();
    composition<0.7?pg.rect(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxrandom(0,0.5),_h*sp*fxrandom(0,0.5),10):
		pg.circle(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxrandom(0,0.5));

/*
      pg.noStroke()
  		pg.fill(randomFromArray(palette))
  		for(var i=0;i<fxrandom(50,100);i++){
  			pg.ellipse(_w/2+fxrandom(-_w,_w)*fxrandom(0,0.5),
  							_h/2+fxrandom(-_w,_w)*fxrandom(0,0.5),
  						 fxrandom(0, sqrt(_w)/5))
  		}
*/
      pg.noStroke()
  		pg.fill(randomFromArray(palette))
  		for(var i=0;i<fxrandom(50,100);i++){
  			pg.ellipse(_w+fxrandom(-_w,_w)*fxrandom(0,1),
  							_h+fxrandom(-_w,_w)*fxrandom(0,1),
  						 fxrandom(0, sqrt(_w)/3))
  		}



		pg.strokeWeight(4)
		let ratio = fxrandom(0.4,0.6)
		if (_d>0){
			if (fxrand()<0.5){
        randomizeart(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
        randomizeart(0,0,_w*ratio,_h,_d-1)
			}else  {
        randomizeart(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
				randomizeart(0,0,_w,_h*ratio,_d-1)

			}
		}

	pg.pop()
}

function randomizeart2(_x,_y,_w,_h,_d){
	pg.push()
	pg.translate(_x,_y)

		pg.noStroke()
		pg.fill(randomFromArray(palette))
		let sp=fxrand()
    composition = fxrand();
    composition<0.7?pg.rect(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxrandom(0,0.5),_h*sp*fxrandom(0,0.5),5):
		pg.circle(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxrandom(0,0.5));


/*      pg.noStroke()
  		pg.fill(randomFromArray(palette))
  		for(var i=0;i<fxrandom(50,100);i++){
  			pg.ellipse(_w/2+fxrandom(-_w,_w)*fxrandom(0,0.5),
  							_h/2+fxrandom(-_w,_w)*fxrandom(0,0.5),
  						 fxrandom(0, sqrt(_w)/5))
  		}
*/


		pg.strokeWeight(4)
		let ratio = fxrandom(0.4,0.6)
		if (_d>0){
			if (fxrand()<0.5){
        randomizeart2(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
        randomizeart2(0,0,_w*ratio,_h,_d-1)
			}else  {
        randomizeart2(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
				randomizeart2(0,0,_w,_h*ratio,_d-1)

			}
		}

	pg.pop()
}


function draw() {
  image(pg,0,0, width, height); // Salsa secreta

  window.$fxhashFeatures = {
    "Palette": palettename,
    "Partitions": partitions,
    "Background": background,
    "Noisy": noisy
  }
  print(window.$fxhashFeatures)

}

function keyPressed(){
  if (key == 'e') {
    save("geoetris.png");
  } else if (key == 's') {
    pixelDensity(5);
    sizeNew = 2000;
    let theScale = sizeNew/size;
    resizeCanvas(sizeNew,sizeNew);
    pg.scale(theScale)
    save("geoetris_highRes.png");
  }
}

function windowResized() {
  sizeNew = (windowHeight < windowWidth)? windowHeight:windowWidth;
  let theScale = sizeNew/size;
  resizeCanvas(sizeNew,sizeNew);
  pg.scale(theScale)
}

function randomFromArray(e) {
    return e[Math.floor(fxrand() * e.length)]
}

function fxshuffle(e) {
    for (var t, n, r = e.length; r;) n = floor(fxrand(1) * r--), t = e[r], e[r] = e[n], e[n] = t;
    return e
}

function fxrandom(e, t) {
    return Array.isArray(e) ? e[int(fxrand() * e.length)] : (void 0 === t && (t = e, e = 0), fxrand() * (t - e) + e)
}


const palettes = [
  {
    name: "dark1",
    arr: ["#222831", "#393E46", "#00ADB5", "#EEEEEE"]
},
 {
    name: "dark2",
    arr: ["#1B262C", "#0F4C75", "#3282B8", "#BBE1FA"]
},
 {
    name: "dark3",
    arr: ["#161616", "#346751", "#C84B31", "#ECDBBA"]
}, {
    name: "vrolik1",
    arr: ["#4ca787", "#183867", "#ea8857", "#442a37", "#ffb747"]
}, {
    name: "retro1",
    arr: ["#DDDDDD", "#222831", "#30475E", "#F05454"]
}, {
    name: "vrolik2",
    arr: ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"]
}, {
    name: "retro2",
    arr: ["#0A1931", "#185ADB", "#FFC947", "#EFEFEF"]
}, {
    name: "origami",
    arr: ["#01364f", "#84231e", "#247c86", "#e8674d", "#dfdbbe", "#fdf4b4"]
}, {
    name: "magma",
    arr: ["#F7FD04", "#F9B208", "#F98404", "#FC5404"]
}, {
    name: "jungle",
    arr: ["#4e6349", "#614128", "#171812", "#698144", "#917861"]
}, {
    name: "lava",
    arr: ["#f59907", "#a42300", "#482a22", "#050000", "#6b0800"]
}, {
    name: "tuscany",
    arr: ["#500342", "#023b59", "#f9efdd", "#deaa70", "#711308"]
}
];
