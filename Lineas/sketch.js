let positions = []; // Store positions
let cs = 1000; // Canvas size
let pt, lamount, lamountlabel, pv, ext, size, borderw, lt, ltl, bg, scap, scapl;

let f = true;

function setup() {
  csw = cs*0.82;
  csh = cs;
  createCanvas(csw, csh);
  pixelDensity(2);

  pt = rfa(palettes);

  bg = pt.arr[round(fxr(0,pt.arr.length-1))];



  rn = fxrand();
  borderw=rn<0.5?5:rn<0.90?10:20;

  rn = fxrand();
  size=rn<0.25?1:rn<0.6?2:5;

  rn = fxrand();
  ext=rn<0.33?0.05:rn<0.5?0.15:0.1;

  rn = fxrand();
  pv = rn;
  if(pv < 0.1) {
    pv = 0;
  } else if(pv > 0.8) {
    pv = 1;
  }

  rn = fxrand();
  lt=rn;

if(lt < 0.4) {
  ltl = "type1";
} else if(lt < 0.6) {
  ltl = "type2";
} else if(lt < 0.75) {
  ltl = "type3";
} else if(lt < 0.83) {
  ltl = "type4";
} else if(lt < 0.9) {
  ltl = "type5";
} else {
  ltl = "type6";
}

  rn = fxrand();
  lamount=rn<0.05?fxr(2000,3000):rn<0.2?fxr(1200,1500):rn<0.4?fxr(600,800):(350,400);
  lamountlabel=rn<0.05?"extreme":rn<0.2?"high":rn<0.4?"medium":"low";

  for(let i = 0; i < lamount; i++) {
    x = 0.75 * fxrand() + 0.12;
    y = 0.75 * fxrand() + 0.12;
    o = ext * (1 - sqrt(fxrand()));
    c = pt.arr[round(fxr(0,pt.arr.length-1))];
    if(fxrand() > pv) {
      positions[i] = [x-o, x+o,y,y,c]
    } else {
      positions[i] = [x, x,y-o,y+o,c]
    }
  }

  strokeWeight(size);

  rn = fxrand();
  scap = rn<0.08?strokeCap(ROUND):rn<0.35?strokeCap(PROJECT):strokeCap(SQUARE);
  scapl = rn<0.08?"ROUND":rn<0.35?"PROJECT":"SQUARE";

  window.$fxhashFeatures = {
    "Stroke weight": size,
    "Stroke cap": scapl,
    "Border width": borderw,
    "Palette": pt.name,
    "Background": bg,
    "Line type": ltl,
    "Lineas": lamount
  }
  print(window.$fxhashFeatures);


  noLoop();
}

function draw() {

background(bg);
if(ltl == "type1") {
  drawingContext.setLineDash([]);
} else if(ltl == "type2") {
  drawingContext.setLineDash([8, 1, 1]);  // Equals [12, 3, 3, 12, 3, 3
} else if(ltl == "type3") {
  drawingContext.setLineDash([12, 2, 2, 2]);
} else if(ltl == "type4") {
  drawingContext.setLineDash([18, 4, 4, 3, 3, 3, 3, 3]);
} else if(ltl == "type5") {
  drawingContext.setLineDash([2, 2]);
} else {
  drawingContext.setLineDash([1, 1]);
}

  for (let i = 0; i < positions.length; i++) {
    let x = map(positions[i][0], 0, 1, 0, csw);
    let y = map(positions[i][2], 0, 1, 0, csh);
    let x_end = map(positions[i][1], 0, 1, 0, csw);
    let y_end = map(positions[i][3], 0, 1, 0, csh);
    let c = color(positions[i][4]);
    c.setAlpha(pt.alfa);
    stroke(c);
    line(x, y, x_end, y_end);
  }

  if(f == true) {
    rectMode(CORNERS);
    noStroke();
    fill(pt.fColor);
    rect(0, 0, width, borderw);
    rect(0, height-borderw, width, height);
    rect(0, 0, borderw, height);
    rect(width-borderw, 0, width, height);
  }

}

function rfa(_e) {
    return _e[Math.floor(fxrand() * _e.length)]
}

function fxr(_e, _t) {
    return Array.isArray(_e) ? _e[int(fxrand() * _e.length)] : (void 0 === _t && (_t = _e, _e = 0), fxrand() * (_t - _e) + _e)
}

const palettes = [
// Extracted from https://www.colourlovers.com/
// Credit to their authors

  {
    name: "claire de lune",
    fColor: "#EAE8EB",
    arr: ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE"],
    alfa: 180
  },
  {
      name: "curiosity killed",
      fColor: "#EAE8EB",
      arr: ["#EFFFCD", "#DCE9BE", "#555152", "#2E2633", "#99173C"],
      alfa: 180
    },
  {
      name: "coup de grâce",
      fColor: "#EAE8EB",
      arr: ["#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#2A363B"],
      alfa: 180
    },
    {
      name: "I demand a pancake",
      fColor: "#EAE8EB",
      arr: ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2"],
      alfa: 180
    },
  {
      name: "cheer up emo kid",
      fColor: "#EAE8EB",
      arr: ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58"],
      alfa: 180
    },
    {
        name: "let them eat cake",
        fColor: "#EAE8EB",
        arr: ["#774F38", "#E08E79", "#F1D4AF", "#ECE5CE", "#C5E0DC"],
        alfa: 180
      },
  {
      name: "dance to forget",
      fColor: "#EAE8EB",
      arr: ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4"],
      alfa: 180
    },
  {
    name: "thought provoking",
    fColor: "#EAE8EB",
    arr: ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A"],
    alfa: 200
  },
  {
    name: "terra",
    fColor: "#EAE8EB",
    arr: ["#E8DDCB", "#CDB380", "#036564", "#033649", "#031634"],
    alfa: 180
  },
  {
    name: "w o r d l e s s",
    fColor: "#EAE8EB",
    arr: ["#FFFFFF", "#CBE86B", "#F2E9E1", "#1C140D", "#CBE86B"],
    alfa: 180
  },
  {
      name: "ocean five",
      fColor: "#EAE8EB",
      arr: ["#00A0B0", "#CC333F", "#EB6841", "#EDC951"],
      alfa: 150
  }

];

function keyPressed() {
  if(key == "e") {
    save("Lineas_"+fxhash+".png")
  } else if(key == "h") {
    pixelDensity(4);
    draw();
    save("Lineas_4K_"+fxhash+".png");
  }
}
