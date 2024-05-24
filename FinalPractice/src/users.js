fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const div = document.createElement('div')
            const img = document.createElement('img')
            img.className = 'img'
            img.width = 130;
            img.src = (`https://api.dicebear.com/8.x/lorelei/svg?seed=${element.username}`);
            div.className = 'userbox';
            const username = document.createElement('p')
            const email = document.createElement('p')
            username.textContent = element.username;
            email.textContent = element.email;
            div.appendChild(img)
            div.appendChild(username);
            div.appendChild(email);
            document.querySelector('#user-container').appendChild(div);

        });
    });


