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

//updateStatusLowVision
welcome.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        let status = true;
        db.collection("user").get().then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                console.log(doc.id)
                if(doc.id == localStorage.getItem("user")){
                    db.doc("user/"+localStorage.getItem("user")).update({
                        lvState : status
                    })
                }
            })
        })
        setTimeout(function(){ location.href="./testfinish.html"; }, 2000);
    }
})