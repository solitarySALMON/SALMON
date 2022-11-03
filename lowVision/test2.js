let searchBtn = document.getElementById("searchBtn");
let categoryBtn = document.getElementById("categoryBtn");
let reviewBtn = document.getElementById("reviewBtn");

let searchAudio = document.getElementById("searchAudio");
let categoryAudio = document.getElementById("categoryAudio");
let reviewAudio = document.getElementById("reviewAudio");

searchBtn.addEventListener("keyup", function(e){
    if(e.key === 'Tab'){
        searchAudio.play();
    }
})

categoryBtn.addEventListener("keyup", function(e){
    if(e.key === 'Tab'){
        categoryAudio.play();
    }
})

reviewBtn.addEventListener("keyup", function(e){
    if(e.key === 'Tab'){
        reviewAudio.play();
    }
})