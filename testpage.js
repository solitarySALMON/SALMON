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
let iframe2 = document.getElementById("iframe2");

let exerciseDisorder = document.getElementById("tab1");
let lowVision = document.getElementById("tab2");
let totalBlindness = document.getElementById("tab3");


loginBtn.addEventListener("click", function(){
    login(inputId.value, inputPw.value);
});
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

if(localStorage.getItem("user")!==null){
    user.innerText = localStorage.getItem("user")+" 님";
    beforeLogin.style.display = "none";
    afterLogin.style.display = "block";
}else{
    inputId.value = "";
    inputPw.value = "";
    beforeLogin.style.display = "block";
    afterLogin.style.display = "none";
}

var loginState = 0;

function login(id, pw){
    if(id === "" || pw === ""){
        alert("아이디, 비밀번호를 모두 입력해주세요");
    }// 아이디, 비밀번호 공백
    else{
        db.collection("user").get().then((querySnapshot) =>{
            var userName = "";
            queryArray = querySnapshot.docs
            for(let i=0; i<queryArray.length; i++){
                var loginState = 0;
                if(queryArray[i].data().id === id){
                    loginState += 1;
                    if(queryArray[i].data().pw === pw){
                        loginState += 1;
                        userName = queryArray[i].id;
                        localStorage.setItem("user", userName);
                        break;
                    }
                    else{
                        break;
                    }
                }
            }

            if(loginState === 1){
                alert("비밀번호가 틀렸습니다. 다시 확인해주세요.");
            }else if(loginState === 2){
                alert(userName+"님, 로그인 되었습니다.");
                user.innerText = userName+" 님";
                beforeLogin.style.display = "none";
                afterLogin.style.display = "block";
            }else{
                alert("존재하지 않는 아이디입니다. 다시 확인해주세요.");
            }
        })
    }
}

function logout(){
    db.collection("user").get().then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            if(localStorage.getItem("user") === doc.id){
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
            iframe2.src = "./commentPage/edcomment.html";
            togglelabel.style.display = 'none';
            break;
        case 1:
            toggleBtn.checked = false;
            iframe.src = "./lowVision/tutorial2.html";
            iframe2.src = "./commentPage/lvcomment.html";
            togglelabel.style.display = 'block';
            break;
        case 2:
            iframe.src = "./totalBlindness/cart.html"
            iframe2.src = "./commentPage/tbcomment.html";
            togglelabel.style.display = 'none';
            break;
        default:
            break;
    }
}


document.getElementById("join").addEventListener("click", display_register);

function display_register() {
    document.getElementById("register").style.display = "block";
}

document.getElementById("cancel").addEventListener("click", none_register);

function none_register() {
    document.getElementById("register").style.display = "none";
}


document.getElementById("submit").addEventListener("click", sign_up);

function sign_up() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    let pwcheck = document.getElementById("pwcheck").value;

    let idcheck = true;

    if(name=="") {
        alert("이름을 입력해주세요.");
        return;
    }
    if(id=="") {
        alert("아이디를 입력해주세요.");
        return;
    }
    if(pw=="") {
        alert("비밀번호를 입력해주세요.");
        return;
    }

    if(pw!=pwcheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }


    
    //아이디 중복확인
    db.collection("user").get().then((querySnapshot) =>{

        queryArray = querySnapshot.docs

        for(let i=0; i<queryArray.length; i++){
            console.log(queryArray[i].data().id);
            if(id==queryArray[i].data().id) {
                alert("이미 존재하는 아이디입니다.");
                idcheck = false;
                return;
            }
        }

    }).then(function() {
        if(idcheck) {
            set_firebase(id, pw, name);
        }
    });





}


function set_firebase(id, pw, name) {
    db.collection("user").doc(name).set({
        id: id,
        pw: pw,
        edState: false,
        lvState: false,
        tbState: false,
    })
    .then(function() {
        console.log("Document successfully written!");

        db.collection("comment").doc(name).set({
            history : [],
        })
        .then(function() {
            console.log("Document successfully written!");

            db.collection("comment1").doc(name).set({
                history : [],
            })
            .then(function() {
                console.log("Document successfully written!");

                db.collection("comment2").doc(name).set({
                    history : [],
                })
                .then(function() {
                    console.log("Document successfully written!");
                    alert("회원가입이 완료되었습니다.");
                    none_register();
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });


            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });


        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

