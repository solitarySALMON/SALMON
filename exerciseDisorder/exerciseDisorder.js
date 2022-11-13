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

function try_page() {
    if(localStorage.getItem("user")===null){
        alert("체험을 위해서는 로그인이 필요합니다.");
    }else{
        location.href="./bookselect.html";
    }
}

function end_page() {
    let status = true;
    db.collection("user").get().then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            console.log(doc.id)
            if(doc.id == localStorage.getItem("user")){
                db.doc("user/"+localStorage.getItem("user")).update({
                    edState : status
                })
            }
        })
    })
    setTimeout(function(){ location.href="./bookFinish.html"; }, 2000);
}