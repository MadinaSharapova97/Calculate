let str = ""
let type = ""

let displey = document.getElementById("displey")

function btn(n){
    str += n
    console.log(str);
    displey.textContent = str
}


function plus(t){
    type += t
    str += t
    displey.textContent = str
}

function result(){
   let arr = str.split(type)
   console.log(arr);
if(type === '+'){
    str = Number(arr[0]) + Number(arr[1])
}
if(type === '-'){
    str = Number(arr[0]) - Number(arr[1])
}
if(type === '*'){
    str = Number(arr[0]) * Number(arr[1])
}
if(type === '/'){
    str = Number(arr[0]) / Number(arr[1])
}
displey.textContent  = str
}
function reset(){
    str = ""
    type = ""
    displey.textContent = "0"
}
