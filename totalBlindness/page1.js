var check = $("input[type='checkbox']");
check.click(function(){
	$("p").toggle();
});

function try_page() {
    if(localStorage.getItem("user")===null){
        alert("체험을 위해서는 로그인이 필요합니다.");
    }else{
        location.href="./page2.html";
    }
}