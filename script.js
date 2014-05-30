var work = 6;
var relax = 3;
var time = 0;
var working = true;
var isPaused = true;

function startTime(){
	var t = window.setInterval(function(){
		if(working && !isPaused){
			if(time < work) incrementTime();
			else{ time = 0; working = false; }
		}
		else if(!isPaused){
			if(time < relax) incrementTime();
			else{ time = 0; working = true; }
		}
	}, 1000);
}

function incrementTime(){
	time++;
	document.getElementById("time").innerHTML = checkTime(time/60)+":"+checkTime(time%60);
}

function checkTime(i){
	i = Math.floor(i);
	if(i<10) i = "0" + i;
	return i;
}

function changeButton(){
	isPaused = !isPaused;
	element = document.getElementById("button");
	if(element.innerHTML==="Start") element.innerHTML = "Stop";
	else element.innerHTML = "Start";
}