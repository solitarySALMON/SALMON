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

const others = document.querySelector('.others2');
const mine = document.querySelector('.mine2');

db.collection("comment2").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc) =>{
        let commentArray = doc.data().history;
        let num = 0;

        if(doc.id == localStorage.getItem("user")){
            commentArray.forEach((comment) => {
                console.log(comment)
                mine.innerHTML += `
                    <tr>
                        <td>${doc.id}: </td>
                        <td>&nbsp${comment}</td>
                        <td>
                            <button id="delete" onclick="delete_comment2(${num})">X</button>
                        </td>
                    </tr>
                `;
                num++;
            });
        }else{
            commentArray.forEach((comment) => {
                others.innerHTML += `
                <tr>
                    <td>${doc.id}: </td>
                    <td>&nbsp${comment}</td>
                </tr>
            `;
            });
        }

    })
})

function add_comment2(){
    var text = document.getElementById('comment-input');
    db.collection('user').get().then((querySnapshot1)=>{
        querySnapshot1.forEach((doc) => {
            let tbstatus = doc.data().tbState;
            if(doc.id == localStorage.getItem("user")){
                if(tbstatus == true){
                    db.collection("comment2").get().then((querySnapshot2) =>{
                        querySnapshot2.forEach((doc) =>{
                            let commentArray = doc.data().history;
                    
                            if(doc.id == localStorage.getItem("user")){
                                commentArray.push(text.value);
                                db.doc("comment2/"+localStorage.getItem("user")).update({
                                    history : commentArray
                                })
                            }
                        })
                    })
                    setTimeout(function(){ location.reload(); alert("댓글이 작성되었습니다."); }, 2000);
                }else{
                    alert("전맹 시각장애 체험을 완료하지 않았습니다.");
                }
            }
        })
    })
}

function delete_comment2(index){
    db.collection("comment2").get().then((querySnapshot) =>{
        querySnapshot.forEach((doc) =>{
            let commentArray = doc.data().history;
            if(doc.id == localStorage.getItem("user")){
                commentArray.splice(index,1);
                console.log(index);
                db.doc("comment2/"+localStorage.getItem("user")).update({
                    history : commentArray
                })
            }
        })
    })
    setTimeout(function(){ location.reload(); alert("댓글이 삭제되었습니다."); }, 2000);
}