const btn = document.getElementById("insertbox");

btn.onclick = function () {
    const div = document.createElement('div');
    div.className = "ball"
    const container = document.getElementById("container");
    container.appendChild(div);
}
