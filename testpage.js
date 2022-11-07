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


let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let inputId = document.getElementById("inputId");
let inputPw = document.getElementById("inputPw");
let user = document.getElementById("user");

let toggleBtn = document.getElementById("custom_input");
let togglelabel = document.getElementById("toggle_btn_label")
let beforeLogin = document.getElementById("beforeLogin");
let afterLogin = document.getElementById("afterLogin");

let iframe = document.getElementById("iframe");

let exerciseDisorder = document.getElementById("tab1");
let lowVision = document.getElementById("tab2");
let totalBlindness = document.getElementById("tab3");


loginBtn.addEventListener("click", login)
logoutBtn.addEventListener("click", logout);
toggleBtn.addEventListener("click", toggle);


exerciseDisorder.addEventListener("click", function(){changeIframe(0)});
lowVision.addEventListener("click", function(){changeIframe(1)});
totalBlindness.addEventListener("click", function(){changeIframe(2)});

togglelabel.addEventListener("keydown", function(e){
    if(e.key === 'Enter'){
        console.log('enter');
        if(toggleBtn.checked === true){
            toggleBtn.checked = false;
            toggle();
        }else{
            toggleBtn.checked = true;
            toggle();
        }
    }
});

function login(){
    if(inputId.value === "" || inputPw.value === ""){
        alert("아이디, 비밀번호를 모두 입력해주세요");
    }// 아이디, 비밀번호 공백
    else{
        db.collection("user").get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                if(inputId.value !== doc.data().id){
                    alert("해당 아이디가 존재하지 않습니다. 다시 시도해주세요.");
                }// 아이디 불일치
                else if(inputId.value === doc.data().id && inputPw.value !== doc.data().pw){
                    alert("비밀번호가 다릅니다. 비밀번호를 확인해주세요.");
                }// 비밀번호 불일치
                else{
                    db.doc("user/"+doc.id).update({
                        loginState : true
                    })
                    user.innerText = doc.id+" 님";
                    localStorage.setItem("user", doc.id);
                    alert(doc.id+"님, 로그인 되었습니다.");
                    beforeLogin.style.display = "none";
                    afterLogin.style.display = "block";
                }// 로그인 성공
            })
        })
    }
}

function logout(){
    db.collection("user").get().then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            if(localStorage.getItem("user") === doc.id){
                db.doc("user/"+doc.id).update({
                    loginState : false
                })
                localStorage.clear();
            }
        })
    })
    inputId.value = "";
    inputPw.value = "";

    alert("로그아웃 되었습니다.");
    beforeLogin.style.display = "block";
    afterLogin.style.display = "none";
}

function toggle(){
    if (toggleBtn.checked ===true){
        console.log("선택");
        document.getElementById('iframe').contentWindow
        .document.getElementById("body").setAttribute("style", "-webkit-filter:blur(12px)");
    }else{
        console.log("해제");
        document.getElementById('iframe').contentWindow
        .document.getElementById("body").setAttribute("style", "-webkit-filter:blur(0px)");
    }
}

function changeIframe(pagenum){
    switch(pagenum){
        case 0:
            iframe.src = "./exerciseDisorder/tutorial.html";
            togglelabel.style.display = 'none';
            break;
        case 1:
            iframe.src = "./lowVision/tutorial2.html";
            togglelabel.style.display = 'block';
            break;
        case 2:
            iframe.src = "./totalBlindness/cart.html"
            togglelabel.style.display = 'block';
            break;
        default:
            break;
    }
}