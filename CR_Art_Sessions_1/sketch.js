let size,pg,palette,palettename,partitions,noisy,bckcol,arttype,fsize=2000,iratio=0.8;function setup(){size=(windowHeight<windowWidth)?windowHeight:windowWidth;createCanvas(size*iratio,size);pg=createGraphics(fsize*iratio,fsize)
pg2=createGraphics(fsize*iratio,fsize)
pg3=createGraphics(fsize*iratio,fsize)
colorMode(RGB);pixelDensity(2);pg.pixelDensity(2);pg.blendMode(DIFFERENCE);pg2.pixelDensity(2);pg2.blendMode(DIFFERENCE);pg3.pixelDensity(2);pg3.blendMode(DIFFERENCE);palette=randomFromArray(palettes);palettename=palette.name;palette=fxShuffle(palette.arr);bckcol=palette[0];background(palette[0]);pg.background(palette[0]);pg2.background(palette[0]);pg3.background(palette[0]);palette.shift();noisy=fxrand()<0.1?false:!0;arttype=3;if(noisy==!0){pg.push()
let partitionsaux=fxrand();partitions=partitionsaux<0.5?12:partitionsaux<0.8?11:partitionsaux<0.95?9:10;randomizeart(0,0,fsize,fsize,partitionsaux<0.5?12:partitionsaux<0.8?11:partitionsaux<0.95?9:10);pg.pop()}else{pg.push()
let partitionsaux=fxrand();partitions=partitionsaux<0.5?12:partitionsaux<0.8?11:partitionsaux<0.95?9:10;randomizeart2(0,0,fsize,fsize,partitionsaux<0.5?12:partitionsaux<0.8?11:partitionsaux<0.95?9:10);pg.pop()}
pg2.push()
let partitionsaux=fxrand();partitions=partitionsaux<0.5?1:partitionsaux<0.8?2:partitionsaux<0.95?3:4;randomizeart3(0,0,fsize,fsize,partitionsaux<0.5?2:partitionsaux<0.8?3:partitionsaux<0.95?4:6);pg2.pop()
pg3.push()
partitionsaux=fxrand();partitions=partitionsaux<0.5?5:partitionsaux<0.8?6:partitionsaux<0.95?7:8;randomizeart4(0,0,fsize,fsize,partitionsaux<0.5?5:partitionsaux<0.8?6:partitionsaux<0.95?7:8);pg3.pop()
noLoop()}
function randomizeart(_x,_y,_w,_h,_d){pg.push()
pg.translate(_x,_y)
pg.noStroke()
pg.fill(randomFromArray(palette))
let sp=fxrand()
composition=fxrand();composition<0.7?pg.rect(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxRandom(0,0.5),_h*sp*fxRandom(0,0.5)):pg.circle(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxRandom(0,0.5));pg.noStroke()
pg.fill(randomFromArray(palette))
for(var i=0;i<fxRandom(50,100);i++){pg.ellipse(_w+fxRandom(-_w,_w)*fxRandom(0,1),_h+fxRandom(-_w,_w)*fxRandom(0,1),fxRandom(0,sqrt(_w)/3))}
pg.strokeWeight(4)
let ratio=fxRandom(0.4,0.6)
if(_d>0){if(fxrand()<0.5){randomizeart(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
randomizeart(0,0,_w*ratio,_h,_d-1)}else{randomizeart(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
randomizeart(0,0,_w,_h*ratio,_d-1)}}
pg.pop()}
function randomizeart2(_x,_y,_w,_h,_d){pg.push()
pg.translate(_x,_y)
pg.noStroke()
pg.fill(randomFromArray(palette))
let sp=fxrand()
composition=fxrand();composition<0.7?pg.rect(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxRandom(0,0.5),_h*sp*fxRandom(0,0.5)):pg.circle(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxRandom(0,0.5));pg.strokeWeight(4)
let ratio=fxRandom(0.4,0.6)
if(_d>0){if(fxrand()<0.5){randomizeart2(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
randomizeart2(0,0,_w*ratio,_h,_d-1)}else{randomizeart2(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
randomizeart2(0,0,_w,_h*ratio,_d-1)}}
pg.pop()}
function randomizeart3(_x,_y,_w,_h,_d){pg2.push()
pg2.translate(_x,_y)
pg2.noStroke()
pg2.fill(randomFromArray(palette))
let sp=fxrand()
pg2.noStroke()
pg2.fill(randomFromArray(palette))
for(var i=0;i<fxRandom(50,100);i++){pg2.ellipse(_w+fxRandom(-_w,_w)*fxRandom(0,1),_h+fxRandom(-_w,_w)*fxRandom(0,1),fxRandom(0,sqrt(_w)/3))}
let aux1=fxrand()<0.5?-1:1;let aux2=fxrand()<0.5?-1:1;pg2.rect(_w*aux1*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp,_h*sp);pg2.circle(_w*(1-sp)/1.5,_h*(1-sp)/1.5,_w*sp*fxRandom(0.2,0.8));pg2.strokeWeight(4)
let ratio=fxRandom(0.4,0.6)
if(_d>0){if(fxrand()<0.5){randomizeart3(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
randomizeart3(0,0,_w*ratio,_h,_d-1)}else{randomizeart3(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
randomizeart3(0,0,_w,_h*ratio,_d-1)}}
pg2.pop()}
function randomizeart4(_x,_y,_w,_h,_d){pg3.push()
pg3.translate(_x,_y)
pg3.noStroke()
pg3.fill(randomFromArray(palette))
for(var i=0;i<fxRandom(200,400);i++){pg3.ellipse(_w+fxRandom(-_w,_w)*fxRandom(0,1),_h+fxRandom(-_w,_w)*fxRandom(0,1),fxRandom(0,sqrt(_w)/3))}
pg3.strokeWeight(5);pg3.stroke(randomFromArray(palette));pg3.fill(randomFromArray(palette));let sp=fxrand();pg3.noFill();composition=fxrand();if(composition<0.7){for(let i=0;i<3;i++){pg3.rect(_w*(1-sp)/2.5+i,_h*(1-sp)/2.5+i,_w*sp*fxRandom(0,0.5),_h*sp*fxRandom(0,0.5))}}else{for(let i=0;i<3;i++){pg3.circle(_w*(1-sp)/2.5+i,_h*(1-sp)/2.5+i,_w*sp*fxRandom(0.2,0.8))}}
pg3.strokeWeight(4)
let ratio=fxRandom(0.4,0.6)
if(_d>0){if(fxrand()<0.5){randomizeart4(0+_w*ratio,0,_w*(1-ratio),_h,_d-1)
randomizeart4(0,0,_w*ratio,_h,_d-1)}else{randomizeart4(0,0+_h*ratio,_w,_h*(1-ratio),_d-1)
randomizeart4(0,0,_w,_h*ratio,_d-1)}}
pg3.pop()}
function draw(){if(arttype==1){image(pg,0,0,width,height)}else if(arttype==2){image(pg2,0,0,width,height)}else if(arttype==3){image(pg3,0,0,width,height)}
fxpreview()}
function keyPressed(){if(key=='e'){save("CR_Art_Sessions_1_"+arttype+"_lowres.png")}else if(key=='s'){pixelDensity(6);sizeNew=2000;let theScale=sizeNew/size;resizeCanvas(sizeNew*iratio,sizeNew);if(arttype==1){pg.scale(theScale)
pg.save("CR_Art_Sessions_1_"+arttype+"_highres.png")}else if(arttype==2){pg2.scale(theScale)
pg2.save("CR_Art_Sessions_1_"+arttype+"_highres.png")}else if(arttype==3){pg3.scale(theScale)
pg3.save("CR_Art_Sessions_1_"+arttype+"_highres.png")}}else if(key=="1"){arttype=1;draw()}else if(key=="2"){arttype=2;draw()}else if(key=="3"){arttype=3;draw()}}
function windowResized(){sizeNew=(windowHeight<windowWidth)?windowHeight:windowWidth;let theScale=sizeNew/size;resizeCanvas(sizeNew*iratio,sizeNew);pg.scale(theScale)}
function randomFromArray(e){return e[Math.floor(fxrand()*e.length)]}
function fxShuffle(e){for(var t,n,r=e.length;r;)n=floor(fxrand(1)*r--),t=e[r],e[r]=e[n],e[n]=t;return e}
function fxRandom(e,t){return Array.isArray(e)?e[int(fxrand()*e.length)]:(void 0===t&&(t=e,e=0),fxrand()*(t-e)+e)}
const palettes=[{name:"origami",arr:[[1,54,79],[132,35,30],[36,124,134],[232,103,77],[223,219,190],[253,244,180]]},{name:"tuscany",arr:[[80,3,66],[2,59,89],[249,239,221],[222,170,112],[113,19,8]]},{name:"dark3",arr:[[22,22,22],[52,103,81],[200,75,49],[236,219,186]]},{name:"dark1",arr:[[34,40,49],[57,62,70],[0,172,180],[239,239,238]]},{name:"dark2",arr:[[27,38,44],[15,76,117],[50,130,184],[187,225,250]]},{name:"vrolik1",arr:[[76,167,135],[24,56,103],[234,136,87],[68,42,55],[255,183,71]]},{name:"retro1",arr:[[221,221,221],[34,40,49],[48,71,94],[240,84,84]]},{name:"vrolik2",arr:[[119,79,56],[224,142,121],[241,212,175],[236,229,206],[197,224,220]]},{name:"retro2",arr:[[10,25,49],[24,90,219],[255,201,71],[239,239,239]]}];
