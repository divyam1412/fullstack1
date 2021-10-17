function add(){
    var value=document.getElementById('count');
    value.innerHTML=value.innerHTML*1+1;
    document.getElementById('sub').disabled = false;
}
function sub(){
    var value=document.getElementById('count');
    if(value.innerHTML<=0){
        document.getElementById('sub').disabled = true;
        return;
    }
    value.innerHTML=value.innerHTML-1;
}