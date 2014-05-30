var time = 0;
var working = true;
var isPaused = true;

function startTime(){
	var t = window.setInterval(function(){
		var work = (60*ascertainZero(document.getElementById("workminutes").value)) + ascertainZero(document.getElementById("workseconds").value);
		console.log(work);
		var relax = (60*ascertainZero(document.getElementById("relaxminutes").value)) + ascertainZero(document.getElementById("relaxseconds").value);
		if(working && !isPaused){
			if(time <= work) incrementTime();
			else{ time = 0; working = false; }
		}
		else if(!isPaused){
			if(time <= relax) incrementTime();
			else{ time = 0; working = true; }
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
	if(element.innerHTML==="Start") element.innerHTML = "Stop";
	else element.innerHTML = "Start";
}