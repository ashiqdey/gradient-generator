const express = require("express");
const app = express();
const fs = require('fs');


app.listen(4000,()=>console.log("starte don port 4000"));




app.get("/",(req,res)=>{

	//generate the SVG
	let svg = random_dp("AD");

	//write to file system
	fs.writeFileSync("ad.svg", svg);

	res.send(svg);
});





const dark = [
	"#0c005b",
	"#1b3b44",
	"#ff6767",
	"#5a33ff",
	"#6942e7",
	"#081260",
]

const light = [
	"#87c8c2",
	"#edea4b",
	"#6d7adf",
	"#b276f1",
	"#ff8bb4",
	"#8bffb1",
	"#bbff8b",
	"#e6ff8b",
	"#f9ff45",
	"#ffc045",
	"#45c0ff",
]



function random_dp(text=""){
	let random1 = getRandom(0,5);
	let random2 = getRandom(0,10);
	let random3 = getRandom(0,10);
	let scale = getRandom(0.8,1.8);

	let rotate1 = getRandom(-50,50);
	let rotate2 = getRandom(100,250);

	return `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80" style="border-radius:50%"> <rect fill="${dark[random1]}" width="80" height="80" rx="2"></rect> <path fill="${light[random2]}" filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z" transform="translate(0 0) rotate(${rotate1} 40 40) scale(${scale})"></path> <path fill="${light[random3]}" filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z" transform="translate(0 0) rotate(${rotate2} 40 40) scale(${scale})" style="mix-blend-mode: overlay;"></path> <defs> <filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur"></feGaussianBlur> </filter> </defs> <text transform="matrix(1 0 0 1 14.0005 53)" fill="#FFFFFF" font-family="'Arial'" font-size="38">${text}</text> </svg>`;
}

function getRandom(mn, mx){
    return Math.round(Math.random() * (mx - mn) + mn); 
}
