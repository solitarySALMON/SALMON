let searchBtn = document.getElementById("searchBtn");
let categoryBtn = document.getElementById("categoryBtn");
let reviewBtn = document.getElementById("reviewBtn");
let int = document.getElementById("int");
let ext = document.getElementById("ext");

let harrypotter = document.getElementById("harrypotter");
let thor = document.getElementById("thor");
let spider = document.getElementById("spider");
let gobackhome = document.getElementById("gobackhome");
let welcome = document.getElementById("welcome");
let icanspeak = document.getElementById("icanspeak");


let searchAudio = document.getElementById("searchAudio");
let categoryAudio = document.getElementById("categoryAudio");
let reviewAudio = document.getElementById("reviewAudio");
let intAudio = document.getElementById("intAudio");
let extAudio = document.getElementById("extAudio");

let harrypotterAudio = document.getElementById("harrypotterAudio");
let thorAudio = document.getElementById("thorAudio");
let spiderAudio = document.getElementById("spiderAudio");
let gobackhomeAudio = document.getElementById("gobackhomeAudio");
let welcomeAudio = document.getElementById("welcomeAudio");
let icanspeakAudio = document.getElementById("icanspeakAudio");

parent.toggle();

let item = [searchBtn, categoryBtn, reviewBtn, ext, harrypotter, thor, spider, int, gobackhome, welcome, icanspeak]
let audio = [searchAudio, categoryAudio, reviewAudio, extAudio, harrypotterAudio, thorAudio, spiderAudio, intAudio, gobackhomeAudio, welcomeAudio, icanspeakAudio]

for(let i=0; i<item.length; i++){
    item[i].addEventListener("keyup", function(e){
        if(e.key === 'Tab'){
            audio[i].play();
        }
    })
}   

welcome.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        location.href="./testfinish.html";
    }
})