const user = {
    name : 'Salahuddin',
    pass : '123',
    secretkey : '321',
    passkey : 32,
    email : 'salahuddinq.cs@gmail.com'
};
const {name, pass, ...rest} = user;
console.log(name);
console.log(pass);
console.log(rest);

const auther = user;
const clonedUser = {...user};
clonedUser.name = 'Awais';
auther.name = 'Ali';
console.log(user.name);
console.log(auther.name)
console.log(clonedUser.name)


console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');