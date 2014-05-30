var work = 25*60;
var relax = 5*60;
var time = 24*60 + 50;
var isPaused = true;

function startTime(){
	var t = window.setInterval(function(){
		if(!isPaused && time<work){
			time++;
			document.getElementById("time").innerHTML = checkTime(time/60)+":"+checkTime(time%60);
		}
	}, 1000);
}

function checkTime(i){
	i = Math.floor(i);
	if(i<10) i = "0" + i;
	return i;
}

function changeButton(){
	element = document.getElementById("button");
	if(element.innerHTML==="Start") element.innerHTML = "Stop";
	else element.innerHTML = "Start";
}

function switchPaused(){
	isPaused = !isPaused;
}