let logoutBtn = document.getElementById("logout");
let toggleBtn = document.getElementById("custom_input");
let togglelabel = document.getElementById("toggle_btn_label")
let iframe = document.getElementById("iframe");

logoutBtn.addEventListener("click", logout);
toggleBtn.addEventListener("click", toggle);
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
    location.href = '/main.html';
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