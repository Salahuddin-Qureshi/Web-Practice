const postbtn = document.getElementById('post-btn');
postbtn.addEventListener('click', () => {})
const posts = document.getElementById('post-container')
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
    const div = document.createElement('div')
    const title = document.createElement('p')
    const body = document.createElement('p')
    div.className = 'post';
    title.textContent = 'Title: '+element.title;
    body.textContent = 'Body: '+ element.body;
    div.appendChild(title)
    div.appendChild(body)

    posts.appendChild(div)

    });
    
})