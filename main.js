let loginBtn = document.getElementById("login");
let joinBtn = document.getElementById("join");

loginBtn.addEventListener("click", login);

function login(){
    alert("로그인 되었습니다.");
    location.href = './testpage.html';
}