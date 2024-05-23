// url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))


// const Username = document.getElementById('username');
// const Email = document.getElementById('email');

url = 'https://jsonplaceholder.typicode.com/users'  
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const container = document.querySelector('.container');
//         data.forEach(user => {
//             const userBox = document.createElement('div');
//             userBox.classList.add('user-box');
//             const username = document.createElement('p');
//             username.textContent = user.username;
//             const email = document.createElement('p');
//             email.textContent = user.email;
//             userBox.appendChild(username);
//             userBox.appendChild(email);
//             container.appendChild(userBox);
//         });
//     });


fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.container');
        data.forEach(user => {
            const userBox = document.createElement('div');
            userBox.classList.add('user-box');
            const img = document.createElement('img');
            img.className = 'img';
            img.src = (`https://api.dicebear.com/8.x/lorelei/svg?seed=${user.username}`);
            img.alt = user.username;
            img.width = 150;
            img.title = user.username; // Add a tooltip with the username
            const username = document.createElement('p');
            username.textContent = user.username;
            const email = document.createElement('p');
            
            email.addEventListener('mouseover', () => {
                email.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;
            });
            email.addEventListener('mouseout', () => {
                email.innerHTML = user.email;
            });
            email.textContent = user.email;
            userBox.appendChild(img);
            userBox.appendChild(username);
            userBox.appendChild(email);
            container.appendChild(userBox);
        });
    });