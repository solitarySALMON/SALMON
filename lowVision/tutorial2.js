function try_page() {
    if(localStorage.getItem("user")===null){
        alert("체험을 위해서는 로그인이 필요합니다.");
    }else{
        location.href="./test2.html";
        window.parent.document.getElementById("custom_input").checked = true
    }
}