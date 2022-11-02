let logoutBtn = document.getElementById("logout");
let toggleBtn = document.getElementById("custom_input");
let togglelabel = document.getElementById("toggle_btn_label")
let iframe = document.getElementById("iframe");

let exerciseDisorder = document.getElementById("tab1");
let lowVision = document.getElementById("tab2");
let totalBlindness = document.getElementById("tab3");

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

function logout(){
    alert("로그아웃 되었습니다.");
    location.href = './main.html';
}

function toggle(){
    if (toggleBtn.checked ===true){
        console.log("선택");
        iframe.setAttribute("style", "-webkit-filter:blur(12px)");
    }else{
        console.log("해제");
        iframe.setAttribute("style", "-webkit-filter:blur(0px)");
    }
}

function changeIframe(pagenum){
    switch(pagenum){
        case 0:
            iframe.src = "./exerciseDisorder/tutorial.html";
            break;
        case 1:
            iframe.src = "./lowVision/test2.html";
            break;
        case 2:
            iframe.src = "./totalBlindness/cart.html"
            break;
        default:
            break;
    }
}