window.onload = pageLoad;
function pageLoad(){
	let GetReady = document.getElementById("start")
	GetReady.onclick = startGame
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount, TIMER_TICK)
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second = second-1 //ลดเวลาที่ละ 1
		x.innerHTML = second
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		
		if(allbox.length == 0 && second != 0){
			alert("Victory!")
			clearInterval(timer)
		}
		else if(allbox.length != 0 && second == 0){
			alert("Defeat!! ไอ่กาก")
			clearInterval(timer)
			clearScreen()
		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value
	var gameLayer =  document.getElementById("game-layer")
	var colorDrop = document.getElementById("color").value
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div")
		tempbox.className = "square"
		tempbox.style.backgroundColor = colorDrop
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";		
		//add element to HTML node
		gameLayer.appendChild(tempbox) //พท ที่สามารถใส่กล่องได้ //เรียกในจาวามาใช้ใน html
		blindBox(tempbox);
	}
}

function blindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	var gameLayer =  document.getElementById("game-layer")
	box.onclick = function(){
		gameLayer.removeChild(box)		
	}
}

function clearScreen(){
	// ทำการลบ node กล่องทั้งหมดจะหาย ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div")
	var gameLayer = document.getElementById("game-layer")

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		gameLayer.removeChild(allbox[i])
	}
}






