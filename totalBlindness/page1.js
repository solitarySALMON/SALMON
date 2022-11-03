var check = $("input[type='checkbox']");
check.click(function(){
	$("p").toggle();
});


document.getElementById("btn").addEventListener("click", open_page2);

function open_page2() {
	open("page2.html", "_self");
}