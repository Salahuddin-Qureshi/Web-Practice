const btn = document.getElementById("btn")
const rmvbtn = document.getElementById("rmvbtn")
btn.onclick = function (){
    const value =  document.getElementById('txt').value;
    const div = document.createElement('div');
    div.className = "myListItem";
    div.innerText=value; 
    const taskarea = document.getElementById("taskarea");
    const deleteButton =   document.createElement('button')
    deleteButton.className="deletebtn"
    deleteButton.innerText = "Delete"
    deleteButton.onclick = function ()
    {
        div.remove();
    }
    div.appendChild(deleteButton) 
   taskarea.appendChild(div)

}