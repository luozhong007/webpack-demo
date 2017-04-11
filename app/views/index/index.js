/**
 * User: luozhong
 * Date: 17/3/7
 * Time: 09:33
 * email:luozhong0521@163.com
 */

require("../../index.css");


let datas = {
    name:"t{姓名}",
    wai:"t{我是谁}",
    sex:"t{性别}",
};

let html = '';
for(let a in datas) {
    html += '<p>'+datas[a]+'</p>';
}

let name = "罗中";

// document.querySelector("#text").innerText = `我的名字是${name}`;
document.querySelector("#text").innerHTML = html;

let goDetail = document.getElementById("goDetail");
goDetail.onclick = ()=>{
    location.href = "./views/detail/detail.html";
};