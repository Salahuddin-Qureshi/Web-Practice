const addbtn = document.getElementById("addbtn");
const changecolor = document.getElementById("changecolor");
let count = 0;
addbtn.onclick = function () {  
    let div = document.createElement('div');  // Create a <div>
    div.className = "innercontainer";
    const container = document.getElementById("container");
    if(count < 10){
        container.appendChild(div);                     // Append the <
        count++
    }
    else{
        alert("You cannot add more than 10 boxes");
    }
}
changecolor.onclick = function(){   
    const innerContainers = document.querySelectorAll(".innercontainer");
    innerContainers.forEach(container => {
        // Generate random RGB values for new color
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        // Apply new color to the container
        container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
}
