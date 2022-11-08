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

function enterkey() {
	if (window.event.keyCode == 13) {
    	open('page3.html', '_self')
    }
}

function back() {
	if (window.event.keyCode == 13) {
    	open('page2.html', '_self')
    }
}



function play(event) {
    const myAudio1 = event.target.childNodes;
    myAudio1[1].play();
}