fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            // const div = document.createElement('div');
            // const title = document.createElement('p');
            // const body = document.createElement('p');
            // div.className = 'post';
            // title.textContent = element.title;
            // body.textContent = element.body;
            console.log(element.title)

            // div.appendChild(title);
            // div.appendChild(body);
            // document.querySelector('#container').appendChild(div);
        });
    });



