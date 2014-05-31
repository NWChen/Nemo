var time = 60;
var working = true;
var isPaused = true;

function startTime(){
	var sound = new Audio("sound.wav");
	var t = window.setInterval(function(){
		var work = (60*ascertainZero(document.getElementById("workminutes").value)) + ascertainZero(document.getElementById("workseconds").value);
		console.log(work);
		var relax = (60*ascertainZero(document.getElementById("relaxminutes").value)) + ascertainZero(document.getElementById("relaxseconds").value);
		if(working && !isPaused){
			if(time <= work){ incrementTime(); document.getElementById("time").style.color = "#f5f5f5"; }
			else{ sound.play(); time = 0; working = false; document.getElementById("time").style.color = "#c0392b"; document.getElementById("status").innerHTML = "relaxing!"; }
		}
		else if(!isPaused){
			if(time <= relax){ incrementTime(); document.getElementById("time").style.color = "#f5f5f5"; }
			else{ sound.play(); time = 0; working = true; document.getElementById("time").style.color = "#c0392b"; document.getElementById("status").innerHTML = "working!"; }
		}
	}, 1000);
}

function ascertainZero(i){
	if(i==="0" || i==="00" || i==="000") return 0;
	else return i;
}

function incrementTime(){
	document.getElementById("time").innerHTML = checkTime(time/60)+":"+checkTime(time%60);
	time++;
}

function checkTime(i){
	i = Math.floor(i);
	if(i<10) i = "0" + i;
	return i;
}

function changeButton(){
	isPaused = !isPaused;
	element = document.getElementById("button");
	if(element.innerHTML==="START") element.innerHTML = "STOP";
	else element.innerHTML = "START";
}