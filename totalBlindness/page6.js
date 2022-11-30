const firebaseConfig = {
    apiKey: "AIzaSyBRTjtln7kyZwwvT5KuNgRRKtim4WxHu8g",
    authDomain: "sw-engeneering.firebaseapp.com",
    projectId: "sw-engeneering",
    databaseURL: "https://sw-engeneering-default-rtdb.firebaseio.com/",
    storageBucket: "sw-engeneering.appspot.com",
    messagingSenderId: "686866551967",
    appId: "1:686866551967:web:58b91dd0d822840e467eaa",
    measurementId: "G-10SHSMCNM8"
};
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

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

//updateStatisTotalBlindness
function check() {
	if (window.event.keyCode == 13) {
        let status = true;
        db.collection("user").get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                console.log(doc.id)
                if(doc.id == localStorage.getItem("user")){
                    db.doc("user/"+localStorage.getItem("user")).update({
                        tbState : status
                    })
                }
            })
        })
        setTimeout(function(){ open('page7.html', '_self') }, 2000);
    }
}

function play(event) {
    const myAudio1 = event.target.childNodes;
    console.log(myAudio1);
    myAudio1[1].play();
}

function play1(event) {
    const myAudio1 = document.getElementById("total");
    myAudio1.play();
}