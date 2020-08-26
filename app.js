let txtarea = document.getElementById("txtarea");
var play = document.getElementById("play");
let remove = document.getElementById("delete");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = txtarea.value;
//    localStorage.setItem("play",txtarea.value);
};

 remove.onclick = ()=>{
     result.innerHTML = "";
    //  txtarea.value = "";
 }

//  onload=()=>{
//     txtarea.value = localStorage.getItem("play");
//     result.innerHTML = txtarea.value;
//  }
 