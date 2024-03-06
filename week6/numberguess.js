const btn = document.getElementById("btn");
btn.onclick = function() {
    const num = document.getElementById("num");
    let checkNum = Number(num.value);
    const text = document.getElementById("text");   
    if(checkNum < 500){
        text.innerText = "Too Low! Insert the higher Number";
    }
    else if (checkNum > 500) {
        text.innerText = "Too High! Insert the lower Number";
    }
    else{
        text.innerText = "Correct! You inserted: "+checkNum;
        btn.disabled = true;
    } 
}