let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
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
    alert("로그인 되었습니다.");
    beforeLogin.style.display = "none";
    afterLogin.style.display = "block";
}

function logout(){
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