onoff();
document.getElementById("checkbox").addEventListener("click", onoff);
function onoff() {
    let btn = document.getElementById("checkbox");
    if(btn.checked==true) {
		//화면 밝아짐
        div = document.getElementById("blackbox");
        div.remove();
    }else {
		//화면 까맣게
        div = document.createElement("div");
        div.id = "blackbox";
		div.style.backgroundColor = 'black';
		div.style.position = 'absolute';
		div.style.height = '900px';
		div.style.width = '1200px';
        var para = document.getElementById("div2");
		para.insertBefore(div,para.firstChild)
    }
}

let iscolor = false;
let isdata = false;
let iswifi = false;

function check() {
	if (window.event.keyCode == 13) {
        console.log(iscolor);
        console.log(isdata);
        console.log(iswifi);
    	if(iscolor&&isdata&&iswifi) {
            open('page6.html', '_self')
        }
    }
}


function entercolor() {
	if (window.event.keyCode == 13) {
    	//hover 색깔 칠하기
        var box = document.getElementById("color");
        box.style.backgroundColor = "#ccc";
        iscolor = true;
    }
}

function enterdata() {
	if (window.event.keyCode == 13) {
        var box = document.getElementById("gb");
        box.style.backgroundColor = "#ccc";
        isdata = true;
    }
}

function enterwifi() {
	if (window.event.keyCode == 13) {
    	//hover 색깔 칠하기
        var box = document.getElementById("wifi");
        box.style.backgroundColor = "#ccc";
        iswifi = true;
    }
}

function back() {
	if (window.event.keyCode == 13) {
    	open('page5.html', '_self');
    }
}


function play(event) {
    const myAudio1 = event.target.childNodes;
    console.log(myAudio1);
    myAudio1[1].play();
}